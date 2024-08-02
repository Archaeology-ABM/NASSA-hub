//Sources:
//- SpeechSynthesis (Web Speech API): https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API
//- https://www.digitalocean.com/community/tutorials/how-to-build-a-text-to-speech-app-with-web-speech-api#prerequisites
//- https://dev.to/ademking/let-your-jekyll-blog-speak-for-itself-implementing-speech-synthesis-4fa7#:~:text=To%20add%20Speech%20Synthesis%20to%20your%20Jekyll%20blog%2C%20you%20will,Synthesis%20feature%20to%20your%20blog.
//- https://github.com/mdn/dom-examples/tree/main/web-speech-api

jQuery(function ($) {

  let app = $('#app');
  
  let SYNTHESIS = null;
  let VOICES = null;
  
  let ELEMENT_ID_TO_READ = "main_content";
  //let regex = /(?<=<\/h\d+>\s*)\S.*?(?=\s*<h\d|$)/gs;
  let TEXT_TO_READ = null;

  let VOICE_SPEAKING = false;
  let VOICE_PAUSED = false;

  let iconProps = {
    'stroke-width': 2,
    'width': 32,
    'height': 32,
    'class': 'text-secondary d-none',
    'style': 'cursor: pointer'
  };

  // get the default title of the tab (so we can change it later)
  let DEFAULT_PAGE_TITLE = document.title;

  // Gets the SVG markup for a Feather icon
  function iconSVG(icon) {
    let props = $.extend(iconProps, { id: icon });
    return feather.icons[icon].toSvg(props);
  }

  // Shows an element
  function showControl(control) {
    control.addClass('d-inline-block').removeClass('d-none');
  }

  // Hides an element
  function hideControl(control) {
    control.addClass('d-none').removeClass('d-inline-block');
  }

  // Get the available voices, filter the list to have only English filters
  function loadVoices() {
    // Regex to match all English language tags e.g en, en-US, en-GB
    let langRegex = /^en(-[a-z]{2})?$/i;

    // Get the available voices and filter the list to only have English speakers
    VOICES = SYNTHESIS.getVoices()
      .filter(function (voice) {
        return langRegex.test(voice.lang);
      })
      .map(function (voice) {
        return {
          voice: voice,
          name: voice.name,
          lang: voice.lang.toUpperCase(),
        };
      });
  }

  // Reset the variables to the defaults
  function reset() {
    SYNTHESIS.cancel();
    // Reset the voice variables
    VOICE_SPEAKING = false;
    VOICE_PAUSED = false;
  }

  // get the text from the page
  function loadPageText() {
    TEXT_TO_READ = document.getElementById(ELEMENT_ID_TO_READ).textContent;//.outerHTML.match(regex);
  }

  function loadApp() {
    // Pick a voice at random from the VOICES list
    let voice =
    VOICES && VOICES.length > 0
      ? VOICES[Math.floor(Math.random() * VOICES.length)]
      : null;

    // render the voice controls
    renderVoiceControls(voice || null);
  }

  function play(voice) {
    if (VOICE_SPEAKING) {
      // If voice is paused, it is resumed when the playButton is clicked
      if (VOICE_PAUSED) SYNTHESIS.resume();
          return resumed();
      } else {
          // Create utterances for the quote and the person
          let textUtterance = new SpeechSynthesisUtterance(TEXT_TO_READ);

          // Set the voice for the utterances if available
          if (voice) {
              textUtterance.voice = voice.voice;
          }

          // Set event listeners for the utterance
          textUtterance.onpause = paused;
          textUtterance.onresume = resumed;
          textUtterance.onboundary = updateVoiceControls;

          // Set the listener to activate speaking state when the quote utterance starts
          textUtterance.onstart = function (evt) {
              VOICE_SPEAKING = true;
              updateVoiceControls();
          };

          textUtterance.onend = stop;

          // Speak the utterance
          SYNTHESIS.speak(textUtterance);

          // workaround problem in Chrome (it will stop audio after 15s)
          let r = setInterval(() => {
            console.log(SYNTHESIS.speaking);
            if (!SYNTHESIS.speaking) {
              clearInterval(r);
            } else {
              SYNTHESIS.pause();
              SYNTHESIS.resume();
            }
          }, 14000);
      }
      document.title = "🔊 Playing... " + DEFAULT_PAGE_TITLE;
  }

  function pause() {
    // Pause the utterance if it is not in paused state
    if (VOICE_SPEAKING) SYNTHESIS.pause();
    document.title = DEFAULT_PAGE_TITLE;
  }

  // Helper function to enable pause state for the voice output
  let paused = function () {
    VOICE_PAUSED = true;
    updateVoiceControls();
  };

  // Helper function to disable pause state for the voice output
  let resumed = function () {
    VOICE_PAUSED = false;
    updateVoiceControls();
  };

  function stop() {
    // Clear the utterances queue
    if (VOICE_SPEAKING) reset();

    updateVoiceControls();
    document.title = DEFAULT_PAGE_TITLE;
  }

  function renderVoiceControls(voice) {
    let appPane = $('<div id="speech-app-pane" class="d-flex w-40 flex-column align-items-end border-top border-bottom border-info border-1"></div>');
  
    let controlsPane = $('<div id="controls-pane" class="d-flex flex-row w-100"></div>');

    let instructionToUser = $('<div class="d-flex align-self-center"><span style="font-size: normal;">Listen to content</span></div>');
    
    let controlButtons = $('<div id="control-buttons" class="d-flex flex-grow-1 justify-content-start align-items-center" style="margin-left: 5px;"></div>');
  
    // Create the SVG elements for the voice control buttons
    let playButton = $(iconSVG('play-circle'));
    let pauseButton = $(iconSVG('pause-circle'));
    let stopButton = $(iconSVG('stop-circle'));
  
    
  
    // Click event handler for the play button
    playButton.on('click', function (evt) {
        evt.preventDefault();

        play(voice);
    });
  
    // Click event handler for the pause button
    pauseButton.on('click', function (evt) {
        evt.preventDefault();

        pause();

        return paused();
    });
  
    // Click event handler for the stop button
    stopButton.on('click', function (evt) {
      evt.preventDefault();
      stop();
    });

    controlsPane.append(instructionToUser);

    // Add the voice controls to their parent element
    controlButtons.append(playButton);
    controlButtons.append(pauseButton);
    controlButtons.append(stopButton);
  
    // Add the voice controls parent to the controlsPane element
    controlsPane.append(controlButtons);
  
    // Add controlsPane to appPane
    appPane.append(controlsPane);

    // If voice is available, add the voice info element to the controlsPane
    if (voice) {
      let currentVoice = $('<div class="text-secondary font-weight-normal" style="font-size: 66%; text-align"><span class="text-dark font-weight-bold">' + voice.name + '</span> (' + voice.lang + ')</div>');
  
      appPane.append(currentVoice);
    }

    // Add the controlsPane to the DOM
    app.append(appPane);
  
    // Show the play button
    showControl(playButton);
  }

  function updateVoiceControls() {
      // Get a reference to each control button
      let playButton = $('#play-circle');
      let pauseButton = $('#pause-circle');
      let stopButton = $('#stop-circle');
    
      if (VOICE_SPEAKING) {
        // Show the stop button if speaking is in progress
        showControl(stopButton);
    
        // Toggle the play and pause buttons based on paused state
        if (VOICE_PAUSED) {
          showControl(playButton);
          hideControl(pauseButton);
        } else {
          hideControl(playButton);
          showControl(pauseButton);
        }
      } else {
        // Show only the play button if no speaking is in progress
        showControl(playButton);
        hideControl(pauseButton);
        hideControl(stopButton);
      }
  }

  function initialize() {
      if ('speechSynthesis' in window) {
        
        SYNTHESIS = window.speechSynthesis;
        
        reset();

        let timer = setInterval(function () {

          let voices = SYNTHESIS.getVoices();
    
          if (voices.length > 0) {
            loadVoices();
            loadPageText();
            loadApp();
            clearInterval(timer);
          }
        }, 200);
      } else {
        let message = 'Text-to-speech not supported by your browser.';
    
        // Create the browser notice element
        let notice = $('<div class="w-100 py-4 bg-danger font-weight-bold text-white position-absolute text-center" style="bottom:0; z-index:10">' + message + '</div>');
    
        console.log(message);
    
        // Display non-support info on DOM
        $(document.body).append(notice);
      }
  }

  initialize();

});

///////////////////////////////////////////////////
/*
// get the button
const audioBtn = document.querySelector(".audio-block");
// set the default state of the button
let isPlaying = false;
// get the default title of the tab (so we can change it later)
let defaultTabTitle = document.title;
// check if speechSynthesis is available in the browser
const isSynthAvailable = window.speechSynthesis !== undefined;
// if speechSynthesis is not available, hide the button
if (!isSynthAvailable) {
    audioBtn.style.display = "none";
}
// speak the text passed in as a parameter, and call the onend function when the speech is finished
function speak(text, onend) {
    window.speechSynthesis.cancel();
    var ssu = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(ssu);
    function _wait() {
        if (!window.speechSynthesis.speaking) {
            onend();
            return;
        }
        window.setTimeout(_wait, 200);
    }
    _wait();
    }

// get the text from the blog post
function getPageText() {
    const text = document.querySelectorAll(".content > *");
    let textArray = [];
    text.forEach((elem) => {
        textArray.push(elem.innerText);
    });
    // remove "Copy" from the start of the text
    textArray.forEach((elem, index) => {
    // if the text starts with "Copy", remove it
    if (elem.startsWith("Copy")) textArray[index] = elem.replace("Copy\n", "");
    });
    return textArray.join("\n");
}
// add click event listener to the button
audioBtn.addEventListener("click", () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
        let text = getPageText();
        speak(text, () => {
            isPlaying = false;
            audioBtn.classList.remove("active");
        });
    } else {
        window.speechSynthesis.cancel();
    }
    audioBtn.classList.toggle("active");
});

// stop audio when user navigates away from the page
window.addEventListener("beforeunload", () => {
    window.speechSynthesis.cancel();
});

// change title of the tab when audio is playing (to show that audio is playing)
window.setInterval(() => {
    if (isPlaying) {
        document.title = "🔊 Playing... " + defaultTabTitle;
    } else {
        document.title = defaultTabTitle;
    }
}, 500);
*/
//////////////////////////////////////////////////////
/*
const synth = window.speechSynthesis;

const inputForm = document.querySelector("form");
const inputTxt = "hya";//getPageText();//document.querySelector(".txt");
const voiceSelect = document.querySelector("select");

const pitch = document.querySelector("#pitch");
const pitchValue = document.querySelector(".pitch-value");
const rate = document.querySelector("#rate");
const rateValue = document.querySelector(".rate-value");

let voices = [];

function populateVoiceList() {
  voices = synth.getVoices().sort(function (a, b) {
    const aname = a.name.toUpperCase();
    const bname = b.name.toUpperCase();

    if (aname < bname) {
      return -1;
    } else if (aname == bname) {
      return 0;
    } else {
      return +1;
    }
  });
  const selectedIndex =
    voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;
  voiceSelect.innerHTML = "";

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " -- DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }
  voiceSelect.selectedIndex = selectedIndex;
}

populateVoiceList();

if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

function speak() {
  if (synth.speaking) {
    console.error("speechSynthesis.speaking");
    return;
  }

  if (inputTxt.value !== "") {
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);

    utterThis.onend = function (event) {
      console.log("SpeechSynthesisUtterance.onend");
    };

    utterThis.onerror = function (event) {
      console.error("SpeechSynthesisUtterance.onerror");
    };

    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");

    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
        break;
      }
    }
    utterThis.pitch = pitch.value;
    utterThis.rate = rate.value;
    synth.speak(utterThis);
  }
}

inputForm.onsubmit = function (event) {
  event.preventDefault();
  
  speak();

  inputTxt.blur();
};

pitch.onchange = function () {
  pitchValue.textContent = pitch.value;
};

rate.onchange = function () {
  rateValue.textContent = rate.value;
};

voiceSelect.onchange = function () {
  speak();
};

function getPageText() {
    const text = ["hya","hello","hi"];//document.querySelectorAll("p");
    let textArray = [];
    text.forEach((elem) => {
        textArray.push(elem.innerText);
    });
    return textArray.join("\n");
}
*/
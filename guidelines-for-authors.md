<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
}
/* Create two equal columns that floats next to each other */
.column {
  float: left;
  width: 50%;
  padding: 10px;
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}
</style>
</head>

# Guidelines for authors<!-- omit from toc --> 
- [Preparation](#preparation)
  - [Consider NASSA membership](#consider-nassa-membership)
  - [Set up Git and GitHub](#set-up-git-and-github)
  - [Clone the library repository](#clone-the-library-repository)
- [Creating a module](#creating-a-module)
  - [Creating a new branch](#creating-a-new-branch)
  - [Module root directory](#module-root-directory)
  - [Recommendation: use code editors or IDEs](#recommendation-use-code-editors-or-ides)
  - [Planning a directory structure](#planning-a-directory-structure)
  - [Implementation(s)](#implementations)
    - [Code style](#code-style)
  - [License](#license)
  - [references.bib](#referencesbib)
  - [CHANGELOG.md](#changelogmd)
  - [NASSA.yml (metadata)](#nassayml-metadata)
  - [README.md](#readmemd)
  - [Other documentation files](#other-documentation-files)
- [Submitting a module](#submitting-a-module)
  - [Validation (local)](#validation-local)
  - [Publishing the branch](#publishing-the-branch)
  - [Create Pull Request](#create-pull-request)
- [Reviewing a module](#reviewing-a-module)
  - [Conversation](#conversation)
  - [Adding changes](#adding-changes)
  - [Merging and final checks](#merging-and-final-checks)

---
## Preparation

### Consider NASSA membership

A submission author might want to become a NASSA member, which is free and only requires registration by contacting our core team. It will give direct access to the network with all its perks, including an easier developer workflow when contributing to NASSA's repositories.

### Set up Git and GitHub

GitHub hosts the library repository, which uses Git as the version control software. All submissions must be managed through GitHub and require a minimum knowledge of Git.

Submission authors that are not already GitHub users are free to choose any means of introduction to these tools, but we recommend consulting [GitHub Documentation](https://docs.github.com/). For a more general introduction to Git and GitHub, we also recommend [SSLA's "How to navigate the coding archaeology world: An introduction to scientific co-creation using Git and Github"](https://github.com/sslarch/caa2022_GitGitHub_workshop).

The following summarises the steps needed:

- **Create a personal account in GitHub**. Go to [https://github.com](https://github.com) select "Sign up", and follow the instructions.  
- **Install and set up Git**. Follow the instruction given in [GitHub Docs > Get started > Quickstart > Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git).  
- **Install GitHub Desktop** (optional). GitHub offers a graphical interface for managing Git/GitHub, as an alternative or complementary tool to the command line. Again consult the instructions given in [GitHub Docs > GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/overview/getting-started-with-github-desktop).

Finally, to verify that everything has been set up correctly, we recommend that authors complete the tutorial in [GitHub Docs > Get started > Quickstart > Hello World](https://docs.github.com/en/get-started/quickstart/hello-world).

### Clone the library repository

*If a member of NASSA in GitHub*:  
> Go to the library's repository main page on GitHub ([https://github.com/Archaeology-ABM/NASSA-modules](https://github.com/Archaeology-ABM/NASSA-modules)) and click on "<> Code" (green button).

*If NOT a member of NASSA in GitHub*:  
> Go to the library's repository main page on GitHub ([https://github.com/Archaeology-ABM/NASSA-modules](https://github.com/Archaeology-ABM/NASSA-modules)) and click on "Fork" in the top right area of the page. Accept the default settings by clicking "Create fork". Now, on your forked version of the repository, click on "<> Code" (green button).

*If using GitHub Desktop*:  
> Click on "Open with GitHub Desktop" which will open the application (browser permission required) with a pop-up window entitled "Clone a repository". Notice that this window will already include the repository URL. Choose the directory where to clone the files ("local path") and click on "Clone".

*If using Git command lines*:
> Follow the instructions in [GitHub Docs > Repositories > Create & manage repositories > Cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

---
## Creating a module

### Creating a new branch

To facilitate the management of submissions, we encourage all changes involving a module to be carried out inside a new branch.

A branch, in Git terms, is a series of versions of a repository where changes are contained until finally accepted and merged back into the main series. A Git branch is unlike an literal tree branch, but rather more similar to a river branch catching different sediments and then returning to the main flow, or a thread that diverges from a fabric, receive several knots and is woven together again.

*If using GitHub Desktop*:  
> Follow the instruction in [GitHub Docs > GitHub Desktop > Make changes in a branch > Managing Branches](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/managing-branches).

*If using Git command lines*:
> Follow the instruction in [GitHub Docs > Quickstart > Contributing to projects > Creating a branch to work on](https://docs.github.com/en/get-started/quickstart/contributing-to-projects).

### Module root directory

Navigate to the local copy of the NASSA library. In the root directory of the library, create a new directory or folder, which will be the root directory of the new module. The directory name must correspond to the module's unique identifier following the structure:

<div class="row">
  <div class="column">
    <ol>
        <li><b>Year of submission</b>. The year when the module is submitted to the library repository, never to be changed, even in future versions of the module.</li>
        <li><b>Submission author surname</b>. The surname of the submission author as a single word spelling and with no special characters. This is strictly for identification purposes, while the module authorship  credits are later detailed, inside NASSA.yml.</li>
        <li><b>Index number per each author-year</b>. A unique three-digit number based on how many modules the same author has submitted during a single year. The number is strictly for identification purposes and must be set following an ascending order (i.e., from 001 to 999).</li>
    </ol>
  </div>
  <div class="column">
    <img src="assets/module-root-name.png" alt="diagram of module root directory name" width="100%" style="border: 0; mix-blend-mode: multiply; box-shadow: none !important;">
  </div>
</div>

Each element is separated by a hyphen or minus sign ("-"; [Unicode specification](https://www.fileformat.info/info/unicode/char/2d/index.htm))

### Recommendation: use code editors or IDEs

We recommend using a **code editor** or an **integrated development environment** (IDE) to create and edit most module files.

Many code editors and IDE can open the module directory as a "project" or "working directory", which will help ensure no accidental changes are made to the rest of the library. Using such software will make editing more agile (e.g., autocomplete, syntax highlighting), help identify errors, and ease the use of command lines. Most will also offer seamless management of version control with Git.

There are many options, but a good example is [Visual Studio Code](https://code.visualstudio.com/) by Microsoft or [RStudio](https://posit.co/download/rstudio-desktop/) by Posit.

### Planning a directory structure

A minimal set of files must be present and structured in a specific manner inside the directory to be considered a NASSA module. These files must be named exactly as referenced in the [NASSA schema](https://github.com/Archaeology-ABM/NASSA-schema).

```
YYYY-SURNAME-001 (module root)
│   CHANGELOG.md
│   LICENSE
|   NASSA.yml
│   README.md
│   references.bib
│   
└───<IMPLEMENTATION LANGUAGE>
    └   moduleShortTitle.<LANGUAGE EXTENSION>
```

Following the example above:

```
1870-Schliemann-001 (module root)
│   CHANGELOG.md
│   LICENSE
|   NASSA.yml
│   README.md
│   references.bib
│   
└───netlogo_implementation
    └   TroyDestroyed.nlogo
```

To keep the preparation of a new module as short and simple as possible, NASSA strongly recommends using the module templates available at the library, identifiable by the suffix "TEMPLATE" (e.g. "0000-NASSA-001-TEMPLATE").

### Implementation(s)

!TO-DO

#### Code style

Any final code attached to the submission must be functional and readable. NASSA recommends authors are attentive to the following points:

**Naming**. Use consistent conventions to differentiate variables, parameters, and functions. Enforce exact, self-explanatory names, and avoid names imitating mathematical annotations. Exceptions could be made by compensating name simplification with more detailed commentary.

**Single-responsibility principle**. The code should be modular to the best of the authors' ability, mainly if the contribution is relatively complex (e.g., if the module involves several types of entities or represents a process in several steps). See more information at [Wikipedia](https://en.wikipedia.org/wiki/Single-responsibility_principle).

**No magic numbers**. Magic numbers occur in code without an explicit meaning and are not adjustable without altering the code. They should preferably be replaced by named variables, even if kept as constants. (https://en.wikipedia.org/wiki/Magic_number_(programming))

**Exposed inputs and outputs**. All variables named as either input or output of the module must be easily reachable in code from outside the module to enable the module's plug-and-play capability.

**Minimise dependencies**. Authors should avoid using third-party libraries, packages, etc., as much as possible. It is crucial to avoid any software that is relatively hard to obtain or set up. Dependencies are always a risk for reproducibility and code sustainability in the long run.

**Commentary in code**. Be repetitive and explain language-specific terms (not easily searchable) whenever possible. Expand information whenever relevant, e.g., offering a source (preferably a stable URL) or explaining the logic behind a hardcoded or suggested parameter value. Add full references (with web link if available, of the sources used to inform the design of an algorithm or set parameter values. If there are any code fragments "commented-out", use a clear and consistent way to differentiate these from actual comments.

To help achieve these principles, one or more NASSA members will review a module submission (Pull Request) and suggest changes to the submission author (GitHub user) through either comments or modifications to the files as they are in the Pull Request. Comments and changes can be assessed, rebutted, or accepted by authors. Alternatively, authors may cancel the Pull Request and prepare a new revised one. For more information, see [Reviewing a module](#reviewing-a-module).

### License

Authors should choose an open license stating the permissions for the module's use, reproduction, and modification. NASSA recommends either [MIT](http://www.opensource.org/licenses/MIT) or [GPL-3](https://www.gnu.org/licenses/gpl-3.0.en.html) (see also [GitHub’s choosealicense.com](https://choosealicense.com/)).

The license text must be included as a separate file named "LICENSE" (American English spelling) in the root directory. In some types of implementation, when the entire code is present in a single file (e.g., NetLogo), we recommend adding a short version or mentioning the license at the start or end of this file.

### references.bib

A BibTex file named "references.bib" is placed in the root directory of the module and should contain all references mentioned in the metadata ("NASSA.yml"). BibTeX files can be generated using reference management software (e.g. Zotero).

### CHANGELOG.md

All changes in the module files must be reflected in their version number and noted in the log file ("CHANGELOG.txt"). NASSA encourages the use of [semantic versioning](https://semver.org/), whenever applicable, according to which versions are tagged vX.Y.Z, where X, Y and Z are positive integers that increase when a new version involves major, minor and patch (correction) changes. Changes to the module metadata, such as the correction of typos, wording adjustment, and author data update, are generally considered at the lowest level.

### NASSA.yml (metadata)

Metadata is contained in the "NASSA.yml" file, placed in the module's root directory, as exemplified in the templates.

To learn more about the YAML format, consult the [language website](https://yaml.org/), [Wikipedia entry](https://en.wikipedia.org/wiki/YAML), or any of the many tutorials available on the Web.

Authors may consult the detailed specifications of each field in the [NASSA schema repository](https://github.com/Archaeology-ABM/NASSA-schema/blob/main/README.md#nassayml-fields) ([JSON file](https://github.com/Archaeology-ABM/NASSA-schema/blob/main/nassa-schema.json)).

There are, however, a few general points to consider when filling up "NASSA.yml":

**Authorship**: authors are considered in relation to their roles (Author, Compiler, Contributor, Copyright Holder, Creator, Thesis Advisor, Translator; see definitions [here](https://journal.r-project.org/archive/2012-1/RJournal_2012-1_Hornik~et~al.pdf)). A module must have at least one person listed as an "Author", "Copyright Holder" and "Creator", typically the person preparing and managing the submission, whose surname is represented in the module ID. A submission author, who is not directly responsible for the implementation code, should retain the abovementioned roles and name at least one additional author with an "Author" and "Copyright Holder" role. Later code modifications and documentation modifications can be acknowledged under the "Contributor" role. Individuals involved in formulating the algorithm but not creating the module may be acknowledged as "Author" and "Copyright Holder".

**Domain keywords** (subjects, regions, periods): freestyle categories, open to standardisation to avoid duplicates. NASSA recommends using terms already established in ontologies elsewhere (e.g., [EHRAF](https://ehrafworldcultures.yale.edu/ehrafe/majorSubjects.do) for subjects, [GeoNames](http://www.geonames.org/) for regions, [perio.do](https://perio.do/en/) for periods).

**Input and output**: to facilitate later use and improve the visualisation of the module functionality, NASSA requests that all input and output variables and parameters are listed and shortly described.

**Relative paths**: A few NASSA.yml fields that aim to register specific directories and files inside the module root directory.

### README.md

The most generic documentation file is "README.md", which aims to present the module with a brief overview and is assumed to be the users' first contact with the module. It is written in GitHub-flavoured [markdown](https://www.markdownguide.org/) and may include images and external links.

The following section structure must be kept:
```
# Module name  
Authors' full name  

Description  

## License

## Further information
```

In "Further information", we recommend the display of any images included as part of the module documentation, such as diagrams, screenshots, output graphs in demonstrations, etc. Consult other modules as examples or copy the template modules, which are always at the top of the module list, with identifiers starting with "0000-NASSA".

### Other documentation files

Although not a strict requirement for acceptance, module should aspire to include a minimal set of files dedicated to documentation. Modules offering more documentation materials will be significantly more visible and usable by the community.

Because modules are both program specifications and implementations, we recommend that documentation is prepared at two levels:

- A generic understanding of what the program does and its entities, variables, parameters, etc, as well as any reference or scientific argument to contextualise its design. General documentation will typically involve infographics, diagrams, and text descriptions. We recommend storing the files holding this type of documentation inside a subdirectory directly in the module's root directory (e.g., `1870-Schliemann-001/documentation/`).

- A description of the terms and design of a single implementation, including practical instructions and specific terminology. This should also include instructions on compiling and running the respective code, if necessary. We recommend storing these files inside the subdirectory with the corresponding implementation (e.g., `1870-Schliemann-001/python_implementation/documentation/`). Some examples of language-specific documentation materials are:  
  - **Set up instructions**. Instructions on compiling and running the code. This is more relevant when using general-purpose programming languages or relying on specific libraries or external software. 
  - **User reference manual**. Variable and methods/functions lists, entity definitions, etc.  
  - **Screenshots** of graphical interface or output.  
  - **Pseudocode**. Representation of code as a sequence of logic steps (i.e., algorithm), using free-text or mathematical notation, or using graphical resources, be it formal (e.g., UML) or informal (e.g., infographics).  
  - **ODD or similar**, when submitting modules of the type "submodel". To know more about ODD, see Grimm et al. 2013.  
  - **Demostrations**. A step-by-step demonstration of the module use and outputs, combining explanations in text and code fragments, typically in a interactive notebook format (e.g., .ipynb, .rmd).

>Grimm, V., Polhill, G., & Touza, J. (2013). Documenting Social Simulation Models: The ODD Protocol as a Standard. In B. Edmonds & R. Meyer (Eds.), Simulating Social Complexity: A Handbook (pp. 117–133). Springer. https://doi.org/10.1007/978-3-540-93813-2_7

To boost the visibility of documentation files, we recommend that authors create a markdown file at both general and implementation levels to present a list of the documentation files (e.g., tableOfContents.md), with brief descriptions and links (relative paths) to the respective files. Such a file can then be linked from README.md (see examples of how to do it in the templates offered in the library)

Below is an example of the recommended directory structure for a module containing files in both levels of documentation:

```
1870-Schliemann-001 (module root)
│   .gitignore
│   CHANGELOG.md
│   LICENSE
|   NASSA.yml
│   README.md
│   references.bib
│
└───documentation
│   │   tableOfContents.md
│   │   designDetails.md
│
└───python_implementation
    │   TroyDestroyed.py
    |   theCity.py
    |   Greeks.py
    |   Trojans.py
    │   demonstration.ipynb
    |
    └───documentation
    |   │   tableOfContents.md
    |   │   instructions.md
    |   │   city-plan.png
    |   |   social-network.dot
    │
    └───input
    │   │   warriorData.csv
    │   │   TroyDEM.png
    │
    └───output (for demonstration purposes)
        │   events.csv
```

---
## Submitting a module

### Validation (local)

### Publishing the branch

### Create Pull Request


## Reviewing a module

### Conversation

### Adding changes

### Merging and final checks


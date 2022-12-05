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

# NASSA library

The NASSA library is an **open-source** repository collecting **stable, version-controlled modules** to be used inside or in connection to **(agent-based) simulation models** that aim at representing **socio-ecological systems** and addressing **archaeological questions**.

NASSA provides a **standardised module format** ([NASSA-schema](https://github.com/Archaeology-ABM/NASSA-schema)) and encourages programming good practices, as well as a framework for the **review and curation of modules** using [GitHub code review feature](https://github.com/features/code-review).

Modules are **authored submissions**, individually **licensed** and **citable** as other academic publications. However, as a community resource, they remain open for **further development and revision** by the original author(s) or any contributor, under the curation of NASSA members.

<div style="text-align: center; border: 5px solid #03989E; background-color: black;">
<a href="https://archaeology-abm.github.io/NASSA-modules" style="color: #03989E;">
    Browse modules using the NASSA library Web interface
    <img src="assets/library-index.png" style="width:100%; height: 200px; object-position: -20% 0; top: 0; object-fit: cover; -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0))); mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));">
</a>
</div>
<br>

# What is a NASSA module?

<div class="row">
  <div class="column">
    <p>
    A NASSA module is a <strong>program specification and implementation</strong> in one or more programming languages, accompanied by its unique <strong>metadata</strong> and <strong>documentation</strong> designed to facilitate its long-term and community-wide understanding and reuse. All modules are ultimately <strong>algorithms</strong>, i.e., finite sequences of formal instructions that receive an <strong>input</strong> and generate an <strong>output</strong>. 
    </p>
  </div>
  <div class="column" style="text-align: center;">
    <img src="assets/module.png" alt="diagram of module elements" width="50%">
  </div>
</div>

<div class="row">
  <div class="column">
    <p>
    The NASSA library schema classifies modules as <strong>algorithms</strong> only if their functionality is indivisible. Alternatively, modules are classified as <strong>submodels</strong> if they contain more than one algorithm that can be explicitly defined as separate modules.  
    </p>
  </div>
  <div class="column" style="text-align: center;">
    <img src="assets/module-types.png" alt="diagram of module types" width="50%">
  </div>
</div>

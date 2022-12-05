<head>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css">
  <style>
    .grid-container{
      display: grid;
      grid-template-columns: repeat( auto-fit, minmax(150px, 1fr) );
      grid-gap: 10px;
    }
    .grid-element{
      background-color: #F2F2F2;
      border: 1px solid;
      border-color: grey;
      text-align: left;
      padding: 15px;
    }
    .grid-symbol {
      text-align: center;
      font-size: 30px;
    }
  </style>
</head>

<div class="grid-container">
  <div class="grid-element">
    <div class="grid-symbol"><i class="fas fa-code" aria-hidden="true"></i></div>
    NASSA provides a standardized <a href="https://github.com/Archaeology-ABM/NASSA-schema">module format</a> for ABM models and model components
  </div>
  <div class="grid-element">
    <div class="grid-symbol"><i class="fas fa-hammer" aria-hidden="true"></i></div>
    NASSA develops a <a href="https://github.com/Archaeology-ABM/nassa-hs">software tool</a> to validate NASSA modules
  </div>
  <div class="grid-element">
    <div class="grid-symbol"><i class="fas fa-database" aria-hidden="true"></i></div>
    NASSA maintains a publicly hosted and curated <a href="https://archaeology-abm.github.io/NASSA-modules">module repository</a> of published ABM models
  </div>
</div>

The **N**etwork for **A**gent-based modelling of **S**ocio-ecological **S**ystems in **A**rchaeology (**NASSA**) is a research network with the goal to gather an international, interdisciplinary group of researchers to collect and compile agent-based modelling (ABM) elements (implementation modules, techniques, approaches, etc.) and organise them as an open modelling library.

The targets of this network are:

1. identify and compile crucial modelling topics for the library;
2. collect and develop best practices and modelling guidelines;
3. develop tools for interoperability following the FAIR principles;
4. guarantee sustainability of the library;
5. create a structure for international collaboration resulting in joint publications within the network.

See [NASSA organisation page in GitHub](https://github.com/Archaeology-ABM) for more  full overview.

## What is ABM of SES in archaeology?

Agent-based modelling (ABM) has in recent years developed into an important methodological tool in archaeological research, especially when approaching questions from the perspective of socio-ecological systems (SES) as coupled human and natural spheres exchanging energy and resources.

ABM focuses on the dynamics and actions of individual agents as computational entities that act autonomously and can represent social agents that interact with each other and their environment. When designing an agent-based model, the aim is not to mimic the patterns of our data but to recreate the mechanisms that, under certain conditions, will generate those patterns.

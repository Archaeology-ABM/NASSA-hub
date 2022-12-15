<head>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css">
  <style>
    .grid-container{
      display: grid;
      grid-template-columns: repeat( auto-fit, minmax(180px, 1fr) );
      grid-gap: 10px;
    }
    .grid-element{
      background-color: #ddd;
      border: 1px solid;
      border-color: #666;
      text-align: center;
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
    <a href="{{ site.url }}/library.html" style="color: #03989E;">
    <strong style="font-size:200%">LIBRARY</strong>
    <div class="grid-symbol"><i class="fas fa-database" aria-hidden="true"></i></div>
    NASSA maintains a publicly hosted and curated repository of ABM-related algorithms
    </a>
  </div>
  <div class="grid-element">
    <a href="https://github.com/Archaeology-ABM/NASSA-schema" style="color: #03989E;">
    <strong style="font-size:200%">SCHEMA</strong>
    <div class="grid-symbol"><i class="fas fa-code" aria-hidden="true"></i></div>
    NASSA provides a standardized format to store and document NASSA modules
    </a>
  </div>
  <div class="grid-element">
    <a href="https://github.com/Archaeology-ABM/nassa-hs" style="color: #03989E;">
    <strong style="font-size:200%">VALIDATION</strong>
    <div class="grid-symbol"><i class="fas fa-hammer" aria-hidden="true"></i></div>
    NASSA develops a software tool to validate NASSA modules based on the NASSA schema
    </a>
  </div>
</div>

See [NASSA organisation page in GitHub](https://github.com/Archaeology-ABM).

## What is ABM of SES in archaeology?

Agent-based modelling (ABM) has in recent years developed into an important methodological tool in archaeological research, especially when approaching questions from the perspective of socio-ecological systems (SES) as coupled human and natural spheres exchanging energy and resources.

ABM focuses on the dynamics and actions of individual agents as computational entities that act autonomously and can represent social agents that interact with each other and their environment. When designing an agent-based model, the aim is not to mimic the patterns of our data but to recreate the mechanisms that, under certain conditions, will generate those patterns.


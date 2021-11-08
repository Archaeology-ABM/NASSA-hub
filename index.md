# Network for Agent-based modelling of Socio-ecological Systems in Archaeology (NASSA)
## Background

Agent-based modelling (ABM) has in recent years developed into an important methodological tool in archaeological research, especially when approaching questions from the perspective of socio-ecological systems (SES) as coupled human and natural spheres exchanging energy and resources. ABM focuses on the dynamics and actions of individual agents as computational entities that act autonomously and can represent social agents that interact with each other and their environment. When designing an agent-based model, the aim is not to mimic the patterns of our data but to recreate the mechanisms that, under certain conditions, will generate those patterns.

The Network for Agent-based modelling of Socio-ecological Systems in Archaeology (NASA) is a research network with the goal to gather an international, interdisciplinary group of researchers to collect and compile ABM elements (implementation modules, techniques, approaches, etc.) and organise them as an open modelling library. The targets of this network are:


1) identify and compile crucial modelling topics for the library;
2) collect and develop best practices and modelling guidelines;
3) develop tools for interoperability following the FAIR principles;
4) guarantee sustainability of the library;
5) create a structure for international collaboration resulting in joint publications within the network.

<ul>
  {% for post in site.posts %}
    <li>
      <h2><a href="/NASA/{{ post.url }}">{{ post.title }}</a></h2>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>

## Who are we?

Research units currently active in NASA are:

* Sagalassos Archaeological Research Project (SARP), University of Leuven
* Roman Mediterranean Archaeology Research Unit, Ghent University
* Ghent Centre for Digital Humanities (GhentCDH), Ghent University
* CLUE+, Vrije Universiteit Amsterda
* Research Centre for the Roman Period and the Migration Period, Institute of Archaeology of the Czech Academy of Sciences, Brno
* Cultures and Environments. Prehistory, Antiquity and Middle Ages (CEPAM), French National Centre for Scientific Research (CNRS), University Côte d’Azur
* Computational and Digital Archaeology Laboratory (CDAL), McDonald Institute for Archaeological Research-Department of Archaeology, University of Cambridge
* Complexity Lab Barcelona (CLB), University of Barcelona
* Computational Social Sciences and Digital Humanities Research Group (CSSDH), Barcelona Supercomputing Center
* Analytical Sociology and Institutional Design (GSADI Group), Autònoma University of Barcelona
* Institute for Archaeological Sciences, Departement for Prehistoric Archaeology, Bern University
* Science, The Santa Fe Institute (SFI)
* Institute of Archaeology (IoA), University College London
* GIO - Grupo de Ingeniería de Organización, Universidad de Burgos
* Computational Research on the Ancient Near East (CRANE) Project, University of Toronto
* Water Resources / CEG (WRM Group), Delft University of Technology 

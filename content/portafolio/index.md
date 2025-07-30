---
title: "Portafolio"
toc: true
hideBackToTop: true
hidePagination: true
---

## Projects
### **kindle2org**
Python script that takes the notes, highlights and bookmarks from an
Amazon Kindle and organizes in an Org file. Check the [Github
repository](https://github.com/AbrahamVillaFigueroa/kindle2org) for
more info.

### **The Journey of Pzazz**
#### Summary
Japanese style Role-Playing Game that aims to merge the classic style
of the 90's SNES-era videogames with a turn-based battle system
reminiscent of contemporary roguelikes. Instead of using a progression
system based on gathering experience points and leveling up, common in
most RPGs, *The Journey of Pzazz* implements a progression system
based on achievements, which gives the player more freedom to pursue
the tasks he prefers, and contributes to create a more manageable and
strategic stats system. 

This is currently work in progress, so not all features have been
properly implemented, and only a short demo is available upon request.

#### Game Engine
The game is being developed using the LÖVE framework and the Tiled
Level Editor. This allows for fast iteration and prototyping, and for
a simpler, code-only development experience that suits me better as a
sole developer.

#### Code architecture
The main structure of the game is a hierarchical state machine that
stacks game states according to the game logic. This works very well
for a JRPG because this type of game channels player input through
several menus that pause the main play state.

The high number of interwoven systems (inventory, stats, quests, story
flags, interactive dialogues, party management) also required a heavy
use of OOP, event managers, static machines, and command patterns in
its codebase.

#### Art
Most of the art was bought from third-party pixel artists in itch.io,
or taken from free assets in opengameart.org. 

#### Screenshots
![img](imgs/pzazz1.png#small)
![img](imgs/pzazz2.png#small)
![img](imgs/pzazz3.png#small)
### Demo and source code
These are available upon request. 

### **Websites**
#### El cine probablemente
[Project website](https://elcineprobablemente.com/index.html) created in plain HTML, CSS and JavaScript for the
magazine I created and edited. It is hosted in GitHub Pages. 
#### Commissioned personal website
Personal website that aims to adopt a vintage/indie web aesthetic to
generate a distinctive impression.
It is not currently online anymore, but here are some screenshots of it. 
![img](imgs/retro-web1.png#small)
![img](imgs/retro-web2.png#small)

## Certificates
[CS50 - Introduction to Computer Science](docs/CS50x.pdf)

[CS50 - Introduction to Programming with Python](docs/CS50P.pdf)

<!-- Local Variables: -->
<!-- jinx-languages: "en_US" -->
<!-- End: -->

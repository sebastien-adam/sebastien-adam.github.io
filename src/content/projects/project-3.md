---
title: 'Inextricable'
subtitle: "Installation artistique interactive"
pubDate: 2024-02-19
description: 'Une installation artistique audio/visuelles interactive '
author: 'Sébastien ADAM'
images: ['./3_crashserver_inextricable_overview.webp', './3_crashserver_inextricable_rez.webp']
alts: ["installation artistique inextricable, vue d'ensemble", "installation artistique inextricable, rez like"]
link: 'https://crashserver.fr/inextricable-presentation/'
tags: ["python", "C++", "arduino", "hybrid"]
sizes: [{width: 1080, height: 1440}, {width: 1080, height: 1920}]
featured: true
---

## Présentation de l'installation

**Inextricable** est une installation artistique que j'ai conçue avec mon duo Crash Server dans le cadre du [Festival Européen du Film Fantastique de Strasbourg](https://strasbourgfestival.com/fr/) en 2021.

L'idée était de créer une piste de danse interactive dans un univers entre Matrix et les jeux vidéo des années 90.
La musique est générée aléatoirement en continue durant les quelques mois de la durée de l'exposition et varie en fonction de la présence des visiteurs afin d'avoir à chaque visite une experience unique.

Les visuels sont également générés aléatoirement suivant des patterns définis et réagissent à la musique ambiante.
L'immersion est soutenue par l'utilisation de rubans leds pilotables, de spots de lumières contrôlable, de multiples écrans avec interactions visiteurs et d'une décoration faite de plusieurs centaines de mètres de câbles en tous genres.

## Description détaillée

L'installation est composée de plusieurs parties :

- un serveur central, un PC gamer gérant les différentes sorties vidéos.
- 5 Raspberry Pi + Arduino pour gestion des capteurs volumétriques, caméra 3d Kinect, players videos, rubans led,...
- 3 vidéoprojecteurs
- des tas d'écrans CRT (TV à tube)
- des projecteurs lumières contrôlés par les protocoles DMX et ArtNet
- un système de son quadriphonie

## Technologie utilisée

- Python: generation de musique à l'aide de la librairie de livecoding *FoxDot* et développement d'un algorithme de composition automatique et génératif selon certaines règles musicales.
- C++ / [OpenFrameWorks](https://openframeworks.cc/): utilisé sur les RaspberryPi pour la gestion des inputs / outputs des Arduino, lecteur video, creation de visuels génératifs audio-réactifs, gestion de la caméra 3D Kinect.
- LAN: mise en réseau de tous les éléments à l'aide d'un routeur et dialogue avec le protocole OSC.
- Arduino: gestion du ruban led programmable, des capteurs de présence.

## Bilan

Ce projet a été très intéressant et m'a permis de monter en compétences sur pleins d'items. De la gestion de projet en équipe, au respect des délais de livraison, au mélange des techniques (ferronnerie, électronique, réseau, programmation, scénographie, audio/vidéo,...).

Très fier du rendu, d'avoir livrer un produit fini et fonctionnel pour le jour de l'inauguration et des retours du publique et professionnels.

## Plus d'infos

### La vidéo Youtube de présentation:

[![Inextricable - Crash Server](https://i.ytimg.com/vi/uqZ6ZC7LI4c/hqdefault.jpg)](https://www.youtube.com/watch?v=uqZ6ZC7LI4c "Inextricable - Crash Server")

### Des articles qui présentent l'installation:

- [CrashServer - Presentation of the installation (in English)](https://crashserver.fr/inextricable-presentation/)

- [CrashServer - Technical presentation (in English)](https://crashserver.fr/inextricable_tech/)

- [Artcile du FEFFS (en Fr)](https://strasbourgfestival.com/fr/inextricable-crash-server/)

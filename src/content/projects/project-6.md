---
title: 'Où garer mon vélo'
subtitle: "Une application web pour trouver des arceaux vélo proche de soi"
pubDate: 2024-03-17
description: "Une application en VueJs qui affiche une carte de Strasbourg avec des arceaux vélos proche de sa géolocalisation"
author: 'Sébastien ADAM'
images: ['./6_garemonvelo_mobile.png', './6_garermonvelo.png']
alts: ["Une carte de Strasbourg avec la localisation d'arceaux vélo, version mobile", "Une carte de Strasbourg avec la localisation d'arceaux vélo"]
sizes: [{width: 413, height: 453}, {width: 1200, height: 675}]
link: 'https://zbdm-gare-mon-velo.mdbgo.io/'
tags: ["VueJs", "API", "OpenData"]
featured: true
---

## Explication du besoin
Une application bien pratique quand on est cycliste à Strasbourg. En effet, Strasbourg est une agréable ville cyclable dotée d'une belle infrastructure mais par conséquent il y a aussi beaucoup d'usagers.

Se garer et attacher son vélo de manière sécurisée peut devenir problématique. 

C'est pourquoi j'ai développé cette petite application pour permettre de trouver facilement, autour de soi, les emplacements d'arceaux cycliste.

## Un peu de techniques

J'ai profité de ce projet pour tester le framework VueJs et je dois dire que je le préfère à React (simple opinion personnelle). 

J'ai également testé les requêtes d'API REST grace au jeu de données Open Source fourni par la ville de Strasbourg.

Enfin j'ai expérimenté l'api de géolocalisation de nos navigateurs web (navigator.geolocation).

Pour l'affichage de la carte et des marqueurs j'ai utilisé la librairie Leaflet, un projet opensource qui s'appuie sur les cartes d'OpenStreetMap (également OpenSource).

Enfin j'ai utilisé Vite comme serveur de développement. 

## En pratique

Vous pouvez [tester cette application](https://zbdm-gare-mon-velo.mdbgo.io/), mais elle ne fonctionnera pleinement que si vous vous situez dans l'Eurométropole de Strasbourg.


Les liens utiles:
- les données [OpenData](https://data.strasbourg.eu/pages/accueil/) de la ville de Strasbourg
- [vuejs](https://vuejs.org/)
- [Leaflet pour Vue 3](https://github.com/vue-leaflet/vue-leaflet)
- [Vite](https://vitejs.dev/)
- [mdbgo pour deployer l'application](https://mdbgo.com/)


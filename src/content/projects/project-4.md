---
title: 'Portfolio Sébastien ADAM'
subtitle: "Un site static avec Astro et Tailwind"
pubDate: 2024-02-20
description: "Mon portfolio écrit à l'aide du générateur de site statique Astro"
author: 'Sébastien ADAM'
images: ['./4_porfolio_homepage.png', './4_porfolio_projet.png']
alts: ["Page d'accueil du portfolio de Sebastien ADAM", "Page d'article du portfolio de Sebastien ADAM"]
sizes: [{width: 1285, height: 848}, {width: 1262, height: 638}]
link: 'https://sebastien-adam.github.io'
tags: ["astro", "tailwind", "github"]
featured: false
---

Pour faire mon portfolio, j'avais envie de tester des nouvelles technologies et m'intéresser aux frameworks à la mode.

Après quelques recherches sur les sites statiques hébergés sur github, j'ai décidé d'essayer [Astro](https://astro.build/) et [Tailwind](https://tailwindcss.com/).

J'ai testé d'abord différents thèmes et templates mais je me suis perdu et j'ai préféré partir de 0 et suivre le tutorial pour façonner mon site comme je le voulais.

Après quelques temps passé à paramétrer et comprendre le fonctionnement de ces frameworks, j'ai trouvé très agréable le fait de définir ses layouts en amont et d'écrire ses articles en Markdown directement.

On définit également ses composants (navigation, footer, hero, ...), on compose les pages en les réutilisant et Astro s'occupe de tout pour compiler le site en statique.

De plus, Astro gère le responsive des images en les convertissant automatique en *Webp* et fournit les tailles adéquates. Il s'occupe également de minifier le *JS* et le *CSS*.

Cerise sur le gateau, pour le déploiement, je suis passé par les **GitHub Actions** qui permettent à chaque *push* sur ma branche principale de lancer le build du site. Super pratique.

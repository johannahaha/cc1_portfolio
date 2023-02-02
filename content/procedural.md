---
title: Procedural Generation and Simulation
tags: [Creative Coding, Shaders]
preview_img: /img/procedural/noise.png
year: 2021
phrase: Exploration and experimentation in Houdini
location: Potsdam, Germany
link: &nbsp
---

# Procedural Generation & Simulation in Houdini

In the class procedural generation and simulation, we learned about procedural workflows with Houdini. We explored and experimented with the concept. Here are some of my results.

## Extrusion

![procedural01](/img/procedural/extrusion.png)

## Math

![procedural02](/img/procedural/math.png)

## Noise

![procedural03](/img/procedural/noise.png)
![procedural04](/img/procedural/noise2.png)
![procedural05](/img/procedural/noise.gif)
![procedural06](/img/procedural/noise2.gif)

## Particles and Forces

![procedural07](/img/procedural/spread.gif)
![procedural08](/img/procedural/force.gif)

## Final Project: Spaghetti

![procedural08](/img/procedural/pgs_finalproject.gif)

In my final project, I interpret noodles in a new way. You recognize them, but I alienated the materials and properties. I chose an everyday object, which I interpreted in a new and abstract way and created procedurally - a pasta plate. The components are spaghetti that rolls up, a plate that bends as soon as more stuff lands on it, tomatoes, and a grainy sauce that falls from the sky.

I implemented the pasta with various Vellum nodes. The noodles themselves are Vellum Hair that Gravity pulls down, curling due to the hair properties. The hair has been thickened with a tube to give it a spaghetti-like appearance.
The tomatoes are Vellum Balloons that have soft body properties, giving them consistency. They are placed the highest and fall to the bottom, making them the last to appear on the plate.
For the plate, I took a Vellum Cloth with increased stretch and bend properties and pinned its edges. That causes it to flex in the middle once the weight of the noodles depresses the fabric.
The little balls are Vellum Grains and are supposed to represent the sauce - however, they look more like a grainy pesto or capers... I created the grains in the volume of a sphere. They fall due to Gravity. I placed some invisible spheres on the way down, which causes the Grains to deform and not fall as a round ball. They then spread out on the plate, but still, stick together due to Vellum Glue. I have tried meshing with Point Deform and VOP Particles to make them appear like a liquid, but I have not been able to do it satisfactorily. That is something that I want to look into more in the future.
I assigned each component its material. I also colored the blanket and the grains to match their velocity, resulting in the changing color.

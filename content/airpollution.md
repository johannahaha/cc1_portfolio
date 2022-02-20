---
title: Air Pollution Light Bulb
tags: [Creative Coding,Data]
preview_img: /img/airpollution/aqi1.png
year: 2021
---

# Air Pollution in Berlin: Make the invisible visible

## Abstract

Do you actually know the quality of the air you breath in? Air Pollution is invisible. And it is always around us in Berlin. This project makes the invisible visible and colors the light around you according to the quality of the air. How does it work? With a smart light bulb you connect to the app. 

This project was the small-scale project of the class "creative coding 2" with OpenFrameworks with the topic of Interfaces.

## Project description

![idea.jpeg](/img/airpollution/idea.jpeg)

Although air pollution is a ubiquitous problem, it remains invisible to us. This app makes the invisible visible. It does this by coloring the air around us - in a way that reflects the air quality. Here, I focus on the air pollution index (AQI) in Berlin. The app retrieves the current value of each district and calculates a color to match the quality. That means that the lamp lights up green when the air quality is good and red as soon as it is unhealthy for sensitive groups. The classification here comes from a WHO recommendation. The app works with the IKEA Tradfri gateway, to which an RGB light bulb must then be linked. With the help of a library, my app controls the light, so that the color changes. If you don't have an RGB bulb, it is not a problem. If it is possible, the app dims the light bulb if the air quality is poor. In any case, the background color of the app changes accordingly to give immediate feedback.  So it is possible to use it without an RGB bulb.

The app aims to create awareness for air quality and air pollution in Berlin by making the invisible problem visible.

For creating this documentation, I also used very high values.

Here is a link to the [visual documentation](https://www.youtube.com/watch?v=EYrlpDQTe8c)

`youtube: https://youtu.be/_EYrlpDQTe8c`

## Interface

![aqi1.jpeg](/img/airpollution/aqi1.png)
![aqi2.jpeg](/img/airpollution/aqi2.png)
![aqi5.jpeg](/img/airpollution/aqi5.png)

## Interface and Smart Light

![aqi3.jpeg](/img/airpollution/aqi3.png)
![aqi4.jpeg](/img/airpollution/aqi4.png)

## Implementation

I implemented it in OpenFrameworks and Python.

The first step is to use the GUI to specify the location from which the air pollution should be determined. 
![gui_location.jpeg](/img/airpollution/gui_location.jpeg)

From this location the app determines the current air pollution via an API.

![http_request.jpeg](/img/airpollution/http_request.jpeg)

This value is then converted to a color for the background and a color for the lamp. 

![color_mapper.jpeg](/img/airpollution/color_mapper.jpeg)

The lamp is controlled with the Pytradfri library. This library controlling IKEA gateways and their associated devices with Python. Thus the color of the lamp is passed as an argument into a Python script.

![color_setting.jpeg](/img/airpollution/color_setting.jpeg)
# Disasters Tracker

## Description
This is a project, which show natural disasters all over the world. You can click on each icon for more info about this disaster.
The application has a geocoder, that locate an input address. The application have used [NASA API](https://eonet.sci.gsfc.nasa.gov/docs/v3#eventsAPI) and [OpenCage API](https://opencagedata.com/) to fetch information for natural disasters and locate a place by input address. In order to make these requests you need a valid MAPBOX ACCESS TOKEN and API KEY. You can visit this application [here](https://disasterstracker.netlify.app).

## Table of Contents
1. [Technology stack](https://github.com/IvayloBorisov/disasters-tracker#technology-stack)
2. [Installation](https://github.com/IvayloBorisov/disasters-tracker#installation)
3. [Usage](https://github.com/IvayloBorisov/disasters-tracker#usage)

## Technology stack
- React
- HTML5
- CSS3
- react-map-gl
- d3-ease

## Installation
```
npm install 
```
```
npm start 
```
With these commands you will install every dependencies, which are necessary and the application will start on address localhost:3000.

## Usage
When the app was started you can look a world map with different kind natural disasters on it. You can navigate through the whole map, zoom in, zoom out. When you click on an icon, you will read more information about this disaster. 

![](/repo_image/home.png)

The application it has a geocoder functionality, you have to write an address in input field. If the  [OpenCage API](https://opencagedata.com/) for some reason can`t locate the address, then the app will throw an error.

![](/repo_image/error.png)






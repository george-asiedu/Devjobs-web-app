# DevjobsWebApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.3.

## Table of Contents

- [Overview](#overview)
    - [The Challenge](#the-challenge)
    -[Screenshots](#screenshots)
    -[Project Links](#project-links)
- [My Processes](#my-processes)
  - [Built with](#built-with)
    -[Project Setup](#project-setup)
    -[Challenges Encountered](#challenges-encountered)
    -[What I Learned](#what-i-learned)

## Overview

Your challenge is to build out this jobs board using a local data.json to retrieve the data. Your goal is to try to get your project looking as close to the design as possible.
You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.
We provide the data in a local data.json file, so use that to populate the content on the first load. If you want to take it up a notch, feel free to build this as a full-stack application!

### The Challenge

Your users should be able to:

    - Be able to filter jobs on the index page by title, location, and whether a job is for a full-time position.
    - Be able to click a job from the index page so that they can read more information and apply for the job.
    - View the optimal layout for each page depending on their device's screen size.
    - See hover states for all interactive elements throughout the site.
    - Bonus: Have the correct color scheme chosen for them based on their computer preferences. Hint: Research prefers-color-scheme in CSS.
    - Bonus: Build this project as a full-stack application.

### Screenshots

![](/desktop-light.png)
![](/desktop-dark.png)
![](/mobile.png)
![](/modal.png)
![](/tab-details.png)


### Project Links

- Solution URL - [Devjobs web app](https://github.com/george-asiedu/Devjobs-web-app/tree/frontend)
- Deployed Site URL - [Devjobs web app](https://devjobs-app-george.netlify.app/)

## My Processes

### Built With

    - Tailwind CSS
    - CSS custom properties
    - Mobile first workflow
    - Tailwind Flex Properties
    - Angular 17
    - Angular Service Component
    - Angular Components workflow
    - External devjobs endpoint
    - Custom JSON data
    - Angular Modal Component
    - Filter Component
    - Tailwind and custom CSS theme selection
    - Angular Rxjs
    - Angular Event Emitters and Pipes
    - Angular Http Methods
    - Angular Template- Driven Forms Module
    - Parent to child component workflow

### Project Setup

    - Run the command `npm install` to install the project dependencies
    - Run the command `ng serve` to run the application server
    - Open the application in the browser using [open application](http://localhost:4200/)

### Challenges Encountered

    - Handling Errors in the service component to display it to the user.
    - Creating reusable tailwind classes for color schemes to handle the theme switching.
    - Passing data from one component to another without repeating the codes.
    - Filtering the data returned by subscribing to the endpoint and passing it from one component to another.
    - Displaying a modal component to filter the data in the home component without repeating codes.
    - Turning on the custom JSON data always to fetch the data when the application is deployed.
    - Implementing a search logic to return the filtered jobs data to the user.

### What I Learned

    - How to implement only one function in the service to be accessible in all components with duplication.
    - How to create a single component to handle all the data returned by subscribing to the endpoint.
    - Using event emitters to pass data from the modal component to the home component as props.
    - Passing data from one component to the other.
    - Filtering the data returned from subscring to the service in a single component to be accessible to another component.
    - Creating a modal component and adding user interactiveness with a close button.
    - Creating a user-friendly application by providing and error and loading messages to the user.
    - Using resuable css and tailwind properties to handle theme switching.
    - Using the correct color schemes for the application.
    - Implementing a component workflow application in Angular.
    - using the rxjs library in angular.
    - implementing a mobile first design workflow .
    - Hosting JSON data to be used as an endpoint to fetch data in the service.
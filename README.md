# Superhero Database by Matt Williamson

## Description

This project takes in data from a superhero database and it gives in a nice UI. It shows the superheros as a list, but also as a responsive grid including their images.

## Installation

1. Clone the repo: git clone git@github.com:mathewbwilliamson/superhero-app.git
2. Change directory to `superhero-app`.
3. Install the packages with `npm install`.
4. Start the app in your local environment: `npm start`.
5. The app should open automatically, but if it's doesn't, open `http://localhost:3000` in your browser.

## Checklist of Requirements

- [x] [feature: Build a View with two Tabs]
- [x] [feature: The first tab is a List view of superheroes with ID, Name, and Real Name]
- [x] [feature: The second tab is a grid of the same superhero (Image, Super Hero Name)]
- [x] Use the following superhero data (https://tppublic.blob.core.windows.net/test-data/super-heroes.json)
- [x] We should be able to run this project with an 'npm start'
- [x] The only technical requirement is React

## Basic Overview

List View, Desktop
![image](https://user-images.githubusercontent.com/39387181/152694819-f35a541e-50ab-419e-8f47-8635c61b72c6.png)

Grid View, Desktop
![image](https://user-images.githubusercontent.com/39387181/152694978-51ea405a-1290-4bd4-ba82-5d99ec9769d7.png)

List View, Mobile

![image](https://user-images.githubusercontent.com/39387181/152694867-32a0a54a-a8e6-4ed3-aef5-c5c376e008d6.png)

Grid View, Mobile

![image](https://user-images.githubusercontent.com/39387181/152694995-779c706c-67a2-4341-b23e-146555b04081.png)

## Items of Note

- I tried to make the overall design with a comics theme. This is the first thing I've ever created that uses comic-sans non-ironically. And yet, I still added a small skew to the text in order to make it a little bit better.
- I kept the width to be 75ch as that is a good width for readability.
- I built the Tabs component from scratch. It is fairly reusable.
- There is one custom hook in order to fetch the data. It is reusable and it includes support for tracking loading and errors, along with the data itself.
- The architecture/folder structure is one that I've used for a while, and it makes sense. It has the following structure:

  - assets: Where any assets go. None for this project.
  - components: Any components that are not page components go here. This includes reusable components and more bespoke components.
  - customHooks: Any and all custom hooks will go here. Not every project I build will have these.
  - pages: For the pages themselves, usually in apps that have React Router or NextJS, but I still include it here for organization's sake.
  - services: Generally I keep my apiClient here, but also anything that might need 3rd party configuration would go here. I discuss the apiClient below.
  - styles: In this app, I have chosen to do a light version of an Inverted CSS Triangle system.
  - types: Where app-level types and enums go.

- My apiClient in the apiService.ts file is where all my Axios requests go through. Many people do not create an apiClient as the documentation suggests, which eventually can lead to many apiClients being created. Instantiating an apiClient as in the documentation solves that problem as there will only be one.
- List/Grid tab buttons are interesting as I wanted to make them look more 3D, but be very obvious about which button/tab was selected.
- All of the stylized pieces of the UI are all CSS. There are no SVGs used.
- The Grid shows two images side-by-side in a UI that looks very much like a comic book. It is also responsive.
- Lighthouse score is 100% for all except for Performance. Performance is a 98%. There are Future Improvements to fix this.

## Future Improvements

- Make it a bit wider, 75ch for the text pieces not just the container of those text pieces.
- Find a better font for the main font instead of comic-sans. Even though it kind of works for this application, it's still not a good font.
-

## Parting Words

Thank you for reviewing my readme all the way to this point— it's kinda long.

Thank you to my code reviewers for taking valuable time out of their day to review my project.

All the best,

Matt Williamson

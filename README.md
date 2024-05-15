# Conexa Frontend Challenge - Rick & Morty Character Tracker

![image](https://github.com/ezequielmgonzalez/conexa-challenge/assets/90068543/2525e73c-2586-4a6e-8f0f-cf4a4d1df3bd)

## Description
App done for the Conexa's challenge. This tracker shows the user two lists of characters where it is possible to select up to 2 (one from each list) and then get the episodes list from both characters. This last list also shows the shared episodes between the two selected characters.
All this data is gotten via [Rick & Morty's API](https://rickandmortyapi.com/)

## Technologies
The bundler used was Vite and the frontend was made with React and Typescript. Also used some components from [shadcn/ui](https://ui.shadcn.com/docs). 

## Deployment
[Check the demo here!](https://ezequielmgonzalez-conexa.vercel.app)

## Running this project locally
To run the application in a local environment:
1. Clone the repo.
2. Install dependencies: ```npm install```
3. Start running the application with: ```npm run dev``` 

## Implementation
The idea was to take advantage of the React hooks and components to have everything re-usable and with a moudlar approach, following the design patterns and principles recommended by React. To achieve this, I decided that the logic of requesting the data to the APi should be custom hooks like this first draft i have drawn:

![image](https://github.com/ezequielmgonzalez/conexa-challenge/assets/90068543/19a6a15f-02cd-4c7f-9c50-5cea643f3fdc)

Basically, the characters on the list and the selected characters by the user should be accessible from differnet UI elements. Then I also found that i was running into some prop-drilling. To fix that I decided to make the characters selectors to be available in the whole APP with a [Context](https://react.dev/reference/react/createContext). This way, the component that needed the info of the selected characters, just consumed the context.

Also, I found that some calculations like the shared episodes should be memoized (with the hook _useMemo_) to make the app faster and improve its performance.

Lastly, I have made the app in a way that mobiles can still look at it and have their UI elements visible. The app is better on desktop because of the high visiblity of all components.


Install required dependencies with ``npm install`` and run the app with ``npm start`` 

A live instance of the app is running on http://tinytales-priyansh.herokuapp.com

The Front end component is made in React and is stored in client folder which includes all the UI components and pages

The backend is run from server.js which serves the front end.
The front end includes components such as the particles component to render particle background and table.js component to render data in tabulated format.
The main logic of the app is provided from logic.js which has a user defined function written to count different words in the given url and return top k words occuring in the txt.

Libraries and plugins used:
ReactJS, Axios, ExpressJS, MaterialUI, React Particles JS, body-parser, cors, path, request.
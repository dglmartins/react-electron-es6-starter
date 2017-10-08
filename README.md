# electron-react-redux-es6-spread-class-properties-quick-start

**Clone and run for a quick way to see Electron with react-redux-es6 in action.**

This is built on top of electrons quick start guide for minimal Electron application, connecting it with React and Redux. It compiles on the fly with babel-register without other configuration. Checkout (http://electron.atom.io/docs) for extra Electron documentation.

Develop your React + Redux app in /src folder.

Built in support for es6, class properties transformations (class arrow function definitions), spread operators (such as in redux store) and dev tools with npm run dev.

No support for certain things which would come with create-react-app (for example, `import './App.css'` would not work, instead you would link the css in index.html (for example `<link rel="stylesheet" href="./src/App.css">`). Another example is the lack of file-loader which would work in create-react-app. (for example, `import logo from './logo.svg'` would not work in a component, instead you would add the image path in the src `<img src="./src/logo.svg" className="App-logo" alt="logo" />`)

To add react and redux dev tools extensions on chrome:

1) Find the paths of the ids of the extensions and the version on chrome. (details @ https://electron.atom.io/docs/tutorial/devtools-extension/).

2) Once you know the id and version of an extension on chrome, go to main.js and in app.on('ready'), uncomment example provided in BrowserWindow.addDevToolsExtension and replace the path passed to the function with the correct path for you. The paths currently there are just examples!

You can learn more about Electron components within Electron's [Quick Start Guide](http://electron.atom.io/docs/tutorial/quick-start).

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.

Fork and clone, then

npm install
# Run the app
npm start

or # Run the app with devtools

npm run dev

to build a mac package:

npm run package:mac

## Resources

- (http://electron.atom.io/) - Electron'
- (https://reactjs.org/docs/hello-world.html) - React
- (http://redux.js.org/) - Redux

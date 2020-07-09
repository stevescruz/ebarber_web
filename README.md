<h1 align="center">
    <br>
    eBarber Web
</h1>

<h4 align="center">
  Register as a client or a barber. The eBarber web page allows clients to choose a barber and schedule 
  available appointments.
</h4>

<p align="center">
  <a href="#goal">Goal</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#work-in-progress">Work in Progress</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

![App Screenshot](https://res.cloudinary.com/dmct8cfu9/image/upload/v1594280788/ebarber_web_signup.gif)
![App Screenshot2](https://res.cloudinary.com/dmct8cfu9/image/upload/v1594280792/ebarber_web_signin.gif)

## Goal

The goal is to create a full project using Node.js, ReactJS, and React Native from start to finish, fulfilling all possible steps since 
preparing the development environment with Docker, configuring tools that help maintain code quality (EditorConfig, ESLint and Prettier)
to testing with Jest, deploying and all the coding in between.

eBarber web is a web application that can consume the eBarber API to provide its services.

**NOTE**: Check the eBarber API [here](https://github.com/stevescruz/ebarber_backend).

## Work in Progress

- [x] Project structure
  - [x] Boilerplate with Create React App
  - [x] Prepare EditorConfig
  - [x] Configure ESLint
  - [x] Set up Prettier
- [x] Global Styles and Components
  - [x] Styled Components library
  - [x] Input Component
  - [x] Button Component
- [x] Sign In Page
  - [x] React-Icons library
  - [x] Polished library
  - [ ] Validating Sign In
- [x] Sign Up Page
  - [x] Managing the Form with Unform library
  - [x] Input Usability with visual cues (On Focus)
  - [x] Validating the Form with Yup library
  - [x] Displaying Input errors
- [ ] Authentication
  - [ ] Enable API access with CORS
  - [ ] Sign In with Context API
  - [ ] Save User information and Token (JWT) with Local Storage
  - [ ] Sign Out
- [ ] Toast Notifications
  - [ ] Need to break this step down into smaller steps
- [ ] Application Routes
  - [ ] Configure Routes with React Router V4
  - [ ] Authenticated Routes
- [ ] More steps comming soon...

## Technologies

This project was developed with the following technologies:

-  [TypeScript](https://www.typescriptlang.org/)
-  [ReactJS](https://reactjs.org/)
-  [Create React App](https://create-react-app.dev/)
-  [React Router v4](https://github.com/ReactTraining/react-router)
-  [styled-components](https://www.styled-components.com/)
-  [Polished](https://polished.js.org/)
-  [React-Icons](http://react-icons.github.io/react-icons/)
-  [Unform](https://unform.dev/)
-  [Yup](https://github.com/jquense/yup)
-  [GitHub REST API v3](https://developer.github.com/v3/)
-  [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] (or higher), and [Yarn v1.13][yarn] (or
higher) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/stevescruz/ebarber_web.git

# Go into the repository
$ cd explore_github

# Install dependencies
$ yarn install

# Run the app
$ yarn start
```

## :memo: License
This project is under the MIT license.

---

[Get in touch with me!](https://www.linkedin.com/in/stevescruz/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

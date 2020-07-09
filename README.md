<h1 align="center">
    <br>
    eBarber Web
</h1>

<h4 align="center">

  The eBarber web page allows you to join as a client or a barber! If you are a client pick your favorite barber and schedule an available appointments. If you are a barber disclose your available times.

</h4>

<p align="center">
  <a href="#goal">Goal</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#requirements--user-stories-work-in-progress">Requirements & User Stories</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

![App Screenshot](https://res.cloudinary.com/dmct8cfu9/image/upload/v1594280788/ebarber_web_signup.gif)
![App Screenshot2](https://res.cloudinary.com/dmct8cfu9/image/upload/v1594280792/ebarber_web_signin.gif)

## Goal

The goal is to create a full project using TypeScript, Node.js, ReactJS, and React Native from start to finish, fulfilling all possible steps since preparing the development environment with Docker, configuring tools that help maintain code quality (EditorConfig, ESLint and Prettier) to testing with Jest, deploying and all the coding in between.

eBarber web is a web application that can consume the eBarber API to provide its services.

**NOTE**: Check the eBarber API [here](https://github.com/stevescruz/ebarber_backend).

## Requirements & User Stories (Work in Progress):

- [x] Project structure
  - [x] Boilerplate with Create React App
  - [x] Prepare EditorConfig
  - [x] Configure ESLint
  - [x] Set up Prettier
- [x] Global Styles and Components
  - [x] Styled Components library
  - [x] Global Styles Component
  - [x] Input Component
  - [x] Button Component
- [x] Sign In Page
  - [x] React-Icons library
  - [x] Polished library
  - [x] Validate Sign In
- [ ] Sign Up Page
  - [x] Managing the Form with Unform library
  - [x] Input Usability with visual cues (On Focus)
  - [x] Validating the Form with Yup library
  - [x] Displaying Input errors
  - [ ] Sign Up Request to the Back-end with Axios
- [x] Authentication
  - [x] Enable API access with CORS
  - [x] Sign In with Context API & useAuth custom hook
  - [x] Store User information and Token (JWT) with Local Storage
  - [x] Sign Out with Context API
- [ ] Toast Notifications
  - [ ] Toast Notifications structure
  - [ ] useToast custom hook
  - [ ] Add and Remove Toast
  - [ ] Animating Toast
- [ ] Application Routes
  - [ ] Configure Routes with React Router V4
  - [ ] Authenticated Routes
- [ ] More steps coming soon...

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
-  [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [ReactJS 16.13.1](https://reactjs.org/) (or higher), and [Yarn v1.13][yarn] (or
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

[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

# react-redux-homework &middot; [![Build Status](https://travis-ci.org/ss77995ss/react-redux-homework.svg?branch=react-redux-step1](https://travis-ci.org/ss77995ss/react-redux-homework)
> bootstrap by [razzle](https://github.com/jaredpalmer/razzle)

## Shell command
* `npm start`		Run & compile the project and show on the Internet
* `npm test` 		Execute Jest to apply unit testing
* `npm run` report	Show testing report


-------------------------------------------------------------

## Goals
Learn `react`, `redux` and the ecosystem.

### What's Your Job?
You need to create a basic CRUD functionality for a issue tracker, like following:
![table-example](http://i.imgur.com/tyecoP9.png)

Please follow below steps to do your job:   

Step 1
  * Construct your `app` with [starter kits](https://reactjs.org/community/starter-kits.html) and use `React` to construct your view and display above table.
    * Sample: `git checkout starter-kit`
  * Please divide your component, only one component is `invalid`
  * The data is just a fake array currently

Step 2
  * Complete a CRUD functionality
  * If a row is updated, please make that row with a particular background color
  * Just with some fake data like previous step
  * You need to think about how you perform the CRUD operation on the UI
  * Please linting your `JavaScript` via [eslint](https://eslint.org/). The following are recommended `preset`:
    * [eslint-config-react-app](https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app)
    * [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)

Step 3
  * Add `Redux` as the `flux` implementation
  * Still using fake data

Step 4
  * Abandon `startkit` and construct the server by your own.
  * Use `webpack` or `browserify` as your module bundler
  * Environment `development (dev)` and `production (prod)` are required. `uglify` and `minify` should be implemented on `prod`.

Step 5
  * Now, save your data in the database and use `Node.js` & `Express` as your backend
  * CRUD operation will be handled in the backend
  * Follow normal RESTful design for CRUD request

Step 6
  * Run your development/production in `Docker`

Step 7
  * Use `react-router` to separate one view to couples views for CRUD operation
  * Design by yourself

## Requirements

### Workflow
1. Please `fork` this repository, create a git `branch` per step. After finishing of each step, create `Pull Request`s to merge to your master.
2. `Definition of Done` (DoD) for per step: You should finish `component`, `unit test` and make sure `Continuous Integration (CI)` run tests successfully, which means `CI` badges should be displayed as `Passed`.
   * Write test if your component or function is in incubating instead of finish
3. Please write the description and the `shell command` of your application in `README`.

**NOTE: Your code should be Configurable, Testable and Maintainable**

### Technical
* React
* Redux
* React-Router
* Node.js & Express
* It's necessary to write the testing for both frontend and backend
* Deploy your application to `CI` like `Travis`, `Circle` or any else.

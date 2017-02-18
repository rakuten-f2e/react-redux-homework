# react-redux-homework

## Goals
Learn `react`, `redux` and the ecosystem.

### What's Your Job?
You need to create a basic CRUD functionality for a issue tracker, like following:
![table-example](http://i.imgur.com/tyecoP9.png)

Please follow below steps to do your job:   

Step 1
  * Create a repo and use `React` to construct your view and display above table
  * You can use `webpack` or `browserify` as your module bundler
  * Please divide your component, only one component is invalid
  * The data just a fake array currently

Step 2
  * Complete a CRUD functionality
  * If a row is updated, please make that row with a particular background color
  * Just with some fake data like previous step
  * You need to think about how you perform the CRUD operation on the UI

Step 3
  * Add `Redux` as the `flux` implementation
  * Still using fake data

Step 4
  * Now, save your data in the database and use `Node.js` & `Express` as your backend
  * CRUD operation will be handled in the backend
  * Follow normal RESTful design for CRUD request

Step 5
  * Use `react-router` to separate one view to couples views for CRUD operation
  * Design by yourself

**NOTE: You should create a git branch per step.**    
**NOTE: Your code should be Configurable, Testable and Maintainable**

### Technical Requirements
* React
* Redux
* React-Router
* Node.js & Express
* It's necessary to write the testing for both frontend and backend
  * Write test if your component or function is in incubating instead of finish
* Perform your development/production in the `Docker`
  * You are supposed to be bootstrap your application in the `Docker` at the beginning
* Deploy your application to `Travis` CI
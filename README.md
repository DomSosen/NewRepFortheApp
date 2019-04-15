# Basic CRUD MERN stack app

## Why? [![start with why](https://img.shields.io/badge/start%20with-why%3F-brightgreen.svg?style=flat)](http://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action)

This is my first project to build a full stack MERN app to understand how the application runs in the background. 

This repository contains code to render a web app that is pre-configured with the MERN stack (MongoDB, Express.js, React, Node.js). I used Atlas Cloud Services to host the Mongo database in the Cloud via Amazon Web Services; Contrary to the illustration below, Express and Node.js are run locally but I found this photo very descriptive and decided to include it in the readme file.  

The goal of the project is to build a simple Create/Remove/Update/Delete user/object from/to the database. 

![](https://github.com/IBM/pattern-utils/raw/master/mern-starter/architecture.png)

## Contributions [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)

I would love if you could take  look at the app and tell me what I can do better @Peter @Daniel @Julius @Patryk
Your feedback is crucial to the rise of Dominik project. :)

## Flow of the Application

1. The user can see a React based web app within any browser.
2. The React front end communicates with the Express back-end via RESTful API.
3. The back-end Express application uses uses Mongoose to talk to the Mongo database (Cloud AWS) for storing and retrieving data.
4. Back-end results are communicated back to the front-end.
5. Front-end data fetched from the db is rendered in a human-readable format to the user.

### Tech

The app uses the following frameworks/runtime environments:

* [React] - The best solution to create webapp FAST!
* [node.js] - runtime environment for JS
* [Express] - fast node.js network app framework 
* [MongoDB] - for local or cloud database setup. In the config file there is a key to my Atlas DB with my credentials thus the project is private. This will allow you to access (I hope) the db without the need of creating a local db. 

Due to technical limitations this build did not use Docker containers to run the database. Instead a cloud solution helped to avoid using docker at this stage of the app.  


### Installation

This MERN app requires [Node.js](https://nodejs.org/) v10+ to run. 

 After downloading the repository from GitHub, navigate the current working repository and install the dependencies and devDependencies from the main project folder.

```sh
$ cd main folder of the project
$ npm install -d from the package.json file 
```

Dependencies Concurrently and Nodemon have been installed to make it easy for both front-end and back-end server to run and update simultaneoulsy. 

Next install dependencies for front-end server

```sh
$ cd client
$ npm install -d
```

Verify the deployment by going back from "client" folder to the main directory of the project and running pacakge.json script called dev

```sh
$ cd .. to the main directory
$ npm run dev
```

Now a new react rendered page should be triggered in your browser. If this is not the case, you have not installed required dependencies.  

--------- 
Back-end server runs on port 7778
Front-end server is running on port 3000 
--------- 
thus if you have other projects running on the same port please close them before running this script. 

### Todos for the app / Project status

 - Write MORE Tests
 - Fix a bug with displaying data from the DB
 - Add edit functionallity for the users 
 - Add delete functionallity to the display user

License
----
MIT

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [react]: <https://reactjs.org/>
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [mongoDB]: <https://www.mongodb.com/>
    

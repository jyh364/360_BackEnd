# Setup

This documentation will provide a brief overview of how to start up an express app. For more details, visit the [Express JS Documentation](https://expressjs.com/)

## Initialize Project
    ```
        $ npm init
    ```

    For all the response, just click `return`

## Initialize Express App

    ```
        $ npm install express --save
    ```
    
1.  Create `app.js` file inside of source directory. This file will be reposible for starting up the server and listen on the designated port. 
2. As per Express documentation, using `express generator` to build out the skeleton of the application.
    ```
        npx express-generator
    ```
    Note: `npx` is a `npm` package runner and a tool intended to execute node packages.

    NPM: Manages packages, but doesnt easily execute any.
    NPX: A tool to execute node packages.

    What is `./bin wwww`? The `bin` directory serves as a location to define startup scripts. The `www` is an example to start the express app as a web server. Note that `bin` might be used to mean executable. This is a summary of this SO article. [StackOverflow](https://stackoverflow.com/questions/23169941/what-does-bin-www-do-in-express-4-x)

```
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.pug
    ├── index.pug
    └── layout.pug

7 directories, 9 files
```
3. Routing determines how an application responds to a client's request to a certain endpoint.

4. To connect a database to the web site we're building, we will follow the [Sequelize](https://sequelize.org/master/manual/getting-started.html) documentation to get started. Since we will be using [Postgres](https://www.postgresql.org/) we will install the dependencies there.
    ```
        npm install sequelize --save
        npm install pg pg-hstore --save
    ```

    As per the documentation, to connect to the database associated with our application, we must create a Sequelize instance. This is done by either passing the connection parameter to the sequelize constructor, or by passing a single connection URI.

    ```
        const { Sequelize } = require('sequelize');
        // Option 1: Passing a connection URI
        const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

        // Option 2: Passing parameters separately (sqlite)
        const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: 'path/to/database.sqlite'
        });

        // Option 2: Passing parameters separately (other dialects)
        const sequelize = new Sequelize('database', 'username', 'password', {
        host: 'localhost',
        dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
        });

    ```

    Sequelize is an Object-Relational Mapper (ORM) library for js what allows developers to write javascript code to query the database. For a brief overview of ORM please check out this [Article](https://blog.bitsrc.io/what-is-an-orm-and-why-you-should-use-it-b2b6f75f5e2a).


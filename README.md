# Todo List Manager

## Setup

You need:

- [Mysql v8.0.21](https://www.mysql.com/)
- [Node v12.18.1 (LTS)](https://nodejs.dev/)

You need to create a .env file in the root of the repository. Like this:

```
├ .vscode
    ├── ...
├ server
    ├── ...
    ├── ...
├ webapp
    ├── ...
    ├── ...
├.REACME.md
├.env <--
├ ...


```

Inside there you have to define the following environment variables for the database and the secret word for the jsonwebtoken package. For instance:

```
DB_HOST=localhost
DB_USER=root
DB_PASS=root
JWT_SECRET=someRandomSecretWord
```

To run the full stack app you have to start it from your terminal with.

```
./start.sh
```

This will install all the modules needed to make the app work, and after that, it will open the app in development mode.

The default test user and password is:

```
user: "test@test.com"
password: "123456"
```

You could build the webapp to production with the given commands, you would have to cd into webapp and execute  
`npm run build`

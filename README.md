# Todo List Manager

## Setup

First of all, you'll need:

- [Mysql v8.0.21](https://www.mysql.com/)
- [Node v12.18.1 (LTS)](https://nodejs.dev/)

After you installed that, you have to create a .env file in the root of the repository. Like this:

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

Then, you have to define the following environment variables for the database and the secret word for the jsonwebtoken package. For instance:

```
DB_HOST=localhost
DB_USER=root
DB_PASS=root
JWT_SECRET=someRandomSecretWord
```

IMPORTANT: The App asumes you are setting the server url to `http://localhost:4000`. If you want to change this you would create a file called `.env.development.local` or `.env.production.local` inside the `webapp` folder. Like this:

```
REACT_APP_BACKEND_URL=http://mybackendurl:4000
```

The initial setup is now ready. To run the full stack app you have to start it from your terminal with

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

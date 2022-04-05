# Website Personal

Simple node app to generate static files to serve at [http://bradleyoesch.com](http://bradleyoesch.com). Uses [Radish](https://radishjs.com/) to generate html from react files.

## Running Locally

1. Install [node](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment#installing_node)
1. Install [npm](https://www.npmjs.com/get-npm)


Install dependencies and start the app.
```bash
npm use
npm i
npm run start
```

Server will run at [http://localhost:8000](http://localhost:8000).

## Creating Pages

Add new file to `src/pages/`, named after the path, e.g. foo.com/bar should be named `bar.tsx`.

# Website Personal

Simple node app to generate static files to serve at [http://bradleyoesch.com](http://bradleyoesch.com).

## Development

1. Install [node](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment#installing_node).
1. Install [npm](https://www.npmjs.com/get-npm).

Run the app.
```bash
node src/js/app.js
```

Server will run at [http://127.0.0.1:3000/](http://127.0.0.1:3000/).

Create pages with:
```bash
node src/js/page.js create filename1 ... filenameN
```

Delete pages with:
```bash
node src/js/page.js rm filename1 ... filenameN
```

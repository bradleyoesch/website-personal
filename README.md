# Website Personal

Simple node app to generate static files to serve at [http://bradleyoesch.com](http://bradleyoesch.com).

## Running Locally

1. Install [node](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment#installing_node)
1. Install [npm](https://www.npmjs.com/get-npm)


Install dependencies and start the app.
```bash
npm i
npm start
```

Server will run at [http://127.0.0.1:3000/](http://127.0.0.1:3000/).

## Creating/Deleting Pages

Create pages with:
```bash
node src/js/page.js create filename1 ... filenameN
```

Delete pages with:
```bash
node src/js/page.js rm filename1 ... filenameN
```

## Updating Pages

The html is generated with [mustache templates](https://mustache.github.io/) which live in the `src/templates/` dir. The filename will correspond to the url path. All pages use `base.html` as the base template.

The css is generated with [SASS](https://sass-lang.com/) which live in the `src/scss/` dir. The filename will correspond to the url path. All pages import `base.scss` as the base stylesheet.

Running the app or watching for file changes will render the templates into html and compile the scss into css, then store them in `build/`, where the server looks to serve the files for the browser.

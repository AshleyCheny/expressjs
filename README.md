# Building a Website with Node & ExpressJS
This is a repository copy from the author for practice purpose. The course link: [lynda.com](http://lynda.com).

# Notes
## How NodeJS works?
- Load modules with `require();`
- Built-in or external

## Modules
- http

## How Express Works? (A js library)
- Provide additional methods
- `require()`
- `express()`
- No mime type
  - A MIME type is a label used to identify a type of data. Eg. text/html
  - Express will handle mime type
- Easy routing

## Express.js Basics
### Basic routing
- Use `app.get()`;
- Pass variables req.params

### Modularizing routes
#### NodeJS & Express modularization
- NodeJS modularization
- Node: `require()`, `module.exports`
- Express: `app.use()`
- Express: `express.router()`
#### Passing Data to route
- Express: `app.set()`
- Express: `req.app.get()`

### Creating a public folder
- `app.use()`
- `express.static()`

### Automating the workflow
- Watch for changes
  - Nodemon package (Node Monitor)
    - `install -g nodemon`
- Reload browser
  - [Reload package](https://github.com/alallier/reload/tree/master#api-for-express)
    - `install -g reload`
- Use package.json scripts to use a preference name as command
  - `"scripts": {
      "start": "nodemon -e css,ejs,js,json --watch app"
    },`

## Working with Templates
### Installing a templating engine
- Use any Templates
- [Embeddable JavaScript (EJS)](http://www.embeddedjs.com/)
  - `npm install --save ejs`

### Using data with views
- `res.render('index', { data })`
- `app.locals.??? = {}`

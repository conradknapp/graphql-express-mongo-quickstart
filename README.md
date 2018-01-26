# GraphQL - Express - MongoDB Quickstart

This is a little project that may serve a couple of purposes for those interested in using GraphQL with Express/Mongo in their projects: 

1. It is a springboard for beginning a larger project which implements GraphQL. It is a quick way of setting up a backend for an application that uses some JS framework and Apollo on the frontend. Node has adopted the async/await syntax in version 8, but I am still using the recommended Babel package (babel-presets-env) for transpilation of any other new ECMAScript features (i.e. object spread). Webpack is likely the only thing that needs to be added if you want to start building the client side. I have Mongo running locally here, so it will function without any preliminary setup, but can also accept a URI from a database hosted on mlab. 

2. It has a significant amount of comments that hopefully impart a basic understanding of how GraphQL works in concert with Express and Mongo. I used the example model that Mongoose provides in their documentation and added some basic queries and mutations, which should serve as a decent guide for beginning to work with types and schemas in GraphQL.

I tried to keep this project as pared down as possible. It only includes the essential packages needed to get everything up and running. One thing this lacks is a build command, but I will add this as well as a couple of other small additions if they prove useful.

## Requirements

Node 8.1.2 or higher

## Development

```
npm install 
```
```
npm run dev 
```

Visit `http://localhost:3333`

Go to `http://localhost:3333/graphql`

Create your first mutation:

```js
mutation {
  createCat(name: "Scratchy") {
    _id
    name
    lives
  }
}
```

Send your first query: 

```js
{
  getAllCats {
    _id
    name
    lives
  }
}
```
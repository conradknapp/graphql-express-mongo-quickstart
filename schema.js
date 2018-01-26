export default `

type Cat {
  _id: String!
  name: String!
  lives: Int!
}

type Query {
  getAllCats: [Cat]!
  catById(_id: String!): Cat!
}

type Mutation {
  createCat(name: String!): Cat!
  deleteCat(_id: String!): Cat!
  updateCat(_id: String! name: String!): Cat!
  addLife(_id: String): Cat!
  clearAllCats: Cat
}

`;

export const typeDefs = `#graphql
    type Post {
    id:ID!
    title:String!
    views:Int!
    # accounts:[String!]!
  }
  type Query {
posts:[Post]
  }
`



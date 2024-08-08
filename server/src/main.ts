import {ApolloServer} from "@apollo/server"
import {startStandaloneServer} from "@apollo/server/standalone"
import { typeDefs } from "./schema"

export const resolvers ={
    Query:{
        async posts(){
            const data = await fetch('http://localhost:3001/posts') 
            return await data.json()
            
        }
    }
    }
const server = new ApolloServer({
    typeDefs,resolvers
})

const {url} = await startStandaloneServer(server,{
    listen:{port:4000}
})

console.log('server listening to PORT 4000')
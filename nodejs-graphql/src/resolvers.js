import { tasks } from "./sample";

export const resolvers = {
    Query: {
        hello: () => "Hello World Graphql",
        greet: (root, { name }) => "Hola " + name,
        tasks: () => tasks
    }
    ,
    Mutation: {
        createTask(_, { input }){
            input._id = tasks.length
            tasks.push(input)
            return tasks
        }
    }
}
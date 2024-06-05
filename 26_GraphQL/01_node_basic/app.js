import express from 'express';
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';
import { createHandler } from 'graphql-http/lib/use/express';


const app = express();

app.use(express.static("public"));
/**
 * Construct a GraphQL schema and define the necessary resolvers.
 *
 * type Query {
 *   hello: String
 * }
 */
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      hello: {
        type: GraphQLString,
        resolve: (source, args, context) => {
            // args is the arguments being passed, like last: 5 (pagination)
            console.log(source, args);
            console.log(context);
            return "world"
        },
      },
    },
  }),
});


app.all('/graphql', createHandler({ schema }));

// what is the difference between ?? and || ???
const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => console.log('Server is running on port', PORT));
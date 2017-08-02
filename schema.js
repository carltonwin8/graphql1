import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';

const PersonType = new GraphQLObjectType({
  name: 'Person',
  description: '...',
  fields: () => ({
    firstName: {
      type: GraphQLString,
      resolve: (person) => person.first_name,
    },
    lastName: {
      type: GraphQLString,
      resolve: (person) => person.last_name,
    },
    email: {type: GraphQLString},
    id: {type: GraphQLString},
    friends: {
      type: new GraphQLList(PersonType),
      resolve: (person, args, {loaders}) =>
        loaders.person.loadMany(person.friends)
    }
  }),
});

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: '...',
  fields: () => ({
    person: {
      type: PersonType,
      args: {
        id: {type: GraphQLString}
      },
      resolve: (root, args, {loaders}) =>
        loaders.person.load(`/person/${args.id}`)
    }
  })
})

export default new GraphQLSchema({
  query: QueryType,
})

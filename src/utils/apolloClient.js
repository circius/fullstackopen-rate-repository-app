import ApolloClient from 'apollo-boost';
import Constants from 'expo-constants';



const ENDPOINT = `${Constants.manifest.extra.apollo_uri}/graphql`;

const createApolloClient = () => {
  return new ApolloClient({
    uri: ENDPOINT
  });
};

export default createApolloClient;
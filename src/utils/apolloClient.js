import ApolloClient from 'apollo-boost';
import config from '../constants.js';

const ENDPOINT = `${config.baseUrl}/graphql`

const createApolloClient = () => {
  return new ApolloClient({
    uri: ENDPOINT
  });
};

export default createApolloClient;
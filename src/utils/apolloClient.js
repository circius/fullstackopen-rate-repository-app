import ApolloClient from 'apollo-boost';
import { baseUrl } from '../../.config';
const ENDPOINT = `${baseUrl}/graphql`

const createApolloClient = () => {
  return new ApolloClient({
    uri: ENDPOINT
  });
};

export default createApolloClient;
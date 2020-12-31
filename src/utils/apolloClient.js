import ApolloClient from 'apollo-boost';
import Constants from 'expo-constants';

const ENDPOINT = `${Constants.manifest.extra.apollo_uri}/graphql`;

const createApolloClient = (authStorage) => {
  return new ApolloClient({
    request: async (operation) => {
      try {
        const accessToken = await authStorage.getAccessToken();
        operation.setContext({
          headers: {
            authorization: accessToken ? `Bearer ${accessToken}` : '',
          }
        });
      } catch (e) {
        console.log(e);
      }
    },
    uri: ENDPOINT
  });
};

export default createApolloClient;
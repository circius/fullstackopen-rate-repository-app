import React from 'react';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider as PaperProvider } from 'react-native-paper';

import { PaperTheme } from './src/theme';
import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';
import createApolloClient from './src/utils/apolloClient';
import Main from './src/components/Main';

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => (
  <NativeRouter>
    <ApolloProvider client={apolloClient}>
      <AuthStorageContext.Provider value={authStorage}>
        <PaperProvider theme={PaperTheme}>
          <Main />
        </PaperProvider>
      </AuthStorageContext.Provider>
    </ApolloProvider>
  </NativeRouter>
);

export default App;
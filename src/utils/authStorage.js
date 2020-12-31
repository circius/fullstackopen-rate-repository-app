import AsyncStorage from '@react-native-community/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const accessToken = await AsyncStorage.getItem(
      `${this.namespace}:accessToken`
    );
    return accessToken ? JSON.parse(accessToken) : [];
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(
      `${this.namespace}:accessToken`,
      JSON.stringify(accessToken)
    );
    return true;
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:accessToken`);
  }
}

export default AuthStorage;
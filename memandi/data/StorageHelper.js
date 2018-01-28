// Wrapper functions for storing information
// locally to the phone

import { AsyncStorage } from 'react-native'

const authTokenName = 'authToken';

class StorageHelper {
    getAuthToken(){
        AsyncStorage.getItem(authTokenName).then((err, token) => {
            if (err){
                return null;
            }
            return token;
        });
    }

    setAuthToken(authTokenValue){
        AsyncStorage.setItem(authTokenName, authTokenValue);
    }
}
export default StorageHelper;

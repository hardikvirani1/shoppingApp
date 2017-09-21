import {Alert} from 'react-native';
export function showAlert(alertText) {
    Alert.alert("",
        alertText,
        [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
    )
}
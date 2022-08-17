import React, {useState, useEffect} from 'react';
import {
  Keyboard,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import isURL from 'validator/lib/isURL';
import Toast, {BaseToast} from 'react-native-toast-message';

const toastConfig = {
  success: props => (
    <BaseToast
      {...props}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        borderLeftColor: '#576F72',
        backgroundColor: '#F0EBE3',
        width: '90%',
      }}
      // eslint-disable-next-line react-native/no-inline-styles
      text1Style={{
        fontSize: 17,
      }}
      // eslint-disable-next-line react-native/no-inline-styles
      text2Style={{
        fontSize: 15,
      }}
    />
  ),
};

export default function Home({navigation}) {
  const [URL, setURL] = useState('');
  // const [URLIsValid, setURLIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // check server info :)
  const checkServerInfo = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('https://igbot.tendean.my.id/indogram/server-info/', requestOptions)
      .then(response => response.json())
      .then(result => {
        // redirect to Update page if current app version is lower than server version
        if (result.data.version > 1) {
          navigation.replace('Update');
        }
      })
      .catch(error => {
        navigation.replace('Maintenance');
        // console.log('error', error);
      });
  };

  useEffect(() => {
    checkServerInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputURL = url => {
    setURL(url);
  };

  const handleSubmitButton = () => {
    setIsLoading(true);
    if (isURL(URL) === true) {
      console.log('url is valid');
      Toast.show({
        // type: 'success',
        text2: 'Success 🎉',
      });
    } else {
      Toast.show({
        // type: 'basic',
        text2: 'Invalid URL ☹️',
      });
    }

    setIsLoading(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#E4DCCF"
          barStyle="dark-content"
          // translucent={true}
        />

        <Text style={styles.h1}>Instagram Autoliker</Text>

        <TextInput
          style={styles.inputURL}
          placeholder="Enter Instagram Post URL Here..."
          onChangeText={text => handleInputURL(text)}
          value={URL}
          // value="https://www.figma.com/file/COJ7URyYFqFmCSxynqjkQL/Instagram-Autoliker-Mobile?node-id=0%3A1"
        />

        <TouchableHighlight
          style={styles.submitButtonContainer}
          underlayColor="#576F72"
          // disabled={true}
          onPress={() => handleSubmitButton()}>
          <View style={styles.button}>
            <Text style={styles.submitButtonText}>
              {isLoading ? 'Loading...' : 'Submit'}
            </Text>
          </View>
        </TouchableHighlight>

        <Toast config={toastConfig} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E4DCCF',
    flex: 1,
  },

  h1: {
    color: '#576F72',
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    // fontFamily: 'Ubuntu',
    marginTop: 125,
  },

  inputURL: {
    backgroundColor: '#F0EBE3',
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#576F72',
    marginHorizontal: 20,
    elevation: 10,
    marginTop: 50,
    paddingHorizontal: 15,
    color: '#737373',
    width: '90%',
    height: 60,
    fontSize: 20,
  },

  submitButtonContainer: {
    backgroundColor: '#7D9D9C',
    width: '90%',
    height: 60,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#576F72',
    marginHorizontal: 20,
    marginTop: 35,
  },
  submitButtonText: {
    textAlign: 'center',
    textVerticalAlignment: 'center',
    fontSize: 24,
    marginTop: 9,
  },
});

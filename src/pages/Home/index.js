import React from 'react';
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

export default function Home() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <StatusBar backgroundColor="#E4DCCF" barStyle="dark-content" />

        <Text style={styles.h1}>Instagram Autoliker</Text>

        <TextInput
          style={styles.inputURL}
          placeholder="Enter Instagram Post URL Here..."
          // value="https://www.figma.com/file/COJ7URyYFqFmCSxynqjkQL/Instagram-Autoliker-Mobile?node-id=0%3A1"
        />

        <TouchableHighlight
          style={styles.submitButtonContainer}
          underlayColor="#576F72"
          onPress={() => console.log('arter')}>
          <View style={styles.button}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </View>
        </TouchableHighlight>
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
    height: 60,
    fontSize: 20,
  },

  submitButtonContainer: {
    backgroundColor: '#7D9D9C',
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

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Update() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Opps..</Text>

      <Text style={styles.h2}>
        Please update this app to the new version 😉
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4DCCF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  h1: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: '-5%',
  },

  h2: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: '5%',
    marginHorizontal: '10%',
  },
});

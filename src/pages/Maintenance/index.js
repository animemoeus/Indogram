import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

export default function Maintenance() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#E4DCCF" barStyle="dark-content" />

      <Text style={styles.h1}>Opps...</Text>

      <Text style={styles.h2}>
        Can't connect to the server 😖{'\n\n'}Check your internet connection or
        try again later
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

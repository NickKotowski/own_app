import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';

class ActivityScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Do not worry, I am working on it!
        </Text>
        <ActivityIndicator

          style={[styles.centering, { height: 80 }]}
          size="large"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0C5898',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },

});

export default ActivityScreen;

import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';


class StartScreen extends Component {


  onButtonPress() {
    Actions.navigationScreen();
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Practice App
        </Text>
        <Text style={styles.textItem}>Tech: React-Native and Redux</Text>
        <Text style={styles.textItem}>by Nick Kotowski</Text>
        <Button
        onPress={this.onButtonPress.bind(this)}
        title="Start"
        color="white"
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
  textItem: {
    fontSize: 15,
    textAlign: 'left',
    color: 'white',
    paddingTop: 3
  },


});

export default StartScreen;

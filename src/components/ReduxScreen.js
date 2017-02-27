import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { createStore } from 'redux';

const reducer = function (state, action) {
  if (action.type === 'WRITE') {
    return action.payload;
  }
  if (action.type === 'MUTE') {
    return 'NOTHING';
  }
  return state;
};

const store = createStore(reducer, 0);

store.subscribe(() => {
  console.log('REDUX SAYS', store.getState());
});

class ReduxScreen extends Component {

  onButtonPressHi() {
    store.dispatch({ type: 'WRITE', payload: 'HELLO' });
  }
  onButtonPressMute() {
    store.dispatch({ type: 'MUTE' });
  }

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Check the console.log :)
          </Text>
          <Button
          onPress={this.onButtonPressHi.bind(this)}
          title="Hello :)"
          color="white"
          />
          <Button
          onPress={this.onButtonPressMute.bind(this)}
          title="Shut up!"
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
});


export default ReduxScreen;

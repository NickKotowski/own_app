import React, { Component } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';


class NavigationScreen extends Component {


  onButtonPressHome() {
    Actions.start({ type: 'reset' });
  }
  onButtonPressRedux() {
    Actions.reduxScreen();
  }
  onButtonPressAnimation() {
    Actions.animationScreen();
  }
  onButtonPressActivity() {
    Actions.activityScreen();
  }
  onButtonPressList() {
    Actions.listScreen();
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
        onPress={this.onButtonPressHome.bind(this)}
        title="Go Back To Start"
        color="white"
        />
        <Button
        onPress={this.onButtonPressRedux.bind(this)}
        title="Show Redux "
        color="white"
        />
        <Button
        onPress={this.onButtonPressAnimation.bind(this)}
        title="Show Animation "
        color="white"
        />
        <Button
        onPress={this.onButtonPressActivity.bind(this)}
        title="ActivityIndicator"
        color="white"
        />
        <Button
        onPress={this.onButtonPressList.bind(this)}
        title="ListScreen"
        color="white"
        />
        <Text style={styles.text}>Check back later for more</Text>
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
    fontSize: 15,
    textAlign: 'center',
    margin: 30,
    color: 'white',
  },

});

export default NavigationScreen;

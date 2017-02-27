import React, { Component } from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';


class AnimationScreen extends Component {

  constructor(props) {
     super(props);
     this.state = {
       fadeAnim: new Animated.Value(0), // init opacity 0
       paddingTopAnimation: new Animated.Value(0),
     };
   }

   componentDidMount() {
     Animated.timing(
       this.state.fadeAnim,
       { toValue: 1,
         delay: 300,
         duration: 2000 }
     ).start();
     Animated.timing(
       this.state.paddingTopAnimation,
       { toValue: 4000,
         delay: 2000,
         duration: 10000 }
     ).start();
   }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
         style={{ opacity: this.state.fadeAnim }}
        >
        <Text style={styles.text}>
          Well, hello there.
        </Text>
       </Animated.View>
       <Animated.View
        style={{ paddingLeft: this.state.paddingTopAnimation }}
       >
        <Text style={styles.text}>I am leaving!</Text>
       </Animated.View>
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
    width: 100
  },
});


export default AnimationScreen;

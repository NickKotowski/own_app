import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import StartScreen from './components/StartScreen';
import NavigationScreen from './components/NavigationScreen';
import ReduxScreen from './components/ReduxScreen';
import AnimationScreen from './components/AnimationScreen';
import ActivityScreen from './components/ActivityScreen';


const NavComponent = () => {
  return (
    <Router>
      <Scene
        key="start"
        title="Start"
        component={StartScreen}
        initial
      />
      <Scene
        key="navigationScreen"
        title="Select what you'd like to do"
        component={NavigationScreen}
      />
      <Scene
        key="reduxScreen"
        title="Welcome to Redux"
        component={ReduxScreen}
      />
      <Scene
        key="animationScreen"
        title="Look at this animation"
        component={AnimationScreen}
      />
      <Scene
        key="activityScreen"
        title="Look at the Activity Icon!"
        component={ActivityScreen}
      />
    </Router>
  );
};

export default NavComponent;

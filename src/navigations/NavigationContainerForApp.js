import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Authentication from '../navigations/Authentication';
import SplashScreen from '../Screens/SplashScreen';
import HomeScreen from '../Screens/HomeScreen';

const StackForScreens = createStackNavigator();
const NavigationContainerForApp = () => {
  return (
    <NavigationContainer>
      <StackForScreens.Navigator initialRouteName="SplashScreen">
        <StackForScreens.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />

        <StackForScreens.Screen
          name="Authentication"
          component={Authentication}
          options={{headerShown: false}}
        />
        <StackForScreens.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </StackForScreens.Navigator>
    </NavigationContainer>
  );
};

export default NavigationContainerForApp;

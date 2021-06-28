/**
 * @author Ramazan Halid
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './src/Screens/SplashScreen';
import RegistrationScreen from './src/Screens/RegistrationScreen';
import LoginScreen from './src/Screens/RegistrationScreen';
import HomeScreen from './src/Screens/HomeScreen';

const StackForScreens = createStackNavigator();

const Authentication = () => {
  return (
    <StackForScreens.Navigator initialRouteName="LoginScreen">
      <StackForScreens.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <StackForScreens.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}
        options={{
          title: 'Registration',
          headerStyle: {
            backgroundColor: '#476ecc',
          },
          headerTintColor: '#c5e6a6',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: '12',
          },
        }}
      />
    </StackForScreens.Navigator>
  );
};

const App = () => {
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
      </StackForScreens.Navigator>
    </NavigationContainer>
  );
};

export default App;

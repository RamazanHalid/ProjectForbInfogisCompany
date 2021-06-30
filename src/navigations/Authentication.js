import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RegistrationScreen from '../Screens/RegistrationScreen';
import LoginScreen from '../Screens/LoginScreen';
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
          headerShown: false,
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

export default Authentication;

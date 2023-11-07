import React from 'react';
import { Example } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import Register from '@/screens/auth/Register';
import OnBoarding from '@/screens/auth/Onboarding';
import Login from '@/screens/auth/Login';
const Stack = createStackNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Example} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default MainNavigator;

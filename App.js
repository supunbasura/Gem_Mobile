import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './LoginPage';
import BatchUpdate from './BatchUpdate';
import TakePhoto from './TakePhoto';
import Preview from './Preview';
import EditData from './EditData';
import IdGenaration from './IdGenaration';
import Certificate from './Certificate';
import BatchQueue from './BatchQueue';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="BatchUpdate" component={BatchUpdate} options={{ headerShown: false }} />
        <Stack.Screen name="TakePhoto" component={TakePhoto} options={{ headerShown: false }} />
        <Stack.Screen name="Preview" component={Preview} options={{ headerShown: false }} />
        <Stack.Screen name="EditData" component={EditData} options={{ headerShown: false }} />
        <Stack.Screen name="IdGenaration" component={IdGenaration} options={{ headerShown: false }} />
        <Stack.Screen name="Certificate" component={Certificate} options={{ headerShown: false }} />
        <Stack.Screen name="BatchQueue" component={BatchQueue} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

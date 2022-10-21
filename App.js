import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Page2 from './Page2';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen name="Home" component={Home} />
      //     <Stack.Screen name="Page2" component={Page2} />
      //   </Stack.Navigator>
      // </NavigationContainer>

      <Home />
    
  );
}

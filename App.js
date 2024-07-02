import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './pages/HomeScreen';
import CartScreen from './pages/CartScreen';


const Tab = createBottomTabNavigator();

export default function App() {
 

  return (
    <NavigationContainer> 
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen} options={{tabBarIcon: ({color, size}) => (
          <Image source={require("./assets/home.png")} />
        ), headerShown: false}}/>
        <Tab.Screen name='Cart' component={CartScreen} options={{tabBarIcon: ({color, size}) => (
          <Image style={styles.image} source={require("./assets/cart.png")} />
        ), headerShown: false}} />
      </Tab.Navigator>
    </NavigationContainer>
    

  );
}

const styles = StyleSheet.create({
    image: {
      width: 25,
      height: 25,
    }
});

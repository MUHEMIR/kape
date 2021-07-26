import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from './assets/colors/color';

import Home from './taskbar/Home';
import Library from './taskbar/Library';
import Class from './taskbar/Class';
import Special from './taskbar/Special';
import User from './taskbar/User';

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
Entypo.loadFont();
MaterialCommunityIcons.loadFont();
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
        tabBarOptions={{
            style: styles.tabBar,
            activeTintColor: colors.lightBlue,
            inactiveTintColor: colors.gray,
            
          }}>
            <Tab.Screen name="Home" component={Home}
             options={{
              tabBarIcon: ({color}) => (
                <Entypo name="home" size={25} color={color} />
              ),
            }} />
               
            <Tab.Screen name="My Class" component={Class} 
            options={{
              tabBarIcon: ({color}) => (
                <Entypo name="graduation-cap" size={25} color={color} />
              ),
            }}/>
            <Tab.Screen name="Library" component={Library} 
              options={{
                tabBarIcon: ({color}) => (
                  <Entypo name="book" size={25} color={color} />
                ),
              }} />
            <Tab.Screen name="Special" component={Special} 
             options={{
              tabBarIcon: ({color}) => (
                <Entypo name="light-bulb" size={25} color={color} />
              ),
            }} />
            <Tab.Screen name="Account" component={User} 
             options={{
              tabBarIcon: ({color}) => (
                <Entypo name="users" size={25} color={color} />
              ),
            }} />


        </Tab.Navigator>

);
    }

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="BGNKSquad" component={TabNavigator} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );

};

const styles = StyleSheet.create({
    tabBar: {
      backgroundColor: colors.white,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
    },
  });

export default App;
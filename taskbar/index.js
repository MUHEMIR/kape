import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {File} from './filling';
const userStack = createStackNavigator();

const Router = () => {
    return(
        <userStack.Navigator>
            <Stack.Screen name="File" component={File} />
        </userStack.Navigator>
    )
}

export default Router;
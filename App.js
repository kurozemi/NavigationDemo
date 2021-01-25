import React from 'react'

import HomeNavigation from './src/homeNavigation'
import SettingNavigation from './src/settingNavigation'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeNavigation}></Tab.Screen>
        <Tab.Screen name="Setting" component={SettingNavigation}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
export default App;
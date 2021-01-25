import React from 'react'

import Home from './components/Home'
import Profile from './components/Profile'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const HomeNavigation = () => {
    return (
    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home}></Drawer.Screen>
        <Drawer.Screen name="Profile" component={Profile}></Drawer.Screen>
    </Drawer.Navigator>
    )
}
export default HomeNavigation;
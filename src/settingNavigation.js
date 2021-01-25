import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Setting from './components/Setting'
import SettingDetail from './components/SettingDetail'

const Stack = createStackNavigator();

const SettingNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name = "Setting" component = {Setting} options = {{headerShown: false}}/>
            <Stack.Screen name = "Setting Detail" component = {SettingDetail}/>
        </Stack.Navigator>
    )
}
export default SettingNavigation
import React, {useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native'


const Setting = ({navigation}) => {
    useEffect(() => {
        const parent = navigation.dangerouslyGetParent();
        parent.setOptions({
          tabBarVisible: false
        });
        return () =>
          parent.setOptions({
            tabBarVisible: true
          });
      }, []);
    return (
        <View style = {style.main}>
            <Text style = {style.contentText}>Setting Detail</Text>
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentText: {
        fontSize: 25,
    },
})
export default Setting
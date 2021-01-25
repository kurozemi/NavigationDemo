import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

const Setting = ({navigation}) => {
    return (
        <View style = {style.main}>
            <Text style = {style.contentText}>Setting</Text>
            <TouchableOpacity
                style = {style.navigation}
                onPress = {() => navigation.navigate("Setting Detail")}
            >
                <Text>Detail</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentText: {
        fontSize: 25,
    },
    navigation: {
        borderWidth: 1,

        marginTop: 15,

        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        padding: 20,


    }
})
export default Setting
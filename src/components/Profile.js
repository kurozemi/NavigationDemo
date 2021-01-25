import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
const Profile = () => {
    return (
        <View style = {style.main}>
            <Text style = {style.contentText}>Hello</Text>
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
export default Profile;
import React, { Component } from 'react'
import { Text, View, Button, TextInput } from 'react-native'
const Child = React.forwardRef((props, ref) => {
    return (
        <View>
            <TextInput ref={ref} placeholder="enter name" />
        </View>
    )
})
export default Child
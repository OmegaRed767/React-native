import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import HOC from './HOC'
const Child = (props) => {
    console.log(props)
    return (
        <View>
            <Text>higher order component-child component-{props.personalDetails.name}</Text>
            <Text>additional info{props.info}</Text>
        </View>
    )
}
export default HOC(Child)
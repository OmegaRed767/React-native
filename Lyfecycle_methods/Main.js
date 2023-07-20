import React, { Component, useState } from 'react'
import { Text, View, Button } from 'react-native'
import Lyfecycle from './Lyfecycle'

const Main = () => {
    const [count, setCount] = useState(0)
    const handlePress = () => {
        setCount(prev => prev + 1)
    }
    return (
        <View>
            <Lyfecycle />
            <Button title="add" onPress={handlePress} />

        </View>
    )
}
export default Main
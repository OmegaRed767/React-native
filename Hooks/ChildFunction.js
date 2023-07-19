import React, { Children, Component, useState } from 'react'
import { Text, View, Button, TextInput } from 'react-native'
const ChildFunction = React.forwardRef((props, ref) => {

    const [count, setCount] = useState(200)
    const handleFunChild = () => {
        setCount(prev => prev + 1)
    }
    console.log("function child")
    return (
        <View>
            <Text>child counter function{count}</Text>
            <Button title="add child" onPress={handleFunChild} />
            <TextInput ref={ref} placeholder='click to focus' />

        </View>
    )
}, [])
export default React.memo(ChildFunction)
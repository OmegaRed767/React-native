import React, { Component, useState } from 'react'
import { Text, View, Button } from 'react-native'
import Child from './Child'

const Parent = () => {
    let ref = React.useRef()
    const handleFocus = () => {
        ref.current.focus()
    }
    return (
        <View>
            <Child ref={ref} />
            <Button title="focus" onPress={handleFocus} />
        </View>
    )
}
export default Parent 
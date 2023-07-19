import React, { Component, useState, useRef } from 'react'
import { Text, View, Button } from 'react-native'
import ChildFunction from './ChildFunction'
import ClassFunction from './ClassFunction'

const Test = () => {
    const myRef = useRef(null)
    const [data, setData] = useState(100)
    const handleAdd = () => {
        setData(prev => prev + 1)
    }
    console.log("parent")
    const handleFocus = () => {
        myRef.current.focus()
    }
    return (
        <View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Home Component</Text>
            <Text style={{ fontSize: 30, alignSelf: "center" }}>Home Counter-{data}</Text>
            <Button title="add" onPress={handleAdd} />
            <ClassFunction></ClassFunction>
            <ChildFunction ref={myRef} />

            <Button title="focus" onPress={handleFocus} />

        </View>
    )
}
export default Test

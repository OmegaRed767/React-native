import React, { Component, useContext, useState } from 'react'
import { Text, View, Button, TextInput, Alert } from 'react-native'
import { User } from './Home'
const Function_Child = () => {
    const [input, setInput] = useState("")

    const data = useContext(User)

    console.log("context", data)

    const handlePress = (txt) => {
        setInput(txt)
    }

    const handleSubmit = () => {
        data.addData({
            type: "add",
            payload: input
        })
        setInput("")
    }

    return (
        <View>
            <Text style={{ fontSize: 20, color: "pink" }}>Consume Context Api-Function Child</Text>
            <TextInput value={input} onChangeText={handlePress} />
            <Button title="add" onPress={handleSubmit} />
            {
                data.info.arr.map((val, i) => (<View key={i}>
                    <Text>{val}</Text>
                </View>))
            }

        </View>
    )
}
export default Function_Child
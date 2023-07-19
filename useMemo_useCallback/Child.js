import React, { Component, useState } from 'react'
import { Text, View, Button } from 'react-native'
const Child = ({ handleChild, dataParent }) => {
    const [data, setData] = useState(0)
    console.log("child")
    return (
        <View>
            <Text>{dataParent}</Text>
            <Button title="addChild from parent" onPress={handleChild} />

        </View>
    )
}
export default React.memo(Child)
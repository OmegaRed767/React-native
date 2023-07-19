import React, { Component, useRef, useState } from 'react'
import { Text, View, Button } from 'react-native'
import Child from './Child'
const Parent = () => {
    const [parentOne, setParent] = useState(0)
    const [two, setTwo] = useState(0)
    const [child, setChild] = useState(99)
    const handleOne = () => {
        setParent(prev => prev + 1)
    }
    const handleTwo = () => {

        setTwo(prev => prev + 1)
    }
    //useMemo memizes a value /so it dosent need to rompute again
    const isEven = React.useMemo(() => {
        return two % 2 == 0

    }, [two])
    // useCallback memoizes a callback function 
    const handleChild = React.useCallback(() => {
        setChild(prev => prev + 1)
    }, [child])

    console.log("parent")
    return (
        <View>
            <Text style={{ fontSize: 20, textAlign: "center" }} >{parentOne}</Text>
            <Text style={{ fontSize: 20, textAlign: "center" }}>{two}-{isEven ? "is Even" : "is Odd"}</Text>
            <Button title="add" onPress={handleOne} />
            <Button title="addTwo" onPress={handleTwo} />
            <Child dataParent={child} handleChild={handleChild} />
        </View>
    )
}
export default Parent
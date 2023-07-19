import React, { useState, useEffect } from 'react'
import { Text, View, Button } from 'react-native'
import HOC from './HOC'
import Child from './Child'
const Parent = ({ personalDetails }) => {
    const [state, setState] = useState(0)
    useEffect(() => {
        console.log("useEffect")
    }, [])

    console.log("function")
    return (
        <View>
            <Text>higher order component-parent component-{personalDetails.name}</Text>
            <Child info={"this is additional data"} />
        </View>
    )
}
export default HOC(Parent)
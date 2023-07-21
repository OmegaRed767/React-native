import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import Child from './Child'
import Boundry from './Boundry'
const Parent = () => {
    return (
        <View>
            <Boundry>
                <Child data={"jack"} />
            </Boundry>
            <Boundry>
                <Child data={"joe"} />
            </Boundry>
            <Boundry>
                <Child data={"john"} />
            </Boundry>
            <Boundry>
                <Child data={"wire"} />
            </Boundry>

        </View>
    )
}
export default Parent
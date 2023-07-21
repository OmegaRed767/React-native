import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
class Boundry extends React.Component {
    constructor() {
        super()
        this.state = {
            err: false
        }
    }
    static getDerivedStateFromError(error) {

        return {
            err: true
        }

    }
    componentDidCatch(err, info) {
        console.log(err, info)
    }
    render() {
        if (this.state.err) {
            return (
                <Text>Error has occured</Text>
            )
        }
        return (
            <View>
                {this.props.children}
            </View>
        )
    }
}
export default Boundry
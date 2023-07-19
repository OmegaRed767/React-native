import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
class ClassFunction extends React.PureComponent {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }


    handlePress = () => {
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        console.log("class child")
        return (
            <View>
                <Text>child counter class-{this.state.count}</Text>
                <Button title="add child class" onPress={this.handlePress} />
            </View>
        )
    }
}
export default ClassFunction
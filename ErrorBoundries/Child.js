import React from "react";
import { Text, View, Button } from 'react-native'
class Child extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }




    render() {
        console.log("in2")
        // if (this.props.data == "John") {
        // alert("its john")
        // 
        if (this.props.data == "john") {

            throw new Error("its john")
        }
        return (
            <View>
                <Text>{this.props.data == "john" ? "true" : "false"}</Text>
            </View>
        )
    }
}
export default Child
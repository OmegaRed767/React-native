import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { User } from './Home'
class Class_Child extends React.Component {
    render() {
        return (
            <View>
                <User.Consumer>
                    {
                        (data) => {
                            console.log("cc", data)
                            return (
                                <View>
                                    <Text>{data.info.arr.toString()}</Text>
                                </View>
                            )
                        }
                    }
                </User.Consumer>
            </View >
        )
    }
}
export default Class_Child
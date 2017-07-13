import React from "react";
import {StyleSheet, Text, TouchableHighlight, View} from "react-native";

const Button = ({submitTodo}) => (
    <View style={button_style.container}>
        <TouchableHighlight
            onPress={submitTodo}>
            <Text>Submit</Text>
        </TouchableHighlight>
    </View>
)

const button_style = StyleSheet.create({
    container: {
        alignItems: 'flex-end'
    }
})

export default Button;
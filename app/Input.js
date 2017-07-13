import React from "react";
import {StyleSheet, TextInput, View} from "react-native";

const Input = ({inputValue, inputChange}) => (
    <View style={input_style.container}>
        <TextInput style={input_style.input}
                   placeholder="What you want to do Today ?"
                   placeholderTextColor="#000000"
                   value={inputValue} onChangeText={inputChange}></TextInput>
    </View>
)

const input_style = StyleSheet.create({
    container: {
        padding: 10
    },
    input: {
        flex: 1,
        height: 60,
        padding: 10,
        backgroundColor: '#ffffff'
    }
})

export default Input;
import React from "react";
import {StyleSheet, Text, View} from "react-native";

const Header = () => (
    <View style={header_style.header}>
        <Text style={header_style.header_text}>TODO APP</Text>
    </View>
)

const header_style = StyleSheet.create({
    header: {
        paddingTop: 60
    },
    header_text: {
        textAlign:'center',
        fontWeight:'100',
        fontSize: 20
    }
})

export default Header;
import React from 'react';
import {View,Text} from 'react-native';

const Todo = ({todo})=>(
    <View>
        <Text>{todo.title}</Text>
    </View>
)
export default Todo;
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";


const InputFeild = ({ placeholder, value, onTextChange }) => {
    return (
        <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onTextChange}
            style={styles.inputFiledStyle}
        />
    )
}

const styles = StyleSheet.create({
    inputFiledStyle:{
        width: '90%',
        height: '8%',
        elevation:2,
        fontWeight:'700',
        alignSelf:'center',
        borderRadius:10,
        marginTop:20,
        paddingHorizontal:10,
        backgroundColor: '#fff'
    }
})

export default InputFeild;
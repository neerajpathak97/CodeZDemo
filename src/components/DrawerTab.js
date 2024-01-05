import { useEffect, useState } from "react";
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const DrawerTab = ({tabName, iconName, tabPress}) => {
    return (
        <TouchableOpacity style={styles.tab} onPress={tabPress}>
            <Feather name={iconName} size={25} color='#000' /> 
            <Text style={{ marginLeft: 10, color: '#000', fontSize: 18 }}>{tabName}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tab:{
        flexDirection: 'row', 
        alignItems: 'center',
        height: 60,
        paddingLeft:10
    }
})

export default DrawerTab;
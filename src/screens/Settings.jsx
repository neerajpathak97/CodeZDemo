import { useState, useEffect } from "react";
import { View, Text, SafeAreaView , StyleSheet} from "react-native";


const Settings = ({navigation}) => {
    return (
        <View style={styles.mainContianer}>
            <Text style={{color: '#000'}}>Setting Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContianer:{
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    }
})

export default Settings;
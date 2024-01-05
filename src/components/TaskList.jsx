import { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, Switch } from "react-native";


const TaskList = ({ item }) => {
    const [isTaskCompleted, setIsTaskCompleted]= useState(false);

    const toggleSwitch=()=>{
        setIsTaskCompleted(!isTaskCompleted)
    }
    return (
        <View style={styles.mainContianer}>
            <View style={styles.imageView}>
                <View style={styles.avatar}>
                    <Text>{" "}</Text>
                </View>
            </View>
            <View style={styles.textContianer}>
                <View style={styles.titleToggleView}>
                    <Text style={styles.title}>{item?.title}</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#f4f3f4' }}
                        thumbColor={isTaskCompleted ? '#000' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isTaskCompleted}
                    />
                </View>
                <Text style={styles.description}>{item?.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContianer: {
        elevation: 2,
        width: '96%',
        marginVertical: 5,
        height: 100,
        borderRadius: 15,
        alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor: '#ffff'
    },
    avatar: {
        borderRadius: 100,
        width: 60,
        height: 60,
        backgroundColor: '#000',
    },
    imageView: {
        width: '25%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContianer:{
        width: '75%',
        height: '100%',
    },
    titleToggleView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 15,
        paddingTop:15
    },
    title:{
        color: '#000',
        fontSize:18,
        fontWeight: 'bold'
    },
    description:{
        color: '#000',
        fontSize:14,
        marginTop:10,
        fontWeight: '500'
    }
})

export default TaskList;
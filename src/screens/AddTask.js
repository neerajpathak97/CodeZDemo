import { useState, useEffect } from "react";
import InputFeild from "../components/InputFeild";
import { View, Text, SafeAreaView, StyleSheet, Switch, TouchableOpacity, Alert } from "react-native";
import { taskList } from "../Data/TaskData";


const AddTask = ({ navigation }) => {
    const [title, setTitle] = useState(null);
    const [description, setDesription] = useState(null);
    const [isCompleted, setIsCompleted] = useState(false);
    const addTask =()=>{
        let data = {
            title: title,
            description: description,
            is_completed : isCompleted
        }
        console.log("Data",data)
        taskList.push(data)
        Alert.alert("Task Completed", "Task added successfully !")
    }
    return (
        <View style={styles.mainContianer}>
            <InputFeild placeholder={"Title"} onTextChange={(val)=> setTitle(val)} />
            <InputFeild placeholder={"Description"} onTextChange={(val)=> setDesription(val)} />
            <View style={styles.toggleView}>
                <Text style={styles.toggleText}>Task Completed :</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#f4f3f4' }}
                    thumbColor={isCompleted ? '#000' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={setIsCompleted}
                    value={isCompleted}
                />
            </View>
            <TouchableOpacity  onPress={()=> addTask()}
            style={styles.addTaskButton}>
                <Text style={styles.taskText}>Add Task</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContianer: {
        height: '100%'
    },
    toggleView:{
        marginTop:20,
        marginRight:10,
        flexDirection:'row',
        paddingHorizontal:20,
        alignItems:'center',
    },
    addTaskButton:{
        width: '90%',
        height: '8%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        alignSelf: 'center',
        borderRadius: 15, 
        backgroundColor: '#000'
    },
    toggleText:{
        color: '#000',
        fontSize: 18,
        fontWeight: '800'
    },
    taskText:{
        color: '#fff',
        fontSize: 18,
        fontWeight: '800'
    }, 
})

export default AddTask;
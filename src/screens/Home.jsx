import { useState, useEffect } from "react";
import TaskList from "../components/TaskList";
import { taskList } from "../Data/TaskData";
import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";


const Home = ({ navigation }) => {
    return (
        <View styles={styles.mainContianer}>
            <View style={styles.listContianer}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={taskList}
                    renderItem={({ item, index, separators }) => (<TaskList item={item} />)}
                    keyExtractor={(item, index) => item.id}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContianer: {
        backgroundColor: 'red'
    },
    listContianer: {
        width: '100%'
    }
})

export default Home;
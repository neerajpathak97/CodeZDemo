import axios from "axios";
import { useState, useEffect } from "react";
import TaskList from "../components/TaskList";
import { View, StyleSheet, FlatList } from "react-native";


const Home = ({ navigation }) => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetchData();
    },[data])
    const fetchData = async() => {
       await axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
            setData(response?.data)
        }).catch((err) => console.log(err, "Error"))
    }
    return (
        <View styles={styles.mainContianer}>
            <View style={styles.listContianer}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({ item, index, separators }) => (<TaskList item={item} />)}
                    keyExtractor={(item, index) => item?.id}
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
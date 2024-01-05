import { useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";


const Profile = ({ navigation }) => {
    return (
        <View style={styles.mainContianer}>
            <View style={styles.avatarView}>
                <View style={styles.avatar}>
                    <Text>
                        {" "}
                    </Text>
                </View>
                <View style={styles.cameraView}>
                    <Icon name="camera" size={18} color="#000" />
                </View>
            </View>
            <View style={styles.lowerView}>
                <Text style={styles.title}>{"John Smith"}</Text>
                <Text style={styles.designation}>{"GCP Cloud Architect"}</Text>
                <Text style={styles.address}>{"A Sector, Downtown Street, Chicago, Illinois, USA"}</Text>
                <Text style={styles.desc}>{"Experience and determined architect with a proven record of delivering project.Having experince in cloud based solution which include GCP as a primary technology but also have experience in AWS and AZURE"}</Text>
                <TouchableOpacity style={styles.profileButton}>
                    <Text style={styles.profileText}>Add Profile Image</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContianer: {
        height: '100%'
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 500,
        backgroundColor: '#000'
    },
    avatarView: {
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    lowerView: {
        height: '70%',
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
        fontWeight: '900'
    },
    address: {
        fontSize: 16,
        marginTop: 10,
        fontWeight: '900'
    },
    designation: {
        fontSize: 23,
        fontWeight: '900',
        letterSpacing: 1,
        marginTop: 10
    },
    desc: {
        fontSize: 18,
        marginTop: 50,
        letterSpacing: 1
    },
    profileButton: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10%',
        backgroundColor: '#000',
        marginTop: 50,
        borderRadius: 15
    },
    profileText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#ffff',
    },
    cameraView: {
        backgroundColor: '#ffff',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 140,
        bottom: 80,
        padding: 8,
        borderRadius: 200
    }
})

export default Profile;
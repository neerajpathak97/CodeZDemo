import React, { useContext, useEffect, useState } from 'react'
import { Text, StyleSheet, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function DrawerContent({ navigation }) {
  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffff' }}>

      <ScrollView style={{ marginLeft: 20, marginTop: 30 }}>
        <TouchableOpacity  style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Feather name='user-plus' size={25} color='#000' />
          <Text style={{ marginLeft: 10, color: '#000', fontSize: 18 }}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={()=> navigation.navigate("Profile")}  style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
          <MaterialIcons name='favorite-border' size={25} color='#bbb' />
          <Text style={{ marginLeft: 10, color: '#000', fontSize: 18 }}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={()=> navigation.navigate("Settings")}  style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
          <Feather name='settings' size={25} color='#bbb' />
          <Text style={{ marginLeft: 10, color: '#000', fontSize: 18 }}>Settings</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({})

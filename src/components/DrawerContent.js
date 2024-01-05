import DrawerTab from './DrawerTab';
import React, { useContext, useEffect, useState } from 'react'
import { Text, StyleSheet, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';


const DrawerContent = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffff' }}>
      <View style={styles.topDrawerView}>
        <Text style={styles.headingText}>{"CodeZDemo"}</Text>
      </View>
      <DrawerTab tabName={"Home"} iconName={"home"} tabPress={()=> navigation.navigate("Home")} />
      <DrawerTab tabName={"Profile"} iconName={"user"} tabPress={()=> navigation.navigate("Profile")} />
      <DrawerTab tabName={"Settings"} iconName={"settings"} tabPress={()=> navigation.navigate("Settings")} />
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  topDrawerView: {
    height: '15%',
    elevation:2,
    alignItems: 'center',
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  headingText:{
    fontSize:30,
    fontWeight:'800',
    color: '#fff'
  }
})

export default DrawerContent;

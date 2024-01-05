import 'react-native-gesture-handler'
import React from 'react';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import AddTask from './src/screens/AddTask';
import Settings from './src/screens/Settings';
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerContent from './src/components/DrawerContent';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

const App = () => {

  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();

  function BottomTab() {
    return (
      <Tab.Navigator headerShown={false}
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#fffdd0',
          keyboardHidesTabBar: true,
          showLabel: false
        }}
        initialRouteName="Home">
        <Tab.Screen name="Home" component={MyDrawer}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => <Icon name="home" size={20} color="#000" />
          }} />
          <Tab.Screen name="AddTask" component={AddTask}
          options={{
            tabBarIcon: ({ color, size }) => <Icon name="file" size={18} color="#000" />
          }} />
        <Tab.Screen name="Profile" component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => <Icon name="user" size={20} color="#000" />
          }} />
      </Tab.Navigator>
    )
  }

  function MyDrawer({navigation}) {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={() => <DrawerContent navigation={navigation} />}>
        <Drawer.Screen name="Home" component={Home}   />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    );
  }


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={BottomTab} options={{headerShown: false}} />
        <Stack.Screen name="Profile" component={Profile}  options={{headerShown: false}} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;

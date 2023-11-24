import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Octicons } from '@expo/vector-icons';
import SearchScreen from './pages/SearchScreen';
import ProfileScreen from './pages/ProfileScreen';
import DetailScreen from './pages/DetailScreen';
import ScheduleScreen from './pages/ScheduleScreen';
import Header from './components/Header';
import HomeScreen from './pages/HomeScreen';
import { useFonts } from 'expo-font';

const bottomTabNavigator = createBottomTabNavigator();
const stackNavigator = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Google-Sans': require('./assets/fonts/ProductSans-Regular.ttf'),
    'Google-Sans-Black': require('./assets/fonts/ProductSans-Black.ttf'),
  });

  if (!fontsLoaded) {
    // Handle font loading state
    return null;
  }

  return (
    <NavigationContainer>
      <stackNavigator.Navigator>
        <stackNavigator.Screen
          name="Main" // Give it a name to create a container
          component={MainNavigator}
          options={{ headerShown: false }} // Use a separate component for nested navigators
        />
        <stackNavigator.Screen
          name="Detail"
          component={DetailScreen}
          options={{ headerShown: false }}
        />
      </stackNavigator.Navigator>
    </NavigationContainer>
  );
}

function MainNavigator() {
  return (
    <bottomTabNavigator.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'white',
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#000220',
          borderWidth: 1,
          borderColor: 'gray',
          marginHorizontal: 20,
          borderRadius: 32,
          height: 64,
          marginBottom: 14,
          elevation: 12,
          shadowColor: 'gray',
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
            color = focused ? 'lightblue' : 'gray';
          } else if (route.name === 'Search') {
            iconName = 'search';
            color = focused ? 'lightblue' : 'gray';
          } else if (route.name === 'Schedule') {
            iconName = 'clock';
            color = focused ? 'lightblue' : 'gray';
          } else if (route.name === 'Profile') {
            iconName = 'person';
            color = focused ? 'lightblue' : 'gray';
          }

          return <Octicons name={iconName} size={24} color={color} />;
        },
        headerShown: false,
      })}
    >
      <bottomTabNavigator.Screen
        name="Home"
        component={HomeScreen}
      />
      <bottomTabNavigator.Screen
        name="Search"
        component={SearchScreen}
      />
      <bottomTabNavigator.Screen
        name="Schedule"
        component={ScheduleScreen}
      />
      <bottomTabNavigator.Screen 
        name="Profile" 
        component={ProfileScreen} 
      />
    </bottomTabNavigator.Navigator>
  );
}


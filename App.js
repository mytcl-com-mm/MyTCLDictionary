import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import WordDetailScreen from './screens/WordDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import HistoryScreen from './screens/HistoryScreen';
import AddWordScreen from './screens/AddWordScreen';
import SettingsScreen from './screens/SettingsScreen';
import WordOfTheDayScreen from './screens/WordOfTheDayScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import MoreScreen from './screens/MoreScreen'; 
import AboutScreen from './screens/AboutScreen';

// Create Stack and Tab Navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator for Home screen
const HomeTabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        switch (route.name) {
          case 'Home':
            iconName = focused ? 'home' : 'home-outline';
            break;
          case 'Favorites':
            iconName = focused ? 'heart' : 'heart-outline';
            break;
          case 'Search':
            iconName = focused ? 'search' : 'search-outline';
            break;
          case 'More':
            iconName = focused ? 'ellipsis-horizontal' : 'ellipsis-horizontal-outline';
            break;
          default:
            iconName = 'home-outline'; // Default icon for unknown routes
            break;
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }}  />
    <Tab.Screen name="Favorites" component={FavoritesScreen}  options={{ headerShown: false }} />
    <Tab.Screen name="Search" component={SearchScreen}  options={{ headerShown: false }} />
    <Tab.Screen name="More" component={MoreScreen}  options={{ headerShown: false }} />
  </Tab.Navigator>
);

// Main Stack Navigator for other screens
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="WordDetail" component={WordDetailScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="AddWord" component={AddWordScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="WordOfTheDay" component={WordOfTheDayScreen} />
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="More" component={MoreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

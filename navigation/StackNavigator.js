import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from '../Screen/DrawerScreens/HomeScreen';
import WeatherScreen from '../Screen/WeatherScreen';
import MarketScreen from '../Screen/MarketScreen';
import PricePredictionScreen from '../Screen/PricePredictionScreen'
import NavigationDrawerHeader from '../Screen/Components/NavigationDrawerHeader';
import WheatScreen from '../Screen/MainCrops/WheatScreen';
import RiceScreen from '../Screen/MainCrops/RiceScreen';
import PaddyScreen from '../Screen/MainCrops/PaddyScreen';
import SettingsScreen from '../Screen/DrawerScreens/SettingsScreen';
import CropCalendarScreen from "../Screen/CropCalendarScreen";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#2DD0F3",
  },
  headerTintColor: '#fff', //Set Header text color
  headerTitleStyle: {
  marginLeft: 110,
  fontWeight: 'bold', //Set Header text style
  fontSize: 25},
};

const homeScreenStack = ({navigation}) => {
    return (
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={screenOptionStyle}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'FARMOS', //Set Header Title
            headerLeft: () => (
              <NavigationDrawerHeader navigationProps={navigation} />
            
            ),
          }}
          
        />
  
      </Stack.Navigator>
    );
  };
  const weatherScreenStack = ({navigation}) => {
    return (
      <Stack.Navigator initialRouteName="WeatherScreen" screenOptions={screenOptionStyle}>
        <Stack.Screen
          name="WeatherScreen"
          component={WeatherScreen}
          options={{
            title: 'Weather', //Set Header Title
            headerLeft: () => (
              <NavigationDrawerHeader navigationProps={navigation} />
            
            ),
          }}
          
        />
  
      </Stack.Navigator>
    );
  };
  
  const settingScreenStack = ({navigation}) => {
    return (
      <Stack.Navigator
        initialRouteName="SettingsScreen"
        screenOptions={{
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#2DD0F3",//Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}>
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            title: 'Settings', //Set Header Title
          }}
        />
      </Stack.Navigator>
    );
  };
  
  const MarketScreenStack = ({navigation}) => {
    return (
      <Stack.Navigator
        initialRouteName="MarketScreen"
        screenOptions={{
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#2DD0F3",//Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}>
        <Stack.Screen
          name="MarketScreen"
          component={MarketScreen}
          options={{
            title: 'Daily Price', //Set Header Title
          }}
        />
      </Stack.Navigator>
    );
  };
  
  const PricePredictionScreenStack = ({navigation}) => {
    return (
      <Stack.Navigator
        initialRouteName="PricePredictionScreen"
        screenOptions={{
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#2DD0F3",//Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}>
        <Stack.Screen
          name="Crop Price Prediction"
          component={PricePredictionScreen}
          options={{
            title: 'Crop Price Prediction', //Set Header Title
          }}
        />
        <Stack.Screen
          name="Wheat"
          component={WheatScreen}
          options={{
            title: 'Crop Price Prediction', //Set Header Title
          }}
        />
        <Stack.Screen
          name="Rice"
          component={RiceScreen}
          options={{
            title: 'Crop Price Prediction', //Set Header Title
          }}
        />
        <Stack.Screen
          name="Paddy"
          component={PaddyScreen}
          options={{
            title: 'Crop Price Prediction', //Set Header Title
          }}
        />
      </Stack.Navigator>
    );
  };

  const CropCalendarScreenStack = ({navigation}) => {
    return (
      <Stack.Navigator
        initialRouteName="CropCalendarScreen"
        screenOptions={{
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#2DD0F3",//Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}>
        <Stack.Screen
          name="CropCalendarScreen"
          component={CropCalendarScreen}
          options={{
            title: 'Crop Calendar', //Set Header Title
          }}
        />
      </Stack.Navigator>
    );
  };
  
export { homeScreenStack, weatherScreenStack, MarketScreenStack, PricePredictionScreenStack,settingScreenStack ,CropCalendarScreenStack};
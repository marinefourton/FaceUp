console.disableYellowBox = true;
import React from 'react';

import HomeScreen from './screens/HomeScreen';
import SnapScreen from './screens/SnapScreen';
import GalleryScreen from './screens/GalleryScreen';

import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import { Ionicons } from '@expo/vector-icons';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import pictureList from './reducers/picture';

const store = createStore(combineReducers({pictureList}));

var BottomNavigator = createBottomTabNavigator({
  Gallery: GalleryScreen,
  Snap: SnapScreen
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        var iconName;
        if (navigation.state.routeName == 'Snap') {
          iconName = 'ios-camera';
        } else if (navigation.state.routeName == 'Gallery') {
          iconName = 'md-photos';
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#009788',
      inactiveTintColor: '#FFFFFF',
      style: {
        backgroundColor: '#111224',
      }
    }  
   
  
  });
  
StackNavigator = createStackNavigator({ 
  Home:  HomeScreen,  
  BottomNavigator: BottomNavigator
}, 
{headerMode: 'none'}
);   

const Navigation = createAppContainer(StackNavigator);

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
 }

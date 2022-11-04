import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/SimpleLineIcons';
import PendingOrder from './PendingOrder';

import Inventory from './Inventory';
import AdminProfile from './AdminProfile';
import OrderList from './OrderList';
import UnderConstrunction from './UnderConstuction';

//import Inventory from './Inventory'

const TabForAdmin = createMaterialBottomTabNavigator(
  {
    UnderConstrunctionPage: {
      screen: UnderConstrunction,
      navigationOptions: {
        tabBarLabel: 'Book Doctor appointment',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icons style={[{color: tintColor}]} size={25} name={'notebook'} />
          </View>
        ),

        activeColor: 'white',
        inactiveColor: 'grey',
        barStyle: {backgroundColor: '#2B2D2F'},
      },
    },

    Inventory: {
      screen: Inventory,
      navigationOptions: {
        tabBarLabel: 'Search',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icons style={[{color: tintColor}]} size={25} name={'magnifier'} />
          </View>
        ),

        activeColor: 'white',
        inactiveColor: 'grey',
        barStyle: {backgroundColor: '#2B2D2F'},
      },
    },

    OrderList: {
      screen: OrderList,
      navigationOptions: {
        tabBarLabel: 'Orders',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icons style={[{color: tintColor}]} size={25} name="list" />
          </View>
        ),
        activeColor: 'white',
        inactiveColor: 'grey',
        barStyle: {backgroundColor: '#2B2D2F'},
      },
    },

    AdminProfile: {
      screen: UnderConstrunction,
      navigationOptions: {
        tabBarLabel: 'Book Lab appointment',
        tabBarIcon: ({tintColor}) => (
          <View style={{flex: 1}}>
            <Icons style={[{color: tintColor}]} size={25} name={'notebook'} />
          </View>
        ),

        activeColor: 'white',
        inactiveColor: 'grey',
        barStyle: {backgroundColor: '#2B2D2F'},
      },
    },
    AdminProfile: {
      screen: AdminProfile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icons style={[{color: tintColor}]} size={25} name={'user'} />
          </View>
        ),
        activeColor: 'white',
        inactiveColor: 'grey',
        barStyle: {backgroundColor: '#2B2D2F'},
      },
    },
  },

  {
    initialRouteName: 'OrderList',
    activeColor: '#f0edf6',
    inactiveColor: '#226557',
    barStyle: {backgroundColor: '#3BAD87', height: 300, flex: 1, width: 100},
    shifting: true,
  },
);

export default createAppContainer(TabForAdmin);

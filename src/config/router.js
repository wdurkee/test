import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import DispensaryScreen from '../screens/DispensaryScreen';
import SplashScreen from '../screens/SplashScreen';
import SearchScreen from '../screens/SearchScreen';
import MapScreen from '../screens/MapScreen';
import CartScreen from '../screens/CartScreen';
import OrderScreen from '../screens/OrderScreen';
import UserScreen from '../screens/UserScreen';
import QuantityScreen from '../screens/QuantityScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import RecentOrderScreen from '../screens/RecentOrderScreen';
import PaymentScreen from '../screens/PaymentScreen';
import ContactScreen from '../screens/ContactScreen';
import { SearchButton, UserButton } from '../components/common';

const RootStack = StackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Home: {
      screen: HomeScreen,
    },
    Dispensary: {
      screen: DispensaryScreen,
    },
    Splash: {
      screen: SplashScreen,
    },
    Search: {
      screen: SearchScreen,
    },
    Map: {
      screen: MapScreen,
    },
    Order: {
      screen: OrderScreen,
    },
    Cart: {
      screen: CartScreen,
    },
    User: {
      screen: UserScreen,
    },
    Quantity: {
      screen: QuantityScreen,
    },
    Notifications: {
      screen: NotificationsScreen,
    },
    RecentOrders: {
      screen: RecentOrderScreen,
    },
    Payment: {
      screen: PaymentScreen,
    },
    Contact: {
      screen: ContactScreen,
    }
  },
  {

    headerMode: 'screen',
    initialRouteName: 'Splash',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#c2ceb5',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    },
  }
);

export default RootStack;

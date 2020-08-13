
import React, { Component } from 'react';

import { createAppContainer, createSwitchNavigator } from "react-navigation"
import { createStackNavigator } from 'react-navigation-stack'
import BottomNavigator from './src/pages/root/rootPage'

import login from './src/pages/login/Login'
import admin from './src/pages/admin/Admin'


const InitNavigator = createStackNavigator({
  Login: {
    screen: login,
    navigationOptions: {
      headerShown: false
    }
  },
}, {
  mode: 'modal',
}
)

const MainNavigator = createStackNavigator({
  Login: {
    screen: login,
    navigationOptions: {
      headerShown: false
    }
  },
  BottomNavigator: {
    screen: BottomNavigator,
    navigationOptions: {
      headerShown: false
    }
  },
  admin: { screen: admin },
}, {
  mode: "modal"
}
)


const AppStack = createSwitchNavigator({
  Init: InitNavigator,
  Main: MainNavigator
})
export default createAppContainer(MainNavigator)

// export const RootNavigator = createAppContainer()

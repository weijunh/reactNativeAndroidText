import React from 'react'

import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icons from "react-native-vector-icons/Feather"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomePage from '../home/homePage'
import CatePage from '../cate/catePage'
import MePage from '../me/mePage'

const BottomNavigator = createBottomTabNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      title: '首页',
      tabBarLabel: '首页',
      //显示的图标
      tabBarIcon: ({ tintColor, focused }) => (
        /*第三方图标库（图标名称，图标大小，图标样式*/
        <Icons name={'home'} size={26} style={{ color: tintColor }} />
      ),
    }
  },
  CatePage: {
    screen: CatePage,
    navigationOptions: {
      title: '分类',
      // tabBarLabel: '分类',
      //显示的图标
      tabBarIcon: ({ tintColor, focused }) => (
        /*第三方图标库（图标名称，图标大小，图标样式*/
        <Icons name={'calendar'} size={26} style={{ color: tintColor }} />
      ),
    }
  },
  MePage: {
    screen: MePage,
    navigationOptions: {
      title: 'me',
      // tabBarLabel: 'me',
      //显示的图标
      tabBarIcon: ({ tintColor, focused }) => (
        /*第三方图标库（图标名称，图标大小，图标样式*/
        <Icons name={'meh'} size={26} style={{ color: tintColor }} />
      ),
    }
  },
},
  {
    // 初始化的路由页面是什么
    initialRouteName: "Home",//初始化页面显示HomePage
    tabBarOptions: {
      activeTintColor: Platform.OS === 'android' ? '#FFD700' : '#fff',
    }
  }
)

export default BottomNavigator
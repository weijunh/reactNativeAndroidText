import React, { Component } from "react"
import { View, Text, TouchableOpacity, StatusBar, Alert } from "react-native"

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MainColor: '#FFD700',
    };
  }
  render () {
    return (
      <View>
        {/*状态栏*/}
        <StatusBar
          animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
          hidden={false}  //是否隐藏状态栏。
          backgroundColor="#FFD700" //状态栏的背景色
          translucent={false}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
          barStyle='dark-content'
        />
        <TouchableOpacity
          onPress={
            () => {
              this.props.navigation.navigate('Login')
            }
          }
        ><Text>aaaa</Text></TouchableOpacity>
      </View >
    )
  }
}
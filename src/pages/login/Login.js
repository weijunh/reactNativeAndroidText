import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Button, Alert } from 'react-native'
import Icons from "react-native-vector-icons/Feather"
import {
  Provider,
  Toast,
  WhiteSpace,
  WingBlank,
  InputItem,
} from '@ant-design/react-native';


import WeiXin from '../../assets/images/weixin.svg'
import Qq from '../../assets/images/QQ.svg'

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
    };
  }

  //获取电话号码
  inputPhone = (text) => {
    this.setState({
      phone: text
    })
  }

  //发送验证码
  login = () => {
    if (this.state.phone.length == 11) {
      Alert.alert(this.state.phone)
      // console.log(this.props)
      this.props.navigation.navigate("BottomNavigator")
    } else {
      Alert.alert('请输入11位手机号码')
    }
  }

  render () {
    return (
      <SafeAreaView>
        <View style={style.container}>
          <View style={style.header}>
            <Icons name={'x'} size={26} style={{ color: '#000' }} />
            <TouchableOpacity
              onPress={
                () => { Toast.success('我是帮助', 1) }
              }
            ><Text style={{ fontSize: 16 }}>帮助</Text>
            </TouchableOpacity>
          </View>

          <View style={style.center}>
            <Text style={{ fontSize: 30, marginBottom: 20 }}>欢迎登录 </Text>
            <View style={style.phone}>
              <Text style={style.area}>+ 86 </Text>
              <TextInput
                style={style.input}
                autoCapitalize="none"
                placeholder="请输入手机号码"
                placeholderTextColor="#ccc"
                underlineColorAndroid="transparent"
                keyboardType="numeric"
                returnKeyType="done"
                maxLength={11}
                onChangeText={this.inputPhone}
              ></TextInput>
            </View>

            <TouchableOpacity
              style={style.loginButton}
              onPress={this.login}
            >
              <Text>获取短信验证码</Text>
            </TouchableOpacity>

            <View style={[style.header, { marginTop: 10 }]}>
              <Text>密码登录</Text>
              <Text>遇到问题</Text>
            </View>

          </View>

          <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", marginTop: 100 }}>
            <WeiXin width={120} height={40}
              onPress={
                () => { this.props.navigation.navigate('BottomNavigator') }
              } />
            <Qq width={120} height={40} />
          </View>



        </View >
      </SafeAreaView>
    )
  }

}
const style = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    fontSize: 16,
    width: 150,
    letterSpacing: 2
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  center: {
    margin: 20
  },
  phone: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#778899",
  },
  area: {
    fontSize: 16,
  },
  number: {
    fontSize: 20,
    borderColor: "red"
  },
  loginButton: {
    fontSize: 25,
    marginTop: 20,
    height: 40,
    lineHeight: 40,
    backgroundColor: "#FFD700",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  }

})

export default Login
// export default () => (
//   <Provider>
//     <Login />
//   </Provider>
// );
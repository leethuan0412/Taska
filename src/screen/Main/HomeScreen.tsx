import ApiLogin from '@src/api/ApiLogin';
import {R} from '@src/assets/R';
import {AppButton, AppHeader, Block} from '@src/component';
import AppInput from '@src/component/AppInput';
import { api } from '@src/service/Network/ApiService';
import {colors} from '@src/theme';
import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
const HomeScreen = () => {
  const [email, setEmail] = useState('leducthuan0412@gmail.com');
  const [password, setPassword] = useState('12345678');
// https://nodejsdemo.onrender.com/api/auth/login
  const handleLogin = async()=>{
    try {      
      
      const payload={
        email: email,
        password: password
      }
      console.log(payload,'payload');
    const res = await ApiLogin.login(payload)
    console.log(res,'res');
    
    } catch (error) {
      console.log(error,'r');
      
    }
  }


  return (
    <Block>
      <AppHeader title="HOIME" goBack />
      <Text style={styles.text}>{R.strings().hello}</Text>
      <AppInput
        value={email}
        onChangeText={setEmail}
        placeholder="enter your email"
      />
       <AppInput
        value={password}
        onChangeText={setPassword}
        placeholder="enter your password"
        secureTextEntry
      />
      <AppButton label='Login' onPress={handleLogin}/>
    </Block>
  );
};
const styles = StyleSheet.create({
  text: {
    color: colors.text,
  },
});
export {HomeScreen};

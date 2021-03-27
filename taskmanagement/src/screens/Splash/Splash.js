import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RColor} from '@reusable';
import AsyncStorage from '@react-native-community/async-storage';

const Splash = ({navigation}) => {
  useEffect(async () => {
    const rawDataUser = await AsyncStorage.getItem('data');
    const dataUser = JSON.parse(rawDataUser);
    console.log({dataUser});
    setTimeout(()=>{
      dataUser.login?navigation.navigate('Tabs'):navigation.navigate('Login')
    },3000)
  },[]);
  return (
    <View style={styles.container}>
      <View style={styles.topIcon} />
      <Text style={styles.text}>eX-Man</Text>
      <View style={styles.botIcon} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RColor.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botIcon: {
    width: 180,
    height: 50,
    borderBottomRightRadius: 25,
    backgroundColor: RColor.orange,
  },
  topIcon: {
    width: 180,
    height: 50,
    borderTopLeftRadius: 25,
    backgroundColor: RColor.orange,
  },
  text: {
    color: RColor.white,
    fontSize: 40,
  },
});

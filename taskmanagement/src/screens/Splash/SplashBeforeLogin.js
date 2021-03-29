import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RColor} from '@reusable';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);

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

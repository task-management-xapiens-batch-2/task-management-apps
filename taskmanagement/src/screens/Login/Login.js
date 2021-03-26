import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  RButtonLoading,
  RLoader,
  Icon,
  RColor,
  RTextInput,
  RButton,
} from '@reusable';
const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  //   const [focus, setFocus] = useState(false);
  //   onFocus={() => setFocus(true)}
  //   onBlur={() => setFocus(false)}
  console.log({navigation});
  const onLoginPress=()=>{
    navigation.navigate('Tabs')
  }
  return (
    <View style={styles.container}>
      <View style={styles.txtContainer}>
        <Text
          style={[styles.txtTile, {paddingLeft: '10%', paddingBottom: '5%'}]}>
          LOGIN
        </Text>
      </View>
      <View style={styles.containerBody}>
        <RTextInput CStyle={{marginBottom: 15}} />
        <RTextInput CStyle={{marginBottom: 20}} />
        {loading ? <RButtonLoading /> : <RButton  onPress={()=>onLoginPress()} title="Login" />}
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RColor.blue,
  },
  txtContainer: {
    flex: 1.1,
    justifyContent: 'flex-end',
  },

  containerBody: {
    backgroundColor: RColor.white,
    flex: 2,
    justifyContent: 'center',
  },
  txtTile: {
    color: RColor.white,
    fontSize: 30,
  },
});

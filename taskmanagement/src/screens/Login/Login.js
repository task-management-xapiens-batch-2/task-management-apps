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
import {validateEmail, validatePassword} from '@utils';
const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const onLoginPress = () => {
    if(!emailValidator()&&!passwordValidator()){
      
    }
  };
  const emailValidator = () => {
    if (email === '') {
      setEmailError('email field cant be empty');
    } else if (!validateEmail(email)) {
      setEmailError('email format didnt correct');
    } else {
      setEmailError('');
    }
  };

  const passwordValidator = () => {
    if (password === '') {
      setPasswordError('password field cant be empty');
    } else if (validatePassword(password) > 6) {
      setPasswordError('password must greater than 6');
    } else {
      setPasswordError('');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.txtContainer}>
        <Text
          style={[styles.txtTile, {paddingLeft: '10%', paddingBottom: '5%'}]}>
          LOGIN
        </Text>
      </View>
      <View style={styles.containerBody}>
        <RTextInput
          CStyle={{marginBottom: 15}}
          title={'Email'}
          value={email}
          onChangeText={text => setEmail(text)}
          onBlur={() => emailValidator()}
          error={emailError}
        />
        <RTextInput
          CStyle={{marginBottom: 20}}
          title={'Password'}
          value={password}
          onBlur={() => passwordValidator()}
          onChangeText={text => setPassword(text)}
          error={passwordError}
          secureTextEntry={true}
        />
        {loading ? (
          <RButtonLoading />
        ) : (
          <RButton onPress={() => onLoginPress()} title="Login" />
        )}
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

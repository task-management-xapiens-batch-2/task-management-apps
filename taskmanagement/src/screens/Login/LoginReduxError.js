import React, {useEffect, useState} from 'react';
import {useMutation} from '@apollo/client';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {RButtonLoading, RColor, RTextInput, RButton} from '@reusable';
import {validateEmail, validatePassword} from '@utils';
import {LOGIN_WORKER} from '@config';
import {useDispatch, useSelector} from 'react-redux';
import loginAction from '../../redux/Auth/actions'

const Login = ({navigation}) => {
  const [email, setEmail] = useState('Odie.Hills@gmail.com');
  const [password, setPassword] = useState('AXwxYMPTfS534Fi');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const dispatch = useDispatch();

  const {list, loading, isLogin} = useSelector(state => {
    return {
      list: state.auth.list,
      loading: state.auth.loading,
      isLogin: state.auth.isLogin,
    };
  });
  console.log('LOGIN', {list, loading, isLogin});

  const onLoginPress = () => {
    try {
      emailValidator();
      passwordValidator();
      if (emailError == '' && passwordError == '') {
        dispatch(
          loginAction({
            email,
            password,
          }),
        );
      }
    } catch (err) {
      console.log(err);
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
    } else if (validatePassword(password) < 6) {
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
        {!loading ? (
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

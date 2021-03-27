import {validateEmail, validatePassword} from '@utils';
import {useState} from 'react';
const useEmailValidator = email => {
  const [emailError, setEmailError] = useState('');
  if (email === '') {
    setEmailError('email field cant be empty');
  } else if (!validateEmail(email)) {
    setEmailError('email format didnt correct');
  } else {
    setEmailError('');
  }
  return {emailError};
};

const usePasswordValidator = password => {
  const [passwordError, setPasswordError] = useState('');
  if (password === '') {
    setPasswordError('password field cant be empty');
  } else if (validatePassword(password) > 6) {
    setPasswordError('password must greater than 6');
  } else {
    setPasswordError('');
  }
  return {passwordError};
};
export {useEmailValidator, usePasswordValidator};

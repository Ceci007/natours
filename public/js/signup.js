/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const signup = async (
  name,
  email,
  password,
  passwordConfirm) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm,
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Signed up successfully!');
      window.setTimeout(() => {
        window.location.replace('/me');
       }, 1000);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

/*
export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/users/logout'
    });
    if ((res.data.status = 'success')) {
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    } 
  } catch (err) {
    console.log(err.response);
    showAlert('error', 'Error logging out! Try again.');
  }
};
*/
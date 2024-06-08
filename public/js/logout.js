/* eslint-disable */
import '@babel/polyfill';
import { showAlert } from './alerts';

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: '/api/v1/users/logout'
    });
    if ((res.data.status = 'success')) {
      showAlert('success', 'Logged out successfully');
      window.setTimeout(() => {
        location.assign('/');
      }, 500);
    }
  } catch (err) {
    showAlert('error', 'Error logging out! Try again.');
  }
};

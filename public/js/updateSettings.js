/* eslint-disable */
import { showAlert } from './alerts';

// type is either 'password' or 'data'
export const updateSettings = async (data, type) => {
  const url =
    type === 'password'
      ? '/api/v1/users/updateMyPassword'
      : '/api/v1/users/updateMe';

  try {
    const res = await axios({
      method: 'PATCH',
      url,
      data
    });

    if (res.data.status === 'success') {
      showAlert(
        'success',
        `${type[0].toUpperCase() +
          type.slice(1, type.length)} updated successfully!`
      );
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

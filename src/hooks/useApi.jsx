import { useHistory } from 'react-router-dom';

import { instance } from '../fakeDB/mock';
import { useToast } from './useToast';

export const useApi = (baseType) => {
  const { showError } = useToast();
  // API respone interceptor
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const notificationParam = {
        message: '',
      };

      if (error.response.status === 500) {
        notificationParam.message = 'خطای ارتباط با سرور';
      }

      if (
        error.response.status === 400 ||
        (error.response.status > 401 && error.response.status < 500)
      ) {
        notificationParam.message =
          error.response && error.response.data && error.response.data
            ? error.response.data.message
            : 'ارتباط با سرور برقرار نمی باشد';
      }

      if (notificationParam.message.length) {
        showError(notificationParam.message);
      }

      return Promise.reject(error);
    }
  );

  const get = (url, config) => {
    return instance.get(url, config);
  };

  const post = (url, data, config) => {
    return instance.post(url, data, config);
  };

  const put = (url, data, config) => {
    return instance.put(url, data, config);
  };

  const remove = (url, data, config) => {
    return instance.delete(
      url,
      {
        data,
      },
      config
    );
  };

  return {
    get,
    post,
    put,
    remove,
  };
};

import { AxiosResponse } from 'axios';

import { useApi } from './useApi';

const useHttpRequest = (baseType) => {
  const { get, post, remove, put } = useApi(baseType);

  const getRequest = (url, config) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await get(url, {
          validateStatus: (status) => {
            if (status >= 200 && status <= 204) {
              return true;
            }
          },
          ...config,
        });

        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  };

  const postRequest = (url, body, config) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await post(url, body, {
          validateStatus: (status) => {
            if (status && status >= 200 && status <= 204) {
              return true;
            }
          },
          ...config,
        });
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  };

  const deleteRequest = (url, body) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await remove(url, body, {
          validateStatus: (status) => {
            if (status >= 200 && status <= 204) {
              return true;
            }
          },
        });

        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  };

  const updateRequest = (url, body) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await put(url, body, {
          validateStatus: (status) => {
            if (status >= 200 && status <= 204) {
              return true;
            }
          },
        });

        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  };

  return {
    getRequest,
    postRequest,
    deleteRequest,
    updateRequest,
  };
};

export default useHttpRequest;

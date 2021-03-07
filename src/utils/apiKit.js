import axios from "axios";
import { toast } from "react-toastify";

import photoApi from "./photoApi";

const AxiosFactory = (function () {
  const SingletonClass = () => {
    return axios.create({
      baseURL: photoApi.base,
      headers: {
        Connection: "keep-alive",
        Accept: "application/json",
        "Content-Type": "application/json",
        "Accept-Language": "en-US,en;q=0.9,vi;q=0.8",
      },
    });
  };
  let instance;
  let logout;
  let token;

  return {
    getInstance: function () {
      // check if instance is available
      if (!instance) {
        instance = SingletonClass();
        delete instance.constructor; // or set it to null
      }
      return instance;
    },
    setToken: (_token) => {
      token = _token;
    },
    getToken: () => token,
    setLogout: (_logout) => {
      logout = _logout;
    },
    getLogout: () => logout,
  };
})();

// Create axios client, pre-configured with baseURL
const apiKit = AxiosFactory.getInstance();

// function getUrl(config) {
//   if (config.baseURL) {
//     return config.url ? config.url.replace(config.baseURL, '') : config.url;
//   }
//   return config.url;
// }

// Intercept all requests
apiKit.interceptors.request.use(
  (config) => {
    // if (AxiosFactory.getToken()) {
    // config.headers.Authorization = `Bearer ${AxiosFactory.getToken()}`;
    // }

    // console.log(`%c ${config.method} - ${getUrl(config)}:`, 'color: #0086b3; font-weight: bold', config);

    return config;
  },
  (error) => Promise.reject(error)
);

// Intercept all responses
// Intercept all responses
apiKit.interceptors.response.use(
  async (response) => {
    // console.log(`%c ${response.status} - ${getUrl(response.config)}:`, 'color: #008000; font-weight: bold', response);

    if (response.status === 204 || response.status === 205) {
      return null;
    }

    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }

    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
  },
  async (error) => {
    // console.log(`%c ${error.response.status} - ${getUrl(error.response.config)}:`, 'color: #a71d5d; font-weight: bold');

    if (error.response.status === 401) {
      toast("Unauthorized or session expired", {
        position: toast.POSITION.TOP_CENTER,
        type: toast.TYPE.ERROR,
        toastId: "Unauthorized or session expired",
      });
      // const logout = AxiosFactory.getLogout();
      // await logout();
    }

    return Promise.reject(error);
  }
);

// Set JSON Web Token in Client to be included in all calls
export const setToken = (token) => {
  AxiosFactory.setToken(token);
};

export const setLogout = (logout) => {
  AxiosFactory.setLogout(logout);
};

export default apiKit;

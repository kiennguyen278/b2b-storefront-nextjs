/* eslint-disable no-param-reassign */
import React from 'react';
import axios from 'axios';
import util from 'util';
import {HeaderKey} from "../constants";
import {appTypeCode, baseUrl, JM360_ENV} from '../constants/endpoint';
import storageLocal from "../utils/LocalStorage";
import _ from 'lodash';
// import { logout, clearExpireSession } from '../core/admin/admin.slice';

const ISSERVER = typeof window === "undefined";


const lang: string = storageLocal.get('i18nextLng', 'en');

export const apiInstance = axios.create({
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Accept-Language': lang,
    'X-Powered-By': 'JM360-Mobile',
    [HeaderKey.JM360_APP_VERSION]: '2.60.3',
    [HeaderKey.APP_TYPE_CODE]: appTypeCode,
    [HeaderKey.JM360_ENV]: JM360_ENV,
    [HeaderKey.JM360_APP_TYPE]: '3',
  },
  baseURL: baseUrl,
});

export const setApiHeader = () => {
    const kpData = storageLocal.get('kpData', {});
    if (!_.isEmpty(kpData)) {
      const kpDataParse = JSON.parse(kpData);
      apiInstance.defaults.headers[HeaderKey.JM360_KP] = kpDataParse.keypairData;
      apiInstance.defaults.headers[HeaderKey.JM360_KP_EXP] = kpDataParse.keyPairExpiration;
      apiInstance.defaults.headers[HeaderKey.JM360_KP_VER] = kpDataParse.keypairVersion;
    }

    const jwtToken = storageLocal.get('jwt_token', '');
    if (jwtToken) {
      const token = JSON.parse(jwtToken);
      const tokenType: string = token.token_type || 'Bearer';
      const accessToken: string = token.access_token || '';
      if (tokenType && token) {
        apiInstance.defaults.headers[HeaderKey.JM360_AUTHORIZATION] = `${tokenType} ${accessToken}`;
      }
    }
};
setApiHeader();

apiInstance.interceptors.response.use(
    response => {
      // console.log('get new token using refresh token', getLocalRefreshToken());
      return response;
    },

    async error => {
      throw error;
    }
);

const handleRequest = async (_request, thunkApi?) =>
    _request
        .then(response => response.data)
        .catch(error => {
          if (thunkApi) {
            return thunkApi.rejectWithValue(error?.response?.data || error);
          }
          return Promise.reject(error);
        });

export class api {
  static post =
      (url, axiosConfig = {}) =>
          (params = {}, thunkApi?) => {
            handleRequest(apiInstance.post(url, params, axiosConfig), thunkApi);
          };

  static put =
      (url, axiosConfig = {}) =>
          (params = {}, thunkApi) =>
              handleRequest(apiInstance.put(url, params, axiosConfig), thunkApi);

  static get =
      (url, axiosConfig = {}) =>
          thunkApi =>
              handleRequest(apiInstance.get(url, axiosConfig), thunkApi);

  static delete =
      (url, axiosConfig = {}) =>
          (params = {}, thunkApi) =>
              handleRequest(apiInstance.delete(util.format(url, params), axiosConfig), thunkApi);
}

export const changeHeaderAPI = (headerObject: { [key: string]: any }) => {
  Object.assign(apiInstance.defaults, {headers: headerObject});
};

// export const removeHeaderAuthorization = () => {
//     delete apiInstance.defaults.headers[HeaderKey.JM360_AUTHORIZATION];
// };

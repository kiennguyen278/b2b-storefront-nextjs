import * as RouteConst from './RouteConst';

export default RouteConst;

export const ConstRoleID = {
  ROLE_OWNER: 1,
  ROLE_AGENT: 2,
  ROLE_EMPLOYEE: 3,
  ROLE_ADMIN: 4,
  ROLE_SUPER_AGENT: 8,
};

export const HeaderKey = {
  JM360_VERSION: 'JM360_VERSION',
  JM360_APP_VERSION: 'JM360_APP_VERSION',
  JM360_APP_TYPE: 'JM360_APP_TYPE',
  JM360_APP_ID: 'JM360_APP_ID',
  JM360_APP_KEY: 'JM360_APP_KEY',
  JM360_BUILD: 'JM360_BUILD',
  JM360_OS_TYPE: 'JM360_OS_TYPE',
  JM360_OS_VERSION: 'JM360_OS_VERSION',
  JM360_DEVICE_MODEL: 'JM360_DEVICE_MODEL',
  JM360_ENV: 'JM360_ENV',
  APP_TYPE_CODE: 'APP_TYPE_CODE',
  JM360_SO_KP: 'jm360_so_kp',
  JM360_SO_KP_EXP: 'jm360_so_kp_exp',
  JM360_SO_KP_VER: 'jm360_so_kp_ver',
  JM360_KP_EXP: 'jm360_kp_exp',
  JM360_KP: 'jm360_kp',
  JM360_KP_VER: 'jm360_kp_ver',
  JM360_AUTHORIZATION: 'Authorization',
  JM360_REFRESH_TOKEN: 'refreshToken',
  ACCEPT_LANGUAGE: 'Accept-Language',
};

export const CurrencyKey = {
  KEY_USD: 'USD',
  SYMBOL_USD: '$',
  KEY_AUD: 'AUD',
  SYMBOL_AUD: 'AU$',
  KEY_GBP: 'GBP',
  SYMBOL_GBP: 'UK£',
  KEY_EUR: 'EUR',
  SYMBOL_EUR: '€',
  KEY_CNY: 'CNY',
  SYMBOL_CNY: 'CN¥',
  KEY_BDT: 'BDT',
  SYMBOL_BDT: 'Tk',
  KEY_SYP: 'SYP',
  KEY_SEK: 'SEK',
  SYMBOL_SEKL: 'kr',
  KEY_SAR: 'SAR',
  SYMBOL_SAR: 'SR',
  KEY_XOF: 'XOF',
  SYMBOL_XOF: 'CFA',
  KEY_AOA: 'AOA',
  SYMBOL_AOA: 'Kz',
};



export const KeyAsyncStore = {
  cartId: 'cartId',
  appKey: 'appKey',
};

export type ButtonStatus = 'default' | 'loading' | 'success' | 'error';

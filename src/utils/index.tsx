import _ from 'lodash';
// import { sprintf, vsprintf } from 'sprintf-js';

import * as Constants from '../constants';
import {default as moment} from 'moment';

const {CurrencyKey} = Constants;

export const safeParseInt = strNumber => {
  let numParse = 0;
  if (strNumber === '' || strNumber === null || strNumber === undefined) {
    return numParse;
  }

  numParse = _.parseInt(strNumber);
  if (numParse === null || _.isNaN(numParse)) {
    numParse = 0;
  }

  return numParse;
};

export const safeParseFloat = strNumber => {
  let numParse = 0;
  if (strNumber === '' || strNumber === null || strNumber === undefined) {
    return numParse;
  }

  numParse = parseFloat(strNumber);
  if (numParse === null) {
    numParse = 0;
  }

  return numParse;
};

export const getDeviceLocale = currencyCode => {
  if (currencyCode.toUpperCase() === CurrencyKey.KEY_EUR.toUpperCase()) {
    return 'nl-NL';
  }
  if (currencyCode.toUpperCase() === CurrencyKey.KEY_SAR.toUpperCase()) {
    return 'en-US';
  }
  if (currencyCode.toUpperCase() === CurrencyKey.KEY_SEK.toUpperCase()) {
    return 'sv-SE';
  }
  if (currencyCode.toUpperCase() === CurrencyKey.KEY_USD.toUpperCase()) {
    return 'en-US';
  }
  if (currencyCode.toUpperCase() === CurrencyKey.KEY_AOA.toUpperCase()) {
    return 'pt-AO';
  }
  return 'en-US';
};
export const backTop = () => {
  window.scroll({top: 0, left: 0, behavior: 'smooth'});
};

export const safeParseJson = jsonValue => {
  let objParsed = {};

  if (jsonValue && jsonValue !== '' && typeof jsonValue === 'string' && jsonValue !== null) {
    objParsed = JSON.parse(jsonValue);
  }
  return _.isObject(objParsed) ? objParsed : {};
};

export const safeParseListJson = jsonValue => {
  let objParsed = [];
  if (jsonValue && jsonValue !== '' && typeof jsonValue === 'string' && jsonValue !== null) {
    objParsed = JSON.parse(jsonValue);
  }

  return _.isArray(objParsed) ? objParsed : [];
};

// export const replaceStrUrl = (baseUrl, arrStr) => {
//   let path = vsprintf(baseUrl, arrStr);
//   return path;
// };

export const getSafeValue = (object, keyItem, defaultValue) => {
  let safeValue = _.get(object, keyItem, defaultValue);
  if (safeValue === null) {
    safeValue = defaultValue;
  }

  if (safeValue === '') {
    safeValue = defaultValue;
  }
  if (
      safeValue !== null &&
      defaultValue !== null &&
      (typeof safeValue !== typeof defaultValue || safeValue.constructor !== defaultValue.constructor)
  ) {
    safeValue = defaultValue;
  }

  // console.log("safeValue", safeValue);

  return safeValue;
};

export const convertCurrency = (value, currencyCode) => {
  const val = safeParseFloat(value);
  const valueRound = Math.round(val * 100) / 100;
  const currencyDefault = CurrencyKey.KEY_USD;

  const locale = getDeviceLocale(currencyCode || currencyDefault);

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode || currencyDefault,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(valueRound);
};

export const currencyFormat = currencyCode => {
  const currencyDefault = CurrencyKey.KEY_USD;
  const locale = getDeviceLocale(currencyCode || currencyDefault);
  // just a number with thousand group and fraction
  const numberWithDecimalSeparator = 10000.11;

  return Intl.NumberFormat(locale).formatToParts(numberWithDecimalSeparator);
};

export const getCurrencySymbol = currencyCode => {
  const currencyDefault = CurrencyKey.KEY_USD;
  const locale = getDeviceLocale(currencyCode || currencyDefault);
  const sourceCurrency = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode || currencyDefault,
  }).formatToParts();
  const arrCurrency = sourceCurrency.filter(obj => {
    if (obj.type === 'currency') {
      return obj;
    }
  });
  const objCurrency = arrCurrency[0];
  return objCurrency.value;
};

export const formatNumber = (value, currencyCode?) => {
  const val = safeParseFloat(value);
  const valueRound = Math.round(val * 100) / 100;
  const currencyDefault = CurrencyKey.KEY_USD;

  const locale = getDeviceLocale(currencyCode || currencyDefault);

  return new Intl.NumberFormat(locale, {
    style: 'decimal',
    currency: currencyCode || currencyDefault,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(valueRound);
};


export const safeParseDate = (value: string, format = 'YYYY-MM-DD') => {
  const date = moment(value, format).toDate();
  const isValid = moment(date).isValid();
  return (isValid && date) || undefined;
};
export const convertDateFormat = (value: string, fromFormat: string, toFormat: string): string => {
  const date = moment(value, fromFormat);
  return date.isValid() ? date.format(toFormat) : '';
};


export function getRoutesFromConfig(routes) {
  const totalRoute: any = routes.reduce((accu, cur) => {
    if (!cur.children) {
      return [...accu, cur];
    } else {
      return [...accu, ...cur.children];
    }
  }, []);

  return totalRoute;
}

export function getMenuFromConfig(routes) {
  const res: any = [];

  routes.forEach(route => {
    const tmp = {...route};
    if (tmp.children) {
      tmp.children = getMenuFromConfig(tmp.children);
    }
    res.push(tmp);
  });
  return res;
}




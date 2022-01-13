const ISSERVER = typeof window === "undefined";

const storageLocal = {
  set: function (key, value) {
    if (!ISSERVER)
      localStorage.setItem(key, value);
  },
  get: function (key, defaultValue) {
    if (!ISSERVER)
      return localStorage.getItem(key) || defaultValue;
  },
  setObject: function (key, value) {
    if (!ISSERVER)
      localStorage.setItem(key, JSON.stringify(value));
  },
  getObject: function (key, value) {
    if (!ISSERVER)
      return JSON.parse(localStorage.getItem(key) || JSON.stringify(value));
  },
  clear: function () {
    if (!ISSERVER)
      return localStorage.clear();
  },
  removeItem: function (key) {
    if (!ISSERVER)
      return localStorage.removeItem(key);
  },
};

export default storageLocal;

import storageLocal from '../utils/LocalStorage';


export const baseUrl = storageLocal.get('baseURL', 'https://apisix-cluster.int.jmango.net/showcase');
export const appTypeCode = storageLocal.get('appTypeCode', '') || process.env.REACT_APP_APP_TYPE_CODE || 'bcm';
export const JM360_ENV = process.env.REACT_APP_JM360_ENV || 'showcase-uat'; // env showcase


export const EndpointConst = {
  authLogin: '/jm-auth/login',
  getCompaniesAssignedToSale: '/b2b-user-api/users/saleCompanies',
  getListStore: '/b2b-user-api/stores',
  loginAsCompany: '/b2b-user-api/users/loginAsCompany',
};
export default EndpointConst;

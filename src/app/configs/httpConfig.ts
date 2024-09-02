import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import localStorageServise from '../../shared/servises/localStorage.servise';
// import { userAPI } from '../../entities/User/api';
// import localStorageService from '../../shared/services/localStorageService';

export const httpClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

httpClient.interceptors.request.use(onRequest);
httpClient.interceptors.response.use(onResponseSuccess, onResponseError);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function onRequest(req: InternalAxiosRequestConfig<any>) {
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    req.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return req;
}

function onResponseSuccess(res: AxiosResponse) {
  return res.data;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function onResponseError(error: any) {
  // const originalRequest = error.config;

  if (error.response.status !== 401) {
    localStorageServise.set('accessTocken', null) //  !!TEMPORARY SOLUTION: WAIT REFRESH POINT
    throw error;
  }

  // try {
  //   // const { accessToken } = await userAPI.refresh();

  //   // localStorageService.set('accessToken', accessToken);

  //   return httpClient.request(originalRequest);
  // } catch (err) {
  //   throw err;
  // }
}

import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    // baseURL: 'http://123.207.32.32:8000',
    // baseURL:'http://106.54.54.237:8000/api/mn',
    baseURL:'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    return config;
  }, error => {
    return error;
  })

  instance.interceptors.response.use(res => {
    return res;
  }, error => {
    return error;
  })

  // 返回一个promise
  return instance(config);
}
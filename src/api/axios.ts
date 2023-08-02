import axios from 'axios';

const ajax = axios.create({
    // 设置基础url
    baseURL: import.meta.env.VITE_API_AJAX,
    // 设置请求超时时间
    timeout: 6000,
    // 设置请求头
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token'
      }
  });


// 请求拦截器
ajax.interceptors.request.use(
  config => {
    // 修改请求头
    // config.headers = Object.assign({}, config.headers, {
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer token'
    //   });
    // 在发送请求之前做些什么
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
ajax.interceptors.response.use(
  response => {
    // 对响应数据做些什么
    return response.data;
  },
  error => {
    // 对响应错误做些什么
    return Promise.reject(error);
  }
);
export default ajax
import ajax  from "../axios"

// 登录请求
export function login(params:any) {
  return  ajax(
        {
            method: 'post',
            url: '/adduser',
            data: params
        }
    )
} 
// 注册请求
export function registration(params:any) {
    return  ajax(
          {
              method: 'post',
              url: '/adduser',
              data: params
          }
      )
  } 
  
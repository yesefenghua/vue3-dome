import ajax  from "../axios"

export function login(params:any) {
  return  ajax(
        {
            method: 'post',
            url: '/user/12345',
            data: params
        }
    )
} 

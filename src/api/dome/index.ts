import ajax  from "../axios"

//实名认证
export function check(params:{
    idcard:string,
    name:string,
    image?:any,
    url?:any
  }) {
    return  ajax(
          {
              method: 'POST',
              url: 'https://faceidcardh.hzylgs.com/api-mall/api/face_id_card_yi_suo/check',
              data: params,
              headers: {
                'Authorization': 'APPCODE ' + '35b529ad3b9a42ef8d86e01d9afb4313',
                'Content-Type': 'application/x-www-form-urlencoded'
              }
          }
      )
  } 
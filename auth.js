/**
 * Created by yangxuanbin on 2017/11/24
 **/
const CryptoJS = require("cryp-to-js").default;

const AUTH_KEY = CryptoJS.enc.Utf8.parse('ddtech2015ddtech');
const AUTH_IV  = CryptoJS.enc.Utf8.parse('0102030405060708');

//加密
export const authEncry = (str)=>{
  let srcs = CryptoJS.enc.Utf8.parse(str);
  let encrypted = CryptoJS.AES.encrypt(srcs, AUTH_KEY, { iv: AUTH_IV,mode:CryptoJS.mode.CBC});
  return encrypted.toString();
};

//登录认证
export const onSignIn = (data,callback) => {
  if(data && data !=""){
    storage.save({
      key: 'userAccount',
      data: data,
    });
    callback && callback()
  }
};

//是否已经登录
export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    storage.load({key:'userAccount'})
      .then((ret)=>{
        if (ret !== null && ret.account != "") {
          resolve(true);
        } else {
          resolve(false);
        }
      }).catch(err => reject(err))
  });
};

//获取用户信息
export const getUserAccount = ()=>{
  return new Promise((resolve, reject) => {
    storage.load({key:'userAccount'})
      .then((ret)=>{
        if (ret !== null && ret.account != "") {
          resolve(ret);
        } else {
          resolve(false);
        }
      }).catch(err => reject(err))
  });
}

// 退出登录
export const clearUsr = ()=>{
  global.userAccount={};
  storage.remove({key:'userAccount'})
};
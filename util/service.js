/**
 * 此文件管理项目所有接口
 */
import {get, post, put, del} from './network';

/**
 * 服务器根域名
 * 试玩更多接口看这里
 * http://jsonplaceholder.typicode.com/
 * @type {string}
 */
export const API_ROOT = wx.host;
export const TOKEN = wx.getStorageSync('user').token


/**
 * 获取图片
 */
export const getPhoto = (id) => get(`${API_ROOT}/photos/${id}`);


/**
 * 推荐
 */

export function getHome(){
  const url = API_ROOT + 'api/index/home'
  return get(url)
}

/**
 * 公开课、精品课
 */
export function getCourse(subject) {
  const url = API_ROOT + 'api/course/listing?case=' + subject
  return get(url)
}

/**
 * 订阅
 */
export function getSubscribe() {
  const url = API_ROOT + 'api/user/love_list?token=' + TOKEN
  return get(url)
}


/**
 * 猜你喜欢
 */
export function getLoveGuess() {
  const url = API_ROOT + 'api/user/love_guess?token=' + TOKEN
  return get(url)
}

/**
 * 搜索
 */
export function getFind(word) {
  const url = API_ROOT + 'api/course/listing?keyword=' + word
  return get(url)
}

export function silentLogin(){
  var user = wx.getStorageSync('user');
  if (!user) {
    var that = this;
    return new Promise(function (t, n) {
      wx.login({
        success(res) {
          if (res.code) {
            //发起网络请求
            wx.request({
              url: wx.host + '/api/user/login_silent',
              data: {
                code: res.code
              },
              success: function (res) {
                console.log(res);
                res = res.data;
                if (res.code == 1 && res.data) {
                  wx.setStorageSync('user', res.data);
                  t(true)
                } else {
                  t(false)
                }
              }
            })
          } else {
            console.log('登录失败！' + res.errMsg);
            t(false)
          }
        }
      })

    });
  } else {
    return new Promise(function (t, n) { t(true) })
  }
}
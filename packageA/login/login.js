// component/login/login.js
Page({
  data: {
    room_id: '',

    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad: function (option) {
    if (option.room_id) {
      this.setData({
        room_id: option.room_id
      })
    }


    return;
    var t = this;
    /*
    wx.login({//login流程
      success: function (res) {//登录成功
        if (res.code) {
          var code = res.code;
          wx.getUserInfo({//getUserInfo流程
            success: function (res2) {//获取userinfo成功
              var encryptedData = encodeURIComponent(res2.encryptedData);//一定要把加密串转成URI编码
              var iv = res2.iv;
              //请求自己的服务器
              t._login(code, encryptedData, iv);
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });*/

  },

  /**
   * 授权登录
   */
  authorLogin: function (e) {
    var t = this;
    if (e.detail.errMsg !== 'getUserInfo:ok') {
      return false;
    }
    wx.showLoading({ title: "正在登录", mask: true });

    function user_login(code, encryptedData, iv) {
      //创建一个dialog
      wx.showToast({
        title: '正在登录...',
        icon: 'loading',
        duration: 10000
      });
      //请求服务器
      wx.request({
        url: wx.host + '/api/user/login',
        data: {
          code: code,
          encryptedData: encryptedData,
          iv: iv
        },
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
          'content-type': 'application/json'
        }, // 设置请求的 header
        success: function (res) {
          // success
          wx.hideToast();
          console.log('服务器返回');
          console.log(res.data);
          if (res.data) {
            wx.setStorageSync('user', res.data)
            if (t.data.room_id) {//如果传了房间号
              wx.redirectTo({
                url: '/pages/room/index?id=' + t.data.room_id
              })
            } else {
              wx.navigateBack({
                delta: 1,//返回的页面数，如果 delta 大于现有页面数，则返回到首页
              })
            }

          }
        },
        fail: function () {
          // fail
          // wx.hideToast();
        },
        complete: function () {
          // complete
        }
      })
    }
    // 执行微信登录
    wx.login({
      success: function (res) {

        if (res.code) {
          var code = res.code;
          wx.getUserInfo({//getUserInfo流程
            success: function (res2) {//获取userinfo成功
              var encryptedData = encodeURIComponent(res2.encryptedData);//一定要把加密串转成URI编码
              var iv = res2.iv;
              //请求自己的服务器
              user_login(code, encryptedData, iv);
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  },

  /**
   * 授权成功 跳转回原页面
   */
  navigateBack: function () {
    wx.navigateBack();
    // let currentPage = wx.getStorageSync('currentPage');
    // wx.redirectTo({
    //   url: '/' + currentPage.route + '?' + App.urlEncode(currentPage.options)
    // });
  },
})
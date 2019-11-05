// pages/Page-search/PgSearch.js
import {
  getFind
} from '../../util/service' //引入请求函数

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '', //输入框value值
    noData: false, //暂无数据
    carList: [], //搜索列表
    history: false, //搜索记录
    historyData: [], //历史记录列表
    noHistory: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getStorage({ //获取历史记录缓存
      key: 'history',
      success(res) {
        if (res.data == '') {
          that.setData({
            history: false,
            noHistory: true
          })
        } else {
          that.setData({
            historyData: res.data,
            history: true
          })
        }
      }
    })
  },
  //搜索框搜索事件
  search: function (e) {
    var that = this
    console.log(e)
    if (e.detail.value === '') {
      console.log('我是空') //输入框value为空
      that.setData({
        noData: false,
        carList: '',
        closeImg: false,
        history: false,
        noHistory: true
      })
    } else { //输入框value不为空
      that.setData({
        closeImg: true,
        history: false
      })
      getFind(e.detail.value).then(listData => {
        var resObj = listData.data
        if (resObj.total === 0) {
          that.setData({
            noData: true,
            carList: '',
            noHistory: false,
          })
        } else if (resObj.total > 0) {
          that.setData({
            noData: false,
            carList: resObj.data,
            noHistory: false,
            history: false
          })
        }

      })
    }
  },

  //点击X取消输入框内容事件
  close: function () {
    var that = this
    that.setData({
      inputValue: '',
      carList: '',
      noData: false,
      closeImg: false,
      history: false,
      noHistory: true,
    })
  },

  //取消事件
  cancel: function () {
    var that = this
    wx.switchTab({
      url: '/pages/index/index'
    })
  },

  //选择车型事件
  selectCar(e) {
    console.log(e)
    var that = this
    console.log(e.target.dataset.name)
    if (that.data.historyData.indexOf(e.target.dataset.name) > -1) {
      //包含该元素
    } else {
      that.data.historyData.push(e.target.dataset.name)
    }
    wx.setStorage({ //添加缓存
      key: 'history',
      data: that.data.historyData,
      success: function () {
        wx.reLaunch({
          url: '/pages/carType/carType'
        })
      }
    })

  },

  //清空历史搜索
  cancelHistory: function () {
    var that = this
    wx.removeStorage({
      key: 'history',
      success(res) {
        that.setData({
          history: false,
          noHistory: true
        })
      }
    })
  },

  //点击历史搜索
  searchHistory: function (e) {
    var that = this
    that.setData({
      inputValue: e.target.dataset.name,
      history: false,
      closeImg: true
    })

    getFind(e.target.dataset.name).then(listData => {
      var resObj = listData.data
      if (resObj.code = 1) {

        if (resObj.data.length === 0) {
          that.setData({
            noData: true
          })
        } else {
          that.setData({
            noData: false,
            carList: resObj.data
          })

        }
      }
    })
  },

})
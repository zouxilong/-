// component/search/search.js
Component({
  options: {
    multipleSlots: true
  },
  properties: {

  },
  data: {
    inputValue: '', //输入框value值
    noData: false, //暂无数据
    carList: [], //搜索列表
    history: false, //搜索记录
    historyData: [], //历史记录列表
  },
  onLoad: function(options) {
    var that = this
    wx.getStorage({ //获取历史记录缓存
      key: 'history',
      success(res) {
        console.log(res.data)
        if (res.data == '') {
          that.setData({
            history: false
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
  methods: {
    tosearch: function(e) {
      wx.navigateTo({
        url: '../../packageA/Page-search/PgSearch',
      })
    }
  }
})
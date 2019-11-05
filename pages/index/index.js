// pages/index/index.js
import {
  getHome,
  getCourse,
  silentLogin,
  TOKEN
} from '../../util/service';


Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0 //预定的位置
  },
  reset() {
    this.setData({
      home_banner: null,
      home_choice_course: null,
      home_choice: null,
      list_course: null,
      list_category: null,
      list_free: null,
      public: null,
      choice: null
    })
  },
  onLoad() {
    getHome()
      .then(listData => {
        this.setData({
          home_banner: listData.data.home_banner,
          home_choice_course: listData.data.home_choice_course,
          home_choice: listData.data.home_choice,
          list_course: listData.data.list_course,
          list_category: listData.data.list_category,
          list_free: listData.data.list_free
        });
        return getCourse('public');
      }).then(listData => {
        this.setData({
          public: listData.data.data
        })
        return getCourse('choice');
      }).then(listData =>
        this.setData({
          choice: listData.data.data
        })
      );
    // getHome().then(res => {
    //     this.setData({
    //       home_banner: res.data.home_banner,
    //       home_choice_course: res.data.home_choice_course,
    //       home_choice: res.data.home_choice,
    //       list_course: res.data.list_course,
    //       list_category: res.data.list_category,
    //       list_free:res.data.list_free
    //     })
    //   }),

    silentLogin()

  },
  //点击滑动
  bindchange: function(e) {
    console.log(1)
    let that = this;
    that.setData({
      currentTab: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  clickTab: function(e) {
    let that = this;
    if (that.data.currentTab === e.currentTarget.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.currentTarget.dataset.current
      })
    }
  }
})
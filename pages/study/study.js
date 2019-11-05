// pages/study/study.js
import {
  getSubscribe,
  getLoveGuess
} from '../../util/service'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
  },
  reset() {
    this.setData({
      subscibeData: null,
      course: null,
      course_list: null,
      course_guess_audio: null
    })
  },
  onLoad() {
    this.reset()
    getSubscribe()
      .then(listData => {
        this.setData({
          subscibeData: listData.data.data
        })
        return getLoveGuess();
      }).then(listData =>
        this.setData({
          course: listData.data.course_guess.course,
          course_list: listData.data.course_guess.list,
          course_guess_audio: listData.data.course_guess_audio
        })
      )
  },
  /**
   * 切换底部tab
   */
  switchTab(e) {
    console.log(1)
    let tab = e.currentTarget.id
    if (tab === 'tableft') {
      this.setData({
        currentTab: 0
      })
    } else if (tab === 'tabright') {
      this.setData({
        currentTab: 1
      })
    }
  }
})
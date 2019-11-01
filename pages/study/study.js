// pages/study/study.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    courseCoverArr: [{
      title: "精英课程高大上的PPT设",
      subtitle: "精英课程高大上的PPT设计秘籍dasdasdasd",
      des_images: [
        "http://edu.hd/assets/img/qrcode.png"
      ],
      price: "10.00",
      price_old: "20.00",
      num: "5"
    }, {
      title: "精英课程高大上的PPT设",
      subtitle: "精英课程高大上的PPT设计秘籍dasdasdasd",
      des_images: [
        "http://edu.hd/assets/img/qrcode.png"
      ],
      price: "10.00",
      price_old: "20.00",
      num: "5"
    }, {
      title: "精英课程高大上的PPT设",
      subtitle: "精英课程高大上的PPT设计秘籍dasdasdasd",
      des_images: [
        "http://edu.hd/assets/img/qrcode.png"
      ],
      price: "10.00",
      price_old: "20.00",
      num: "5"
    }, {
      title: "精英课程高大上的PPT设",
      subtitle: "精英课程高大上的PPT设计秘籍dasdasdasd",
      des_images: [
        "http://edu.hd/assets/img/qrcode.png"
      ],
      price: "10.00",
      price_old: "20.00",
      num: "5"
    }],
  },
  onLoad() {

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
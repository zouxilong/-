// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg',
      'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg',
      'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'
    ],
    pageIcon: [{
        icon: "collect",
        desc: "我的收藏"
      },
      {
        icon: "generalize",
        desc: "我的推广"
      },
      {
        icon: "my-courses",
        desc: "我的课程"
      },
      {
        icon: "learning-record",
        desc: "学习记录"
      }
    ],
    titleBar: {
      title: "精品好课",
    },
    courseArr: [{
        "banben": "1",
        "name": "精英课程高大上",
        "subtitle": "突出打好基础",
        "price": "10.00",
        "price_old": "20.00",
        "des": "精英课程高大上的PPT设计秘籍",
        "des_images": [
          "http://edu.hd/assets/img/qrcode.png"
        ]
      },
      {
        "banben": "1",
        "name": "精英课程高大上",
        "subtitle": "突出打好基础",
        "price": "10.00",
        "price_old": "20.00",
        "des": "精英课程高大上的PPT设计秘籍",
        "des_images": [
          "http://edu.hd/assets/img/qrcode.png"
        ]
      }, {
        "banben": "1",
        "name": "精英课程高大上",
        "subtitle": "突出打好基础",
        "price": "10.00",
        "price_old": "20.00",
        "des": "精英课程高大上的PPT设计秘籍",
        "des_images": [
          "http://edu.hd/assets/img/qrcode.png"
        ]
      }
    ],
    specailArr: [{
        title: "精英课程高大上的PPT设计秘籍",
        des_images: [
          "http://edu.hd/assets/img/qrcode.png"
        ]
      },
      {
        title: "精英课程高大上的PPT设计秘籍",
        des_images: [
          "http://edu.hd/assets/img/qrcode.png"
        ]
      },
      {
        title: "精英课程高大上的PPT设计秘籍",
        des_images: [
          "http://edu.hd/assets/img/qrcode.png"
        ]
      },
      {
        title: "精英课程高大上的PPT设计秘籍",
        des_images: [
          "http://edu.hd/assets/img/qrcode.png"
        ]
      },
    ],
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
    currentTab: 0 //预定的位置
  },
  onLoad() {

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
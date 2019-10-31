// component/Carousel-pic/carousel.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    imgUrls: { // 属性名
      type: Array, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '标题' // 属性初始值（可选），如果未指定则会根据类型选择一个
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    flag: true,
    swiperIndex: 0 //这里不写第一次启动展示的时候会有问题
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindchange(e) {
      this.setData({
        swiperIndex: e.detail.current
      })
    },
  }
})
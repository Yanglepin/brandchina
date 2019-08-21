//index.js
const app = getApp()

Page({
  data: {
    //-----------模拟banner图-----------
    imgUrls: [
      '/icons/banner1.png',
      '/icons/banner1.png',
      '/icons/banner1.png'
    ],
    //所有图片的高度  
    imgheights: [],
    //图片宽度 
    imgwidth: 750,
    //默认  
    current: 0 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getLocation({
      type: 'wgs84',
      success: function(res) { 
        console.log("定位信息："+JSON.stringify(res));
      }
    })
  },
  /**
  * 生命周期函数--监听页面初次渲染完成
  */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  imageLoad: function (e) {//获取图片真实宽度  
    var imgwidth = e.detail.width,
      imgheight = e.detail.height,
      //宽高比  
      ratio = imgwidth / imgheight;
    // console.log(imgwidth, imgheight)
    //计算的高度值  
    var viewHeight = 750 / ratio;
    var imgheight = viewHeight;
    var imgheights = this.data.imgheights;
    //把每一张图片的对应的高度记录到数组里  
    imgheights[e.target.dataset.id] = imgheight;
    this.setData({
      imgheights: imgheights
    })
  },
  bindchange: function (e) {
    // console.log(e.detail.current)
    this.setData({ current: e.detail.current })
  },
  // 农副产品
  bindAgricultural: function(){
    wx.navigateTo({
      url: '../agricultural/agricultural'
    })
  },
  // 工业产品
  bindIndustry: function () {
    wx.navigateTo({
      url: '../industry/industry'
    })
  },
  // 服务产品
  bindService: function () {
    wx.navigateTo({
      url: '../service/service'
    })
  },
  // 活动区域
  bindActivity: function () {
    wx.navigateTo({
      url: '../activityArea/activityArea'
    })
  },
  // 商品详情
  getDetails: function () {
    wx.navigateTo({
      url: '../goodsDetails/goodsDetails'
    })
  },
  
})

// pages/member/member.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  // 会员中心
  getMember: function () {
    wx.navigateTo({
      url: '../member1/member1'
    })
  },
  //积分
  getIntegral: function () {
    wx.navigateTo({
      url: '../integral/integral'
    })
  },
  //佣金
  getMoney: function () {
    wx.navigateTo({
      url: '../money/money'
    })
  },
  //余额
  getBalance: function () {
    wx.navigateTo({
      url: '../balance/balance'
    })
  },
  //我的订单
  getMyorder: function () {
    wx.navigateTo({
      url: '../myOrder/myOrder'
    })
  },
  //我的购物车
  getShoppingCart: function () {
    wx.navigateTo({
      url: '../shoppingCart/shoppingCart'
    })
  },
  //消费总额
  getTotalSum: function () {
    wx.navigateTo({
      url: '../totalSum/totalSum'
    })
  },
  //我的团队
  getMyTeam: function () {
    wx.navigateTo({
      url: '../myTeam/myTeam'
    })
  },
  //修改资料
  getInfoUpdate: function () {
    wx.navigateTo({
      url: '../infoUpdate/infoUpdate'
    })
  },
  //收货地址
  getAddressList: function () {
    wx.navigateTo({
      url: '../addressList/addressList'
    })
  },
  //公告
  getNotice: function () {
    wx.navigateTo({
      url: '../notice/notice'
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
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
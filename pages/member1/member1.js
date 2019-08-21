// pages/member1/member1.js
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
  //查看消费总额
  getTotalSum: function () {
    wx.navigateTo({
      url: '../totalSum/totalSum',
    })
  },
  //零售商  
  getActivity: function () {
    wx.navigateTo({
      url: '../activity/activity',
    })
  },
  //代理商
  getAgent: function () {
    wx.navigateTo({
      url: '../agent/agent',
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
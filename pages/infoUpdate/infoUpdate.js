// pages/infoUpdate/infoUpdate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  //上传头像
  uploadImg: function () {
    let that = this;
    wx.chooseImage({
      success(res) {
        console.log(res);
        // return false; 
        const tempFilePaths = res.tempFilePaths;
        that.setData({
          img: tempFilePaths[0]
        })
        // wx.uploadFile({
        //   url: '',
        //   filePath: tempFilePaths[0],
        //   name: 'file',
        //   formData: {
        //     user: 'test'
        //   },
        //   success(res) {
        //     console.log(res);
        //     that.setData({
        //       img: res.data
        //     })
        //   }
        // })
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
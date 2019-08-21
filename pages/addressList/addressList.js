// pages/addressList/addressList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
    'addressList': [{
      'name':'小明',
      'phone': '15468955263',
      'address': ' 河南 郑州市 二七区 升龙城二七中心',
      'isCheck': false, //判断是否选中
    },{
      'name': '小小',
      'phone': '15468955263',
      'address': ' 河南 郑州市 二七区 升龙城二七中心',
      'isCheck': false, //判断是否选中
      }, {
        'name': '小明',
        'phone': '15468955263',
        'address': ' 河南 郑州市 二七区 升龙城二七中心',
        'isCheck': false, //判断是否选中
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  }, 
  //是否选中
  checkedTap: function (e) {
    var checked = this.data.isCheck;
    let index = e.currentTarget.dataset.index;
    var updateAddress = this.data.addressList[index];
    console.log(JSON.stringify(updateAddress));
    if (updateAddress.isCheck==false){
      updateAddress.isCheck = true;
    } 
    //接口改变状态
  }, 
  // 添加收货地址
  getAddAddress: function () {
    wx.navigateTo({
      url: '../addAddress/addAddress'
    })
  },
  // 编辑收货地址
  getEditAddress: function () {
    wx.navigateTo({
      url: '../addAddress/addAddress'
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
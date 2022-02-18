// pages/submit/submit.js
const app = getApp()
Page({
  data: {
    idx:"",
    expinfo:'',
    filename:'',
    idx:""
  },
  exit:function(e){
    wx.switchTab({
      url: '../demo01/demo01'
    })
  },

  onLoad: function (options) {
    this.setData({
      idx:options.idx
    })
    console.log("submit",this.data.idx);
    let that = this
    wx.request({
      url: 'http://127.0.0.1:8000/api/expinfo/',
      data:{userid:app.globalData.userid},
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success:function(res){
        console.log(res);
        that.setData({
          expinfo:res.data
        })
      }
    })
  },

  submitword:function(e){
    var that = this
    wx.chooseMessageFile({
      count: 1,
      type:'file',
      success(res){
        const tempFilePaths = res.tempFilePath
        wx.uploadFile({
          filePath: res.tempFiles[0].path,
          name: 'file',
          url: 'http://127.0.0.1:8000/api/getfile/',
          formData:{
            filename:res.tempFiles[0].name,
            expname:that.data.expinfo[that.data.idx].exp_name
          },
          success:function(res){
            console.log(res)
            wx.lin.showDialog({
              type: "alert",
              title: "提示",
              content: "提交成功！"
            })
            
          }
        })
        
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
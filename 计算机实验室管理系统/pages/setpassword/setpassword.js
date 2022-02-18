// pages/setpassword/setpassword.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    old_password:'',
    new_password:'',
    new_password_confirm:''
  },
  bindold_password:function(e){
    this.setData({old_password:e.detail.value});
  },
  bindnew_password:function(e){
    this.setData({new_password:e.detail.value});
  },
  bindnew_password_confirm:function(e){
    this.setData({new_password_confirm:e.detail.value});
  },
  home:function(e){
    wx.switchTab({
      url: '../demo03/demo03'
    })
  },

  submit:function(){
    if(this.data.old_password.length ==0)
    {
      wx.lin.showDialog({
        type:"alert",
        title:"提示",
        content:"请输入旧密码！"
      })
    }
    else if(this.data.old_password != app.globalData.password)
    {
      wx.lin.showDialog({
        type:"alert",
        title:"提示",
        content:"旧密码错误！"
      })
    }
    else if(this.data.new_password.length ==0)
    {
      wx.lin.showDialog({
        type:"alert",
        title:"提示",
        content:"请输入新密码！"
      })
    }
    else if(this.data.new_password.length <6)
    {
      wx.lin.showDialog({
        type:"alert",
        title:"提示",
        content:"新密码长度必须大于6位！"
      })
    }
    else if(this.data.new_password_confirm.length ==0)
    {
      wx.lin.showDialog({
        type:"alert",
        title:"提示",
        content:"请再次输入以确认新密码！"
      })
    }
    else if(this.data.new_password_confirm != this.data.new_password)
    {
      wx.lin.showDialog({
        type:"alert",
        title:"提示",
        content:"两次新密码输入不一致！"
      })
    }
    else
    {
      wx.request({
        url: 'http://127.0.0.1:8000/api/setpassword/',
        data: {userid:app.globalData.userid,password:this.data.new_password},
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function(res){
          wx.lin.showDialog({
            type:"alert",
            title:"提示",
            content:"修改密码成功！"
          })
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
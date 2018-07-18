// Page({
//    data:{
//       current: 'homepage'
//    },
//    handleChange({ detail }) {
//       this.setData({
//          current: detail.key
//       });
//    },
// })
function tabbarinit(currs) {
   return { "current": currs, "fun": "handleChange" }
}
function tabbarList(currs='homepage', target) {
   let that = target;
   let bindData = {};
   let otabbar = tabbarinit(currs);
   bindData['curr'] = otabbar
   console.log(bindData)
   that.setData({
      bindData
   });
}
module.exports = {
   tabbar: tabbarList
}
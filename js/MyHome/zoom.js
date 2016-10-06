/**
 * Created by s on 2016/9/26.
 */
require.config({
    paths:{
        Home:"Home",
        StackBlur_master:"../StackBlur-master/dist/stackblur",
        StackBlur_canvas:"../bower_components/stackblur-canvas/dist/stackblur",
        modify_bg:"Home_modifyBg",
        paging:"paging",
        pubu:"pubuByScoller"
    }
})

require(["modify_bg","paging"],function(modify_bg,paging){

})

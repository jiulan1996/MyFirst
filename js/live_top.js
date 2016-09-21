/**
 * Created by s on 2016/9/8.
 */
var Top=function(){
    var icon=document.getElementById('top');
    Top.prototype.active=function(){
        icon.onclick=function(){
            //debugger;
            var distance=document.body.scrollTop;
            var time=30;
            var jishu=0;
            var timer=setInterval(function(){
                jishu++;
                if(jishu>=time){
                    clearInterval(timer);
                }
                document.body.scrollTop=distance-distance/time*jishu;
            },17);
        }
    }
}
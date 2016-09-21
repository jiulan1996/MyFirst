/**
 * Created by s on 2016/9/8.
 */
window.onload=function(){
    var page_1=document.getElementById('page_1');
    var page_2=document.getElementById('page_2');
    var page_3=document.getElementById('page_3');
    var page_4=document.getElementById('page_4');
    var yuandian=document.getElementById('yuandian').getElementsByTagName('span');
    var clientHeight=document.documentElement.clientHeight;
    page_1.style.height=clientHeight+'px';
    page_2.style.height=clientHeight+'px';
    page_3.style.height=clientHeight+'px';
    page_4.style.height=clientHeight+'px';

    var agent = navigator.userAgent;
    var zhengze_1=/(Chrome)/;
    var zhengze_2=/(Firefox)/;
    if(zhengze_1.test(agent)) {
        document.onmousewheel = function(e) {
            //debugger;
            var wheelDelta = e.wheelDelta;
            active(wheelDelta,1);
        }
    }
    else if(zhengze_2.test(agent)){
        document.addEventListener('DOMMouseScroll', function (e) {
            console.log("滚了");
            //IE/Opera/Chrome
            var wheelDelta = e.wheelDelta;
            if (wheelDelta > 0) {
                console.log("向下滚动");
            }
            else if (wheelDelta < 0) {
                console.log("向上滚动");
            }
        }, false);
    }
    var oldIndex=0;
    for(var i=0;i<4;i++){
        yuandian[i].index=i;
        yuandian[i].onclick=function(){
            //debugger;
            var wheelDelta=0;
            wheelDelta=oldIndex-this.index;
            active(wheelDelta,Math.abs(wheelDelta));
            oldIndex=this.index;
        }
    }
    var top=new Top();
    top.active();
}
function active(wheelDelta,index){
    var start=document.body.scrollTop;
    var clientHeight=document.documentElement.clientHeight;
    var distance=clientHeight*index;
    var time=0;
    if (wheelDelta > 0) {
        var timer_1=setInterval(function(){
            time++;
            if(time>=30){
                clearInterval(timer_1);
            }
            document.body.scrollTop=start-distance/30*time;
            var index_2=parseInt(document.body.scrollTop/clientHeight);
            animation(index_2);
        },17);
    }
    else if(wheelDelta<0){
        var timer_2=setInterval(function(){
            time++;
            if(time>=30){
                clearInterval(timer_2);
            }
            document.body.scrollTop=start+distance/30*time;
            var index_2=parseInt(document.body.scrollTop/clientHeight);
            animation(index_2);
        },17);
    }
}
function animation(index){
    var scrollerTop=document.body.scrollTop;
    var yuandian=document.getElementById('yuandian').getElementsByTagName('span');
    for(var j=1;j<=4;j++){
        var page="page_"+j;
        var top=document.getElementById(page).offsetTop-scrollerTop;
        if(top<=0&&top>-667){
            for(var i=0;i<4;i++){
                yuandian[i].style.background="#d8d8d8";
                yuandian[i].style.width="4px";
                yuandian[i].style.height="4px";
                yuandian[i].style.marginLeft="-2px";
                yuandian[i].style.marginTop="-2px";
            }
            yuandian[index].style.background="#ff7d7c";
            yuandian[index].style.width="12px";
            yuandian[index].style.height="12px";
            yuandian[index].style.marginLeft="-6px";
            yuandian[index].style.marginTop="-6px";
        }
    }
    for(var i=2;i<=3;i++){
        var page="page_"+i;
        var top=document.getElementById(page).offsetTop-scrollerTop;
        if(top<=0&&top>-667){
            document.getElementById(page).getElementsByTagName('div')[2].style.opacity=1;
            document.getElementById(page).getElementsByTagName('div')[1].style.bottom=0;
            document.getElementById(page).getElementsByTagName('div')[1].style.opacity=1;
        }
        else{
            document.getElementById(page).getElementsByTagName('div')[2].style.opacity=0;
            document.getElementById(page).getElementsByTagName('div')[1].style.bottom="-50px";
            document.getElementById(page).getElementsByTagName('div')[1].style.opacity=0;
        }
    }
}


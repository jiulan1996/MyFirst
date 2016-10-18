/**
 * Created by s on 2016/10/17.
 */
window.onload=function(){
    var top=document.getElementById("top");
    var img=document.getElementById("img");
    var touch,start_x= 0;
    var marginleft= 0,distance=0;
    //var isleft=false;
    var isdown=false;

    /*top.addEventListener("mousedown",function(event){
        isdown=true;
        start_x=event.pageX;
    });
    top.addEventListener("mousemove",function(event){
        if(isdown){
            distance=event.pageX-start_x;
            img.style.marginLeft=marginleft+distance+"px";
        }
    });
    top.addEventListener("mouseup",function(event){
        isdown=false;
        console.log("抬起了");
        if(marginleft>=0&&distance>0){
            img.style.marginLeft=0;
        }
        else if(Math.abs(marginleft)>=top.offsetWidth*4&&distance<0){
            img.style.marginLeft="-"+top.offsetWidth*4+"px";
        }
        else if(Math.abs(distance)>(top.offsetWidth/3)){
            if(distance<0) img.style.marginLeft=(marginleft-top.offsetWidth)+"px";
            else img.style.marginLeft=(marginleft+top.offsetWidth)+"px";
            marginleft=parseInt(img.style.marginLeft);
        }
        else
            img.style.marginLeft=marginleft+"px";
    });*/
    top.addEventListener("touchstart",function(event){
        isdown=true;
        touch = event.targetTouches[0];
        start_x=touch.pageX;
    });
    top.addEventListener("touchmove",function(event){
        if(isdown){
            touch = event.targetTouches[0];
            distance=touch.pageX-start_x;
            img.style.marginLeft=marginleft+distance+"px";
        }
    });
    top.addEventListener("touchend",function(event){
        isdown=false;
        if(marginleft>=0&&distance>0){
            img.style.marginLeft=0;
        }
        else if(Math.abs(marginleft)>=top.offsetWidth*4&&distance<0){
            img.style.marginLeft="-"+top.offsetWidth*4+"px";
        }
        else if(Math.abs(distance)>(top.offsetWidth/3)){
            if(distance<0) img.style.marginLeft=(marginleft-top.offsetWidth)+"px";
            else img.style.marginLeft=(marginleft+top.offsetWidth)+"px";
            marginleft=parseInt(img.style.marginLeft);
        }
        else
            img.style.marginLeft=marginleft+"px";
    });
    /*lunbo.addEventListener("touchstart",function(event){
        touch = event.targetTouches[0];
        start_x=touch.pageX;
    });
    lunbo.addEventListener("touchmove",function(event){
        var distance=event.pageX-start_x;
        if(distance<0) isleft=true;
        else isleft=false;
        img.style.marginLeft=(marginleft+distance)+"px";
        left=parseInt(img.style.marginLeft);
    })
    lunbo.addEventListener("touchend",function(event){
        if(Math.abs(left)>lunbo.offsetWidth){
            if(isleft) img.style.marginLeft=(marginleft-lunbo.offsetWidth)+"px";
            else img.style.marginLeft=(marginleft+lunbo.offsetWidth)+"px";
            marginleft=parseInt(img.style.marginLeft);
        }
    })*/
}
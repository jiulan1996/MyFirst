/**
 * Created by s on 2016/9/5.
 */
var Lunbo=function(){
    var lunbo=document.getElementById("lunbo");
    var img=document.getElementById('img');
    var left=document.getElementById('left');
    var right=document.getElementById('l_right');
    var yuandian=document.getElementById('yuandian').getElementsByTagName('i');
    var title=document.getElementById('title');
    var author=document.getElementById('author');
    var clickFlag=true;
    var distance=710;
    var marleft=0;
    var index=0;
    var start= 0,end=0;
    var timer;
    var arr0=["如何在旅游中不拍出游客照？","难忘夏天滚烫的浪和傍晚落日的余晖","厚重的现实，挡不住梦想的光","贯穿四季的A字裙，遮肉又显高",
              "巴黎流光（动态GIF合集）"];
    var arr1=["","by 弋霓","","by cold","by 小墨与阿猴"];
    Lunbo.prototype.active=function(){
        right.onclick=function(){
            //debugger;
            if(clickFlag){
                index++;
                if(index>5){
                    index=0;
                }
                marleft=-distance*index;
                animate(marleft);
                light(index);
            }
            clickFlag=false;
        }
        left.onclick=function(){
            if(clickFlag){
                index--;
                if(index<0){
                    index=4;
                    img.style.left=-distance*(index+1)+'px';
                }
                marleft=-distance*index;
                animate(marleft);
                light(index);
            }
            clickFlag=false;
        }

        function animate(fangxiang){
            start=parseInt(img.style.left);
            end=fangxiang;
            var change=end-start;
            var time=30;
            var jishi=0;
            var t;
            t=setInterval(function(){
                jishi++;
                if(jishi>=time){
                    clearInterval(t);
                    clickFlag=true;
                }
                img.style.left=start+change/time*jishi+'px';
                if(index==5&&jishi>=time){
                    img.style.left=0+'px';
                    index=0;
                }
            },17)
        }

        function light(index){
            if(index==5){
                index=0;
            }
            for(var i=0;i<yuandian.length;i++){
                yuandian[i].style.backgroundPosition="-622px -244px";
            }
            yuandian[index].style.backgroundPosition="-642px -244px";
            title.innerText=arr0[index];
            author.innerText=arr1[index];
        }

        for(var i=0;i<yuandian.length;i++){
            yuandian[i].num=i;
            yuandian[i].onclick=function(){
                index=this.num;
                light(index);
                marleft=-distance*index;
                animate(marleft);
            }
        }
        timer=setInterval(right.onclick,3000);
        lunbo.onmouseover=function(){
            clearInterval(timer);
        }
        lunbo.onmouseout=function(){
            timer=setInterval(right.onclick,3000);
        }
    }
}

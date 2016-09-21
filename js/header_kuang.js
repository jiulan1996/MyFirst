/**
 * Created by s on 2016/9/5.
 */
var tanchu=function(){
    var tool=document.getElementById('tool');
    var jia=document.getElementById('jia');

    tanchu.prototype.list1=function(){
        var timer_1;
        jia.onmouseover=function(){
            tool.style.display="block";
        }
        jia.onmouseout=function(){
            timer_1=setTimeout(function(){
                tool.style.display="none";
            },500);
        }
        tool.onmouseover=function(){
            clearTimeout(timer_1);
        }
    }
}
var tanchu_2=function() {
    var my = document.getElementById('my');
    var myHome = document.getElementById('myHome');
    var timer;

    tanchu_2.prototype.list2=function(){
        my.addEventListener('mouseover',function(){
            myHome.style.display="block";
        },false);
        my.addEventListener('mouseout',function(){
            timer=setTimeout(function(){
                myHome.style.display="none";
            },500);
        },false);
        myHome.addEventListener('mouseover',function(){
            clearTimeout(timer);
        },false);
        myHome.addEventListener('mouseout',function(){
            timer=setTimeout(function(){
                myHome.style.display="none";
            },500);
        },false);
       /* my.onmouseover=function(){
            myHome.style.display="block";
        }
        my.onmouseout=function(){
            timer=setTimeout(function(){
                myHome.style.display="none";
            },500);
        }
        myHome.onmouseover=function(){
            clearTimeout(timer);
        }
        myHome.onmouseout=function(){
            timer=setTimeout(function(){
                myHome.style.display="none";
            },500);
        }*/
    }
}

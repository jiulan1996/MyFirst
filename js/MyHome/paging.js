/**
 * Created by s on 2016/9/27.
 */
define(function(){
    var a=document.getElementsByClassName('click');
    var bottom=document.getElementById('bottom');
    var width=90,begin=337;
    var start=337;
    var lastLi=1;
    for(var i=0;i<4;i++){
        a[i].index=i;
        a[i].onclick=function(event){
            //debugger;
            event.preventDefault();
            if(this.index==2){
                require(["pubu"],function(pubu){

                });
            }
            var time=20,jishu=0,num=this.index,distance=(width*num+337)-parseInt(start);
            var timer=setInterval(function(){
                jishu++;
                if(jishu>time){
                    start=parseInt(bottom.style.left);
                    clearInterval(timer);
                }
                else{
                    bottom.style.left=(start+distance/time*jishu)+'px';
                }
            },10);
            var li=this.index+1;
            document.getElementsByClassName("li_"+lastLi)[0].style.display="none";
            document.getElementsByClassName("li_"+li)[0].style.display="block";
            lastLi=li;
        }
    }
})
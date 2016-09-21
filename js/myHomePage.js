/**
 * Created by s on 2016/9/11.
 */
window.onload=function(){
    var sousuo=new search();
    sousuo.active();

    var jia=new tanchu();
    jia.list1();

    Bg_img();

    var frane=document.getElementById('iframe');
    var height=frane.contentWindow.document.documentElement.offsetHeight;
    frane.style.height=height+'px';

    var li=document.getElementsByClassName('click');
    var bottom=document.getElementById('bottom');
    var width=90,begin=337;
    var start=337;
    for(var i=0;i<4;i++){
        li[i].index=i;
        li[i].onclick=function(){
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
            frane.src="iframe_"+(this.index+1)+".html";
            frane.onload=function(){
                height=frane.contentDocument.body.scrollHeight;
                frane.style.height=height+'px';
            }
        }
    }
}
function scroller(father,child){
    var frame=document.getElementById('iframe');
    var dataInt={"data":[{"src":"pubu_1.jpeg"},{"src":"pubu_2.jpeg"},{"src":"pubu_3.jpeg"},{"src":"pubu_4.jpeg"},{"src":"pubu_5.jpeg"},]};
    window.onscroll=function() {
        var oParent = father;
        var aPin = child;

        if(checkscrollside()){
            for(var i=0;i<dataInt.data.length;i++){
                var oBox=frame.contentDocument.createElement('div');
                oBox.className='box';
                oParent.appendChild(oBox);
                var oIn_box=frame.contentDocument.createElement('div');
                oIn_box.className='in_box';
                oBox.appendChild(oIn_box);
                var oImg=frame.contentDocument.createElement('img');
                oImg.src="../img/pubu/"+dataInt.data[i].src;
                oIn_box.appendChild(oImg);
            }
            waterfall();
        }
        var height=frame.contentDocument.body.scrollHeight;
        frame.style.height=height+'px';
        function checkscrollside() {
            var lastPinH=frame.offsetHeight+frame.offsetTop-screen.availHeight+100;
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            console.log(lastPinH);
            console.log(scrollTop);
            return (lastPinH < scrollTop) ? true : false;//到达指定高度后 返回true，触发waterfall()函数
        }
        function waterfall(){
            //计算整个页面显示的列数（页面宽/box的宽）
            var oBoxW=aPin[0].offsetWidth;
            var cols=Math.floor(frame.offsetWidth/oBoxW);
            var hArr=[];//存放每一列高度的数组
            for(var i=0;i<aPin.length;i++){
                if(i<cols){
                    hArr.push(aPin[i].offsetHeight);
                }
                else{
                    var minH=Math.min.apply(null,hArr);
                    var index=getMinhIndex(hArr,minH);
                    aPin[i].style.position="absolute";
                    aPin[i].style.top=minH+"px";
                    aPin[i].style.left=oBoxW*index+"px";
                    hArr[index]+=aPin[i].offsetHeight;
                    var maxH=Math.max.apply(null,hArr);
                    oParent.style.height=maxH+'px';
                }
            }
        }
        function getMinhIndex(arr,val){
            for(var i in arr){
                if(arr[i]==val){
                    return i;
                }
            }
        }
    }
}



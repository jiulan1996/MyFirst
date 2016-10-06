/**
 * Created by s on 2016/9/6.
 */
define(function(){
    //debugger;
    waterfall('li_3','box');
    var dataInt={"data":[{"src":"pubu_1.jpeg"},{"src":"pubu_2.jpeg"},{"src":"pubu_3.jpeg"},{"src":"pubu_4.jpeg"},{"src":"pubu_5.jpeg"},]};
    var oParent=document.getElementById('li_3');
    window.onscroll=function(){
        if(checkscrollside()){
            for(var i=0;i<dataInt.data.length;i++){
                var oBox=document.createElement("div");
                oBox.className="box";
                oParent.appendChild(oBox);
                var oIn_box=document.createElement("div");
                oIn_box.className="in_box";
                oBox.appendChild(oIn_box);
                var oImg=document.createElement('img');
                oImg.src="../img/pubu/"+dataInt.data[i].src;
                oIn_box.appendChild(oImg);
            }
            waterfall('li_3','box');
        }
    }

    function waterfall(parent,box){
        //将main下的所有class为box的元素取出来
        var oParent=document.getElementById(parent);
        var oBoxs=getByClass(oParent,box);
        //计算整个页面显示的列数（页面宽/box的宽）
        var oBoxW=oBoxs[0].offsetWidth;
        var cols=5;
        var hArr=[];//存放每一列高度的数组
        for(var i=0;i<oBoxs.length;i++){
            if(i<cols){
                hArr.push(oBoxs[i].offsetHeight);
            }
            else{
                var minH=Math.min.apply(null,hArr);
                var index=getMinhIndex(hArr,minH);
                oBoxs[i].style.position="absolute";
                oBoxs[i].style.top=minH+"px";
                oBoxs[i].style.left=oBoxW*index+"px";
                hArr[index]+=oBoxs[i].offsetHeight;
                var maxH=Math.max.apply(null,hArr);
                oParent.style.height=maxH+'px';
            }
        }
    }
//根据class获取元素
    function getByClass(parent,clsName){
        var boxArr=new Array(),//用来存储获取到的所有class为box的元素
            oElements=parent.getElementsByTagName('*');
        for(var i=0;i<oElements.length;i++){
            if(oElements[i].className==clsName){
                boxArr.push(oElements[i]);
            }
        }
        return boxArr;
    }
    function getMinhIndex(arr,val){
        for(var i in arr){
            if(arr[i]==val){
                return i;
            }
        }
    }

    function checkscrollside() {
        var lastPinH=oParent.offsetHeight+oParent.offsetTop-screen.availHeight+100;
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        /*console.log(lastPinH);
        console.log(scrollTop);*/
        return (lastPinH < scrollTop) ? true : false;//到达指定高度后 返回true，触发waterfall()函数
    }
})

/**
 * Created by s on 2016/9/12.
 */
window.onload=function(){
    waterfall('pubu','box');
    //console.log(parent);
    var father=document.getElementById('pubu');
    var child=document.getElementsByClassName('box');
    parent.scroller(father,child);
}
function waterfall(parent,box){
    //将main下的所有class为box的元素取出来
    var oParent=document.getElementById(parent);
    //var oBoxs=getByClass(oParent,box);
    var oBoxs=oParent.getElementsByClassName('box');
    //计算整个页面显示的列数（页面宽/box的宽）
    var oBoxW=oBoxs[0].offsetWidth;
    var cols=Math.floor(document.documentElement.clientWidth/oBoxW);
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
function getMinhIndex(arr,val){
    for(var i in arr){
        if(arr[i]==val){
            return i;
        }
    }
}

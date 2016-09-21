/**
 * Created by s on 2016/9/16.
 */
function Bg_img(){
    //获取图片
    var right=document.getElementById('right');
    var bg_img=document.getElementById('bg_img');
    var tuodong=document.getElementById('tuodong');
    var old_bg=bg_img.src;

    //获取input——file
    var form=document.getElementById('form');
    var file=document.getElementById('file');
    var xiugai=document.getElementById('xiugai');

    //获取按钮
    var select=document.getElementById('select');
    var shezhi=document.getElementById('shezhi');
    var queding=document.getElementById('button_2');
    var quxiao=document.getElementById('button_1');

    //获取滑竿
    var range=document.getElementById('range');
    var scale=range.value;
    var scale_flag=false;
    //鼠标是否按下
    var mouse_flag=false;
    var startTop= 0,marginTop=0;
    var startLeft= 0,marginLeft=0;

    form.onclick=function(){
        //debugger;
        var timer=setInterval(function(){
            if(file.value!=""){
                select.style.display="none";
                shezhi.style.display="block";
                /*form.style.display="none";
                xiugai.style.display="none";*/
                var oFReader= new FileReader();
                oFReader.readAsDataURL(file.files[0]);
                oFReader.onload = function (oFREvent)
                {
                    bg_img.src = oFREvent.target.result;
                    range.value=1;
                    scale=1;
                    drawImgByScale(scale);
                    file.value="";
                };
                clearInterval(timer);
            }
        },10);
    }
    queding.onclick=function(){
        select.style.display="block";
        shezhi.style.display="none";
        /*form.style.display="block";
        xiugai.style.display="block";*/
        old_bg=bg_img.src;
    }
    quxiao.onclick=function(){
        select.style.display="block";
        shezhi.style.display="none";
        /*form.style.display="block";
        xiugai.style.display="block";*/
        bg_img.src=old_bg;
    }
    range.onmousedown=function(){
        scale_flag=true;
    }
    range.onmouseup=function(){
        scale_flag=false;
    }
    range.onmousemove=function(){
        scale=this.value;
        if(scale_flag){
            drawImgByScale(scale);
        }
    }
    function drawImgByScale(scale){
        bg_img.style.width=right.offsetWidth*scale+'px';

        var sx=(bg_img.offsetWidth-right.offsetWidth)/2;
        var sy=(bg_img.offsetHeight-bg_img.offsetHeight/scale)/2;

        bg_img.style.marginTop="-"+sy+"px";
        bg_img.style.marginLeft="-"+sx+"px";
        /*bg_img.style.marginTop=bg_img.offsetTop*scale;
        bg_img.style.marginLeft=bg_img.offsetLeft*scale;*/
    }

    tuodong.onmousedown=function(event){
        //debugger;
        mouse_flag=true;
        startTop=event.offsetY;
        startLeft=event.offsetX;
        marginTop=parseInt(bg_img.style.marginTop);
        marginLeft=parseInt(bg_img.style.marginLeft);
        console.log("鼠标按下");
        console.log("startTop:"+startTop+"........startLeft;"+startLeft);
    }
    tuodong.onmouseup=function(){
        mouse_flag=false;
    }
    tuodong.onmousemove=function(event){
        console.log(mouse_flag);
        if(mouse_flag){
            var endTop=event.offsetY;
            var endLeft=event.offsetX;
            drawImgByMouse(endTop,endLeft);
        }
    }
    function drawImgByMouse(endTop,endLeft){
        var top=marginTop+endTop-startTop;
        var left=marginLeft+endLeft-startLeft;
        bg_img.style.marginTop=marginTop+endTop-startTop+"px";
        bg_img.style.marginLeft=marginLeft+endLeft-startLeft+"px";
        console.log("top:"+top+"........left:"+left);

        console.log((tuodong.offsetHeight-bg_img.offsetHeight)+"............"+(tuodong.offsetWidth-bg_img.offsetWidth));
        if(top>0){
            bg_img.style.marginTop=0;
        }
        if(left>0){
            bg_img.style.marginLeft=0;
        }
        if(top<tuodong.offsetHeight-bg_img.offsetHeight){
            bg_img.style.marginTop=tuodong.offsetHeight-bg_img.offsetHeight+"px";
        }
        if(left<tuodong.offsetWidth-bg_img.offsetWidth){
            bg_img.style.marginLeft=tuodong.offsetWidth-bg_img.offsetWidth+"px";
        }
    }
}
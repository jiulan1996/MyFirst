/**
 * Created by s on 2016/9/26.
 */
define(["StackBlur_master","StackBlur_canvas"],function(StackBlur_master,StackBlur_canvas){
    /*获取canvas*/
    var canvas_2=document.getElementById("canvas_2");
    var canvas_1=document.getElementById("canvas_1");
    var context_2=canvas_2.getContext('2d');
    var context_1=canvas_1.getContext('2d');
    canvas_1.width=486;
    canvas_1.height=350;
    canvas_2.width=728;
    canvas_2.height=350;

     /*初始化图片*/
    var img=new Image();
    img.src="../img/lunbo_1.jpeg";
    var old_src=img.src;

    /*绘制图片有关的参数*/
    var img_width=canvas_2.width;
    var img_height=canvas_2.width/img.width*img.height;
    var old_img_width=img_width,old_img_height=img_height;
    var back_imgW=img_width,back_imgH=img_height;
    var sx= 0,sy=0;
    var old_sx=sx,old_sy=sy;

    /*绘制图片*/
    img.onload=function(){
       context_2.drawImage(img,0,0,img_width,img_height);
      // StackBlur_canvas.image(img,canvas_1,32);
        blur();
    }

     var fengmian=document.getElementById("bg");

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
    var old_scale=scale;
    var scale_flag=false;

    //鼠标是否按下
    var mouse_flag=false;
    var startTop= 0,endTop=0;
    var startLeft= 0,endLeft=0;
    var top= 0,left=0;
    var mx= 0,my=0;

    function init(){
        sx= 0;
        sy=0;
        top= 0;
        left=0;
        mx= 0;
        my=0;
    }

    function blur(){
        var imageData = context_2.getImageData( 120 , 0 , canvas_1.width , canvas_1.height );
        context_1.putImageData(imageData,0,0,0,0,canvas_1.width,canvas_1.height);
        StackBlur_canvas.canvasRGB(canvas_1,0,0,canvas_1.width,canvas_1.height,32);
    }
    var xianshi=function(){
        xiugai.style.display="block";
    }
    fengmian.addEventListener("mouseover",xianshi,false)
    fengmian.addEventListener("mouseout",function(){
        xiugai.style.display="none";
    },false)
    form.onclick=function(){
        //debugger;
        var timer=setInterval(function(){
            if(file.value!=""){
                select.style.display="none";
                shezhi.style.display="block";
                var oFReader= new FileReader();
                oFReader.readAsDataURL(file.files[0]);
                oFReader.onload = function (oFREvent)
                {
                    img.src = oFREvent.target.result;
                    img_width=canvas_2.width;
                    img_height=canvas_2.width/img.width*img.height;
                    old_img_width=img_width;
                    old_img_height=img_height;
                    range.value=1;
                    scale=range.value;
                    file.value="";
                };
                img.onload=function(){
                    drawImgByScale(scale);
                    canvas_2.style.cursor="move";
                    fengmian.removeEventListener("mouseover",xianshi,false);
                }
                clearInterval(timer);
            }
        },10);
    }
    function drawImgByScale(scale){
        context_2.clearRect(0,0,canvas_2.width,canvas_2.height);
        img_width =canvas_2.width*scale;
        img_height=canvas_2.width/img.width*img.height*scale;
        sx=mx+(img_width-old_img_width)/2;
        sy=my+(img_height-old_img_height)/2;
        if(sy<=0){
            sy=0;
        }
        if(sx<=0){
            sx=0;
        }
        if(sx>=(img_width-canvas_2.width)){
            sx=img_width-canvas_2.width;
        }
        if(sy>=(img_height-canvas_2.height)){
            sy=img_height-canvas_2.height;
        }
        context_2.drawImage(img,-sx,-sy,img_width,img_height);
        blur();
    }
    range.onmousedown=function(){
        scale_flag=true;
    }
    range.onmouseup=function(){
        scale_flag=false;
        old_img_width=img_width;
        old_img_height=img_height;
    }
    range.onmousemove=function(){
        scale=this.value;
        if(scale_flag){
            drawImgByScale(scale);
        }
    }
    queding.onclick=function(){
        select.style.display="block";
        shezhi.style.display="none";
        canvas_2.style.cursor="default";
        old_src=img.src;
        old_scale=scale;
        back_imgW=img_width;
        back_imgH=img_height;
        old_sx=sx;
        old_sy=sy;
        init();
        fengmian.addEventListener("mouseover",xianshi,false)
    }
    quxiao.onclick=function(){
        //debugger;
        select.style.display="block";
        shezhi.style.display="none";
        canvas_2.style.cursor="default";
        context_2.clearRect(0,0,canvas_2.width,canvas_2.height);
        img.src=old_src;
        img.onload=function(){
            context_2.drawImage(img,-old_sx,-old_sy,back_imgW,back_imgH);
            blur();
        }
        init();
        fengmian.addEventListener("mouseover",xianshi,false)
    }

    canvas_2.onmousedown=function(event){
        //debugger;
        console.log("按下鼠标")
        mouse_flag=true;
        startTop=event.offsetY;
        startLeft=event.offsetX;
    }
    canvas_2.onmouseup=function(){
        console.log("抬起鼠标")
        mouse_flag=false;
        sx=mx;
        sy=my;
    }
    canvas_2.onmousemove=function(event){
        if(mouse_flag){
            endTop=event.offsetY;
            endLeft=event.offsetX;
            drawImgByMouse();
        }
    }
    function drawImgByMouse(){
        //debugger;
        console.log("执行鼠标事件")
        top=endTop-startTop;
        left=endLeft-startLeft;
        mx=sx-left;
        my=sy-top;
        context_2.clearRect(0,0,canvas_2.width,canvas_2.height);
        if(mx<=0){
            mx=0;
        }
        if(my<=0){
            my=0;
        }
        if(mx>=(img_width-canvas_2.width)){
            mx=img_width-canvas_2.width;
        }
        if(my>=(img_height-canvas_2.height)){
            my=img_height-canvas_2.height;
        }
        context_2.drawImage(img,-mx,-my,img_width,img_height);
        blur();
    }
})
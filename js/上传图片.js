/**
 * Created by s on 2016/9/7.
 */
function upImg(event){
    event.preventDefault();
    var upImg=document.getElementById('upImg');
    var box=document.getElementById('box_first');
    var button=document.getElementById('button');
    var file=document.getElementById('file');
    var btm_box=document.getElementsByClassName('btm_box');
    var shangchuan=document.getElementById('shangchuan');
    var close=document.getElementById('close');
    var close_1=document.getElementById('close_1');
    var shangchuan_img=document.getElementById('shangchuan_img');
    //专辑名
    var zhuanji_name=document.getElementById('zhuanji_name');
    var sel_name=document.getElementsByClassName('sel_name')[0];
    var name=sel_name.getElementsByTagName('li');
    var input=document.getElementById('name');
    var input_name=document.getElementById('input_name').getElementsByTagName('input');
    //标签名
    var label=document.getElementById('label');
    var xianshi_text=document.getElementById('xianshi_text');
    var sel_label=document.getElementById('sel_label');
    var label_list=sel_label.getElementsByTagName('span');
    var close_3=document.getElementById('close_3');

    var p_height=window.innerHeight,p_width=document.body.offsetWidth;
    var wait;
    upImg.style.height=p_height+'px';
    upImg.style.width=p_width+'px';
    upImg.style.display="block";

    upImg.onclick=function(e){
        //debugger;
        var target= e.target;
        if(target.id=="zhuanji_name"){
            return;
        }
        else{
            sel_name.style.display="none";
        }
    }

    close.onclick=function(){
        clearInterval(wait);
        file.value="";
        box.style.display="block";
        btm_box[0].style.display="block";
        btm_box[1].style.display="none";
        upImg.style.display='none';
    }
    close_1.onclick=function(){
        shangchuan.style.display="none";
        close.onclick();
    }
    //选择专辑名
    zhuanji_name.onclick=function(){
        sel_name.style.display="block";
    }
    for(var i=0;i<name.length;i++){
        name[i].onclick=function(){
            input.value=this.innerText;
            sel_name.style.display="none";
            sel_name.getElementsByTagName('ul')[0].removeChild(this);
            var li=document.createElement('li');
            li.innerText=input.value;
            sel_name.getElementsByTagName('ul')[0].insertBefore(li,name[0]);
        }
    }
    input_name[1].onclick=function(){
        if(input_name[0].value!=""){
            input.value=input_name[0].value;
            sel_name.style.display="none";
        }
    }

    //选择标签名
    label.onclick=function(){
        this.style.opacity=0;
        xianshi_text.style.display="block";
        sel_label.style.display="block";
    }
    xianshi_text.addEventListener("click",function(){
        label.onclick();
    },false);
    for(var j=1;j<label_list.length;j++){
        label_list[j].onclick=function(){
            if(this.className!="on"){
                this.className="on";
                xianshi_text.value+="#"+this.innerText+" ";
            }
        }
    }
    close_3.onclick=function(){
        sel_label.style.display="none";
    }

    file.onmouseover=function(){
        button.style.background="#4C9ED9";
    }
    file.onmouseout=function(){
        button.style.background="#22b4f6";
    }
    var timer=setInterval(function(){
        if(file.value!=""){
            btm_box[0].style.display="none";
            btm_box[1].style.display="block";
            load();
            clearInterval(timer);
        }
    },17);

    function load(){
        var i_Tag=document.getElementById('ready').getElementsByTagName('i');
        var quxiao=document.getElementById('quxiao');
        var index= 0,time=0;
        wait=setInterval(function(){
            time++;
            if(time>=8){
                clearInterval(wait);
                box.style.display="none";
                shangchuan.style.display="block";
                if(window.FileReader){//chrome,firefox7+,opera,IE10,IE9，IE9也可以用滤镜来实现
                    oFReader= new FileReader();
                    oFReader.readAsDataURL(file.files[0]);
                    oFReader.onload = function (oFREvent)
                    {
                        shangchuan_img.src = oFREvent.target.result;
                    };
                }
                console.log("--------------"+shangchuan_img.src)
            }
            for(var i=0;i< i_Tag.length;i++){
                if(i_Tag[i].className=="red"){
                    i_Tag[i].className="blue";
                }
            }
            i_Tag[index].className="red";
            index++;
            if(index>2) index=0;

            quxiao.onclick=function(){
                btm_box[0].style.display="block";
                btm_box[1].style.display="none";
                clearInterval(wait);
            }
        },300);
    }
}

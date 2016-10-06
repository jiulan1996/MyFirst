/**
 * Created by s on 2016/10/5.
 */
window.onload=function(){
    //图片上传
    var img_shangchuan=document.getElementById("img_shangchuan");
    var file=document.getElementById("file");
    var img_box=document.getElementById("img")
    var img=img_box.getElementsByTagName("img")[0];

    //段落样式
    var buttons=document.getElementById("toolbar").getElementsByTagName("li");

    file.onclick=function(){
        //debugger;
        var oFReader;
        var timer=setInterval(function(){
            if(file.value!=""){
                clearInterval(timer);
                img_shangchuan.style.display="none";
                img_box.style.display="block";
                if(window.FileReader){
                    oFReader=new FileReader();
                    oFReader.readAsDataURL(file.files[0]);
                    oFReader.onload=function(oFREvent){
                        img.src=oFREvent.target.result;
                        img.style.marginTop="-"+parseInt((img.height-390)/2)+"px";
                    }
                }
            }
        })
    }

    buttons[0].onclick=function(){

    }
}
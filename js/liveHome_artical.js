/**
 * Created by s on 2016/10/5.
 */
window.onload=function(){
    //图片上传
    var img_shangchuan=document.getElementById("img_shangchuan");
    var file=document.getElementById("file");
    var img_box=document.getElementById("img")
    var img=img_box.getElementsByTagName("img")[0];
    /*添加图片*/
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


    /*提示气泡*/
    var tooltip=document.getElementsByClassName("tooltip");
    var buttons=document.getElementsByClassName("buttons");
    for(var i=0;i<tooltip.length;i++){
        //debugger;
        buttons[i].index=i;
        buttons[i].onmouseover=function(){
            tooltip[this.index].style.display="block";
            tooltip[this.index].style.marginLeft="-"+(tooltip[this.index].offsetWidth)/2+"px";
        }
        buttons[i].onmouseout=function(){
            tooltip[this.index].style.display="none";
        }
    }


    /*文本样式*/
    var artical=document.getElementById("editor");
    artical.onmouseup=function(){
        var selectedTextArea = document.activeElement;
        //var selection = selectedTextArea.value.substring(selectedTextArea.selectionStart, selectedTextArea.selectionEnd);
        console.log(selectedTextArea);
    }
}
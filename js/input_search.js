/**
 * Created by s on 2016/9/5.
 */
var search=function(){
    var input=document.getElementById('sousuo');
    var list=document.getElementById('list')
    var span=list.getElementsByTagName('span');
    search.prototype.active=function(){
        input.addEventListener("input",function(){
            if(input.value!=""){
                list.style.display="block";
                var value=input.value;
                for(var i=0;i<span.length;i++){
                    span[i].innerText=value;
                }
            }
            else{
                list.style.display="none";
            }
        },false);
    }
}
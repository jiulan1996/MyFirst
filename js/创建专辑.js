/**
 * Created by s on 2016/9/9.
 */
function Create(){
    var create=document.getElementById('create');
    var p_height=window.innerHeight,p_width=document.body.offsetWidth;
    create.style.height=p_height+'px';
    create.style.width=p_width+'px';
    create.style.display="block";

    var close=document.getElementById('close_2');
    close.onclick=function(){
        create.style.display='none';
    }
}
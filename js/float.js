/**
 * Created by s on 2016/9/7.
 */
function float(){
    var a_div=document.getElementById('float');

    window.onscroll=function(){
        var top=a_div.offsetTop-document.body.scrollTop;
        /*console.log(document.body.scrollTop);
        console.log(a_div.offsetHeight);*/
        if(document.body.scrollTop<a_div.offsetHeight){
            a_div.style.opacity=0;
        }
        else{
            a_div.style.opacity=1;
        }
    }
}
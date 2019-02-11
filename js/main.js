/*
var tab; // заголовок вкладки
var tabContent; // блок содержащий контент вкладки
window.onload=function() {
    tabContent=document.getElementsByClassName('tabContent');
    tab=document.getElementsByClassName('tab');
    hideTabsContent(1);
}
document.getElementById('tabs').onclick= function (event) {
    var target=event.target;
    if (target.className=='tab') {
       for (var i=0; i<tab.length; i++) {
           if (target == tab[i]) {
               showTabsContent(i);
               break;
           }
       }
    }
}
function hideTabsContent(a) {
    for (var i=a; i<tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add("hide");
        tab[i].classList.remove('tabborder');
    }
}
function showTabsContent(b){
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('tabborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
};
*/
//slider
var btnPrev = document.querySelector('#btnPrev');
var btnNext = document.querySelector('#btnNext');

var images = document.querySelectorAll('.imgSlider');
var minImgages = document.querySelectorAll('.imgSliderMin');
var j = 0;

btnPrev.onclick = function(){
    images[j].style.display = 'none';
    minImgages[j].style.display = 'none';
    //minImgages[j].style.opacity = '0.5';
    j--;
    if(j < 0){
        j = images.length -1;
    }
    images[j].style.display = 'block';
    minImgages[j].style.display = 'block';
    //minImgages[j].style.opacity = '1';
}
btnNext.onclick = function(){
    images[j].style.display = 'none';
    minImgages[j].style.display = 'none';
    //minImgages[j].style.opacity = '0.5';
    j++;
    if(j >= images.length){
        j = 0;
    }
    images[j].style.display = 'block';
    minImgages[j].style.display = 'block';
    //minImgages[j].style.opacity = '1';
}

//example button
var btn = document.querySelector('#button');
btn.onclick = function(){
    return alert("Send");
}

//canvas
function draw() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.moveTo(0,10);
        ctx.lineTo(100,10);
        ctx.lineTo(100,50);
        ctx.stroke();
      
        ctx.beginPath();
        ctx.arc(200,150,30,0,Math.PI*2,true); // Внешняя окружность
        ctx.stroke();
        
        ctx.beginPath();
        ctx.arc(200, 150, 20, 0, 2*Math.PI, false);
        ctx.fillStyle = 'white';
        ctx.fill();


        }
      }





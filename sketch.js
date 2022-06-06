$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 40){
         $("#topBtn").fadeIn();
        }else{
         $("#topBtn").fadeOut();
        }
    });
     $("#topBtn").click(function(){
         $('html,body').animate({scrollTop:0},600);
 
     });
 });
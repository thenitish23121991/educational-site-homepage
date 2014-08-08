
$(document).ready(function(){

var window_height = $(window).height();

function slide_to(){
}

$('.slide_middle_ball').on('click',function(){
var scroll_to = $('#slide2').offset().top;
console.log(window_height);
$('body').animate({scrollTop:window_height},'slow');
console.log($('body').scrollTop());
});


$(window).scroll(function(){
var scrolled = $(window).scrollTop();
if(scrolled > window_height-250){
$('.about_us_body').addClass('show_body');
}

var student_offset = $('.slide2_what_students_are_saying').offset();

if(scrolled > student_offset.top){
$('.student_body_photo img').addClass('show');
}


});


$('.header_login_login').bind('click',function(){
console.log('header login');
$('.ufaber_lightbox').addClass('open');

$('.ufaber_lightbox_signup_modal').css({
'display' : 'none'
});

$('.ufaber_lightbox_login_modal').css({
'display' : 'block'
});

$('.ufaber_lightbox_modal').css({
'top':'22%',
'height':'46%',
'left':'34%',
'width':'27%'
});

});


$('.ufaber_lightbox_modal').bind('click',function(e){
e.preventDefault();
e.stopPropagation();

});

$('.ufaber_lightbox').bind('click',function(){
$('.ufaber_lightbox').removeClass('open');
});

$('.header_login_signup').bind('click',function(){

$('.ufaber_lightbox').addClass('open');

$('.ufaber_lightbox_login_modal').css({
'display' : 'none'
});

$('.ufaber_lightbox_signup_modal').css({
'display' : 'block'
});

$('.ufaber_lightbox_modal').css({
'top' : '6%',
'height' : '73%',
'width' : '47%',
'left' : '22%'
});


});

$('.ufaber_login_signup_link').bind('click',function(){
$('.ufaber_lightbox_login_modal').css({
'display' : 'none'
});
$('.ufaber_lightbox_signup_modal').css({
'display' : 'block'
});


$('.ufaber_lightbox_modal').css({
'top':'6%',
'height':'73%',
'width':'47%',
'left':'22%'
});

});



$('.ufaber_lightbox_signup_login_link').bind('click',function(){
$('.ufaber_lightbox_signup_modal').css({
'display' : 'none'
});
$('.ufaber_lightbox_login_modal').css({
'display' : 'block'
});

$('.ufaber_lightbox_modal').css({
'top':'22%',
'height':'46%',
'left':'34%',
'width':'27%'
});

});


});



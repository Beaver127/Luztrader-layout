$('.categories-row__column').mouseenter(function(event) {
$(this).children(".categories-row__bg").addClass("dark");
});
$('.categories-row__column').mouseleave(function(event) {
$(this).children(".categories-row__bg").removeClass("dark");
});
function adaptdecor() {
	var s = $(".about__textbody").outerHeight();
	var a = $(".about__column_f").outerHeight();
	var t = Math.floor(a/75);
for(i = 0; i < t; i++) {
		var j = document.getElementsByClassName("decoration__body")[i];
		var c = j.cloneNode(true);
		$(j).after(c).css("marginTop",-7);
		
	}
	var k = document.getElementsByClassName("decoration__body");
	var l = k.length-1;

	if(l == t) {
	
	} else if(l != t || l > t) {
		if(l > t) {
			for(var m = 0; m < t-l;m++) {
			document.getElementsByClassName("decoration__body")[m].remove();
		}
		}
		for(var m = 0; m < l-t;m++) {
			document.getElementsByClassName("decoration__body")[m].remove();
		}
	}
}
function removeDecor() {
	var q1 = $(".about__textbody").outerHeight()+15;
	var q2 = $(".about__column_f").outerHeight();
	if((q2 - q1) > 75) {
		var fin = (q2 -q1) / 75;
		for(var v = 0; v < fin;v++) {
			document.getElementsByClassName("decoration__body")[v].remove();
		}
	}
}
adaptdecor();
setInterval(start, 1000);
function start() {
	removeDecor();
	let a2 = $(".about__column_f").outerHeight();
	let t2 = Math.floor(a2/75);
	let k2 = document.getElementsByClassName("decoration__body").length-1;
	if(k2 < t2) {
	adaptdecor();
	}
}
$(".slider-rate__link").click(function(event) {
var filter = $(this).data("filter");
if($(".slider-rate__mainnumber").hasClass("slider-rate__mainnumber_" + filter)) {
	var numbers = $(".slider-rate__mainnumber_" + filter + "");
	var number = numbers[1].innerText;

	var c = "";
	for(var i = 0; i < number.length;i++) {
	if(number[i] == "0" || number[i] == "1" || number[i] == "2" || number[i] == "3" || number[i] == "4" || number[i] == "5" || number[i] == "6" || 
		number[i] == "7" || number[i] == "8" || number[i] == "9") {
		c += number[i]; 
	}
}
var result = Number(c) + 100000;
var resultString = result.toLocaleString('ru')
numbers[1].innerText =resultString;
}
});
$(document).ready(function() {
	$('.footer-links__title').click(function(event) {
		$(this).toggleClass('footer-links__title_active').next().slideToggle(300);
	});
});
// SLIDER SLICK
$('.slider-buttons__l').click(function(event) {
$(".slider__body").slick("slickPrev");
});

$('.slider-buttons__r').click(function(event) {
 $(".slider__body").slick("slickNext");
});

//SLIDERS
if($('.slider__body').length>0){
	$('.slider__body').slick({
		infinite: true,
		dots: false,
		arrows: false,
		accessibility:true,
		slidesToShow:3,
		infinite: true,
		 slidesToScroll: 1,
		adaptiveHeight:true,
		swipe: true,
		draggable: true,
		touchThreshold: 10,
		waitForAnimate: false,
		responsive:[
			{
				breakpoint: 992,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
}
var isMobile = {Android: function() {return navigator.userAgent.match(/Android/i);},BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},Windows: function() {return navigator.userAgent.match(/IEMobile/i);},any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}};
if(isMobile.any()){}
if(location.hash){
		var hsh=location.hash.replace('#','');
	if($('.popup-'+hsh).length>0){
		popupOpen(hsh);
	}else if($('div.'+hsh).length>0){
		$('body,html').animate({scrollTop:$('div.'+hsh).offset().top,},500, function(){});
	}
}
$('.wrapper').addClass('loaded');
	var act="click";
if(isMobile.iOS()){
	var act="touchstart";
}

$('.header-menu__icon').click(function(event) {
	$(this).toggleClass('active');
	$('.header-menu').toggleClass('active');
	if($(this).hasClass('active')){
		$('body').data('scroll',$(window).scrollTop());
	}
		$('body').toggleClass('lock');
	if(!$(this).hasClass('active')){
		$('body,html').scrollTop(parseInt($('body').data('scroll')));
	}
});
$('.popup').click(function(e) {
	if (!$(e.target).is(".popup>.popup-table>.cell *") || $(e.target).is(".popup-close") || $(e.target).is(".popup__close")) {
		popupClose();
		return false;
	}
});
function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();
//Клик вне области
$(document).on('click touchstart',function(e) {
	if (!$(e.target).is(".select *")) {
		$('.select').removeClass('active');
	};
});

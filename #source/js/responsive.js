$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$(".content").click(function(event) {
		$('.arrow').removeClass('active');
		$('.menu__list').removeClass('open');
		
		
	});
	$('.arrow').click(function(event) {
		$('.arrow').toggleClass('active');
		$('.menu__list').toggleClass('open');
	});
	
});

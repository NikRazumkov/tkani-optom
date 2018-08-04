$(function() {

	 $('.slider').bxSlider({
		auto: true
	 });

/* Заказать обратный звонок*/
   $('.bcClicker').on('click', function(){
		$(this).hide();
		$('.bcForm').fadeToggle();

		$('.bcForm').addClass("flexy");
	});

	$('.bcForm .fa-times-circle').on('click', function(){
		$('.bcClicker').show();
		$('.bcForm').removeClass("flex");
		$('.bcForm').hide();
	});
/* END Заказать обратный звонок*/


});

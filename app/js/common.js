$(function() {

	 $('.slider').bxSlider({
		auto: true
	 });


/* Мобильное меню*/
   $('.fa-bars').on('click', function(){
		$(this).hide();
		$('.fa-times').show();
		$('.top-nav').slideToggle();
	});

  $('.fa-times').on('click', function(){
		$(this).hide();
		$('.fa-bars').show();
		$('.top-nav').slideToggle();
	});
/* END Мобильное меню*/

/* Мобильный поиск */
  if($(window).width() < 480) {
	  	$('.top-line .fa-search').on('click', function(){
	  		$(this).hide();
	  		$('.top-line .fa-times-circle').show();
		  	$('.search').slideToggle();
		  });

		  $('.top-line .fa-times-circle').on('click', function(){
		  	$(this).hide();
	  		$('.top-line .fa-search').show();
		  	$('.search').slideToggle();
		  });
  }
/* End Мобильный поиск */
   

/* Мобильное меню категорий*/
	if ($(window).width() < 480) {
		 $('.nav-category').on('click', function(){
			$('.fa-ellipsis-v').toggle();
			$('.fa-ellipsis-h').toggle();
			$('.side-menu').slideToggle();
		});
	} 


	$('.fa-caret-right').on('click', function(){
		$(this).next().toggle("slide");
	});

	 $('.fa-caret-left').on('click', function(){
		$(this).parent().toggle("slide");
	});


/* END Мобильное меню*/


/* Заказать обратный звонок*/
   $('.bcClicker').on('click', function(){
		$(this).hide();
		$('.bcForm').addClass("flexy");
	});

	$('.bcForm .fa-times-circle').on('click', function(){
		$('.bcClicker').show();
		$('.bcForm').removeClass("flex");
	});
    $('#sendcall').click(function(){
      if ($("#contactName").val() == '') { alert('Укажите Ваше имя'); return false; }
      if ($("#contactPhone").val() == '') { alert('Укажите Ваш номер телефона'); return false; }
      $.ajax({
          type: "POST",
          url: "/contacts.php?action=call",
          data: { name: $("#contactName").val(), 
              phone: $("#contactPhone").val(),
              action:"call"
                },
          success: function(response)
          {
              $msg = $.parseJSON(response);
              if ($msg.Error == false) {
                  $(".bcForm .form").hide();
                  $("#waitcall").show();

              } 
          }
      });
              return false;
  });
 

/* END Заказать обратный звонок*/

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

/* Открытие заявки в header */
	$('#btn-order').on('click', function () {
		$('#one-click').show();
	});

	$('#sendordermsg i').on('click', function () {
		$('#one-click').hide();
	});
	$('#sendorderform i').on('click', function () {
		$('#one-click').hide();
	});
/* Отправка заявки в контактной форме */
		$("#sendorder").on('click', function() {
			if ($("#sendmessageform input[name=email]").val() != $("#sendorderform input[name=email]").val().match(/^[a-zA-Z0-9_.%-]+@[a-zA-Z0-9_.%-]+\.[a-zA-Z]+[a-zA-Z]/)) { alert("Заполните корректно поле email"); return false; }
			if ($("#sendorderform textarea[name=body]").val().length < 5  ) { alert("Заполните поле сообщение."); return false; }
			$.ajax({
				type: "POST",
				url: "/contacts.php?action=order",
				data: {	email: $("#sendorderform input[name=email]").val(), 
								name: $("#sendorderform input[name=name]").val(), 
								phone: $("#sendorderform input[name=phone]").val(),
								body: $("#sendorderform textarea[name=body").val(),
				      },
				success: function(response)	{
				var	$msg = $.parseJSON(response);
				if ($msg.Error == false) {
						$("#sendordermsg").show();
						$("#sendorderform").hide();
					} 
				}
			});
			return false;
		});


});

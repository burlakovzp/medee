$(document).ready(function () {
	var feedback_choise;

	$("#navbar, .card-block").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 104;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $("#hamburger-12").click(function(){
	    $(this).toggleClass("is-active");
  	});

  	$('.navbar-nav .nav-link').click(function(){
  		$('.navbar-toggler').removeClass('is-active');
  		$('.navbar-collapse').removeClass('show');
  	});

    // hide #back-top first
	$("#back-top").hide();
 
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 1000) {
			$('#back-top').fadeIn();
		} else {
			$('#back-top').fadeOut();
		}
	});
	// scroll body to 0px on click
	$('#back-top a').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
		});
	});
	
	$('.image').click(function(event){
		var path = $(this).attr('src');
		 $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+path+'"></div>');
		 $('#magnify').show(500);
		 $('#overlay').show();

		 $('body').on('click', '#overlay', function(event) {
		    event.preventDefault();
		 
		    $('#overlay, #magnify').fadeOut('500', function() {
		      $('#magnify, #overlay').remove();
		    });
		  });
	});


	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav: true,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        768:{
	            items:3,
	            nav:false
	        },
	        992:{
	            items:4,
	            nav:true,
	            loop:false
	        },
	        1200:{
	            items:4,
	            nav:true,
	            loop:false
	        }
	    }
	});

	$("input[name*='email']").parent().hide();

	$('.feedback_choise').click (function (event) {
		event.preventDefault();

		$('.feedback_choise').css('background-color', 'rgb(221, 221, 221)');
		$(this).css('background-color', '#54C092');

		feedback_choise = $(this).attr('name');

		if (feedback_choise == 'viber' || feedback_choise == 'whatsapp') {
			$("input[name*='email']").parent().hide();
			$("input[name*='phone']").parent().show();
		} else if (feedback_choise == 'mail') {
			$("input[name*='email']").parent().show();
			$("input[name*='phone']").parent().hide();
		}

	});

	$('#feedback').submit (function (event) {
		event.preventDefault();
		$(".feedback_label").hide();

		if (!feedback_choise) {
			$(".feedback_label").show();
			return;
		}

		$.ajax ({
			url: "feedback.php",
			type: 'post',
			data: $('#feedback').serialize(),
			success: function () {
				$('#myModal').modal('show');
				gtag_report_conversion();
			}
		});
	}) ;

	function gtag_report_conversion() {
		//var callback = function () {
		//	if (typeof(url) != 'undefined') {
		//		window.location = url;
		//	}
		//};
		gtag('event', 'conversion', {
			'send_to': 'AW-830037714/VlM3CILJz38Q0r3liwM'
			//'event_callback': callback
		});
		console.log('Success Google');
		return false;
	}


});
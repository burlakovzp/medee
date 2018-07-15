$(document).ready(function () {
	var feedback_choise;
	var model;

	(function youTubes_makeDynamic() {
		var $ytIframes = $('iframe[src*="youtube.com"]');
		$ytIframes.each(function (i,e) {
			var $ytFrame = $(e);
			var ytKey; var tmp = $ytFrame.attr('src').split(/\//); tmp = tmp[tmp.length - 1]; tmp = tmp.split('?'); ytKey = tmp[0];
			var $ytLoader = $('<div class=»ytLoader»>');
			$ytLoader.append($("<img class='cover src='https://i.ytimg.com/vi/’+ytKey+’/hqdefault.jpg»>"));
				$ytLoader.append($("<img class='playBtn' src='assets/img/play.png'>"));
			$ytLoader.data('$ytFrame',$ytFrame);
			$ytFrame.replaceWith($ytLoader);
			$ytLoader.click(function () {
				var $ytFrame = $ytLoader.data('$ytFrame');
				$ytFrame.attr('src',$ytFrame.attr('src')+'?autoplay=1');
				$ytLoader.replaceWith($ytFrame);
			});
		});
	}());

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

		feedback_choise = $(this).attr('name');

		if (feedback_choise == 'viber') {
			$(this).css('background-color', '#811b81');
		} else if (feedback_choise == 'mail') {
			$(this).css('background-color', '#5bc0de');
		} else if (feedback_choise == 'whatsapp') {
			$(this).css('background-color', '#54C092');
		}

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
		$(".phone_label").hide();
		$(".email_label").hide();
		$(".model_label").hide();

		if (!feedback_choise) {
			$(".feedback_label").show();
			return;
		}

		if (feedback_choise == 'viber' || feedback_choise == 'whatsapp' ) {
			if ($("input[name*='phone']").val() == '') {
				$(".phone_label").show();
				return;
			}
		}

		if (feedback_choise == 'mail') {
			if ($("input[name*='email']").val() == '') {
				$(".email_label").show();
				return;
			}
		}

		if ($("input[name*='model']").val() == '') {
			$(".model_label").show();
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

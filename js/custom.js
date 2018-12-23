(function($) {
	'use strict';

/*===================================*
01. POPUP JS
*===================================*/
	$(window).on('load',function(){
		$('#exampleModal').modal('show');
	});

/*===================================*
02. DATA IMAGE SRC JS
*===================================*/
	$(".background_bg").each(function() {
		var attr = $(this).attr('data-img-src');
		if (typeof attr !== typeof undefined && attr !== false) {
			$(this).css('background', 'url(' + attr + ') center center/cover');
		}
	});

/*===================================*
03. LOGIN POPUP JS
*===================================*/
	$('.open-popup-link').magnificPopup({
	  type: 'inline',
	  midClick: true,
	  mainClass: 'mfp-fade'
	});

/*===================================*
04. MENU JS
*===================================*/
//Main navigation scroll spy for shadow
	if ($(window).width() >= 992) {
		$(window).on('scroll', function() {
			var scroll = $(window).scrollTop();
	
			if (scroll >= 160) {
				$('header').addClass('nav-fixed');
			} else {
				$('header').removeClass('nav-fixed');
			}
	
		});
	}
//Show Hide dropdown-menu Main navigation 
	$( document ).ready( function () {
		$( '.dropdown-menu a.dropdown-toggler' ).on( 'click', function ( e ) {
			var $el = $( this );
			var $parent = $( this ).offsetParent( ".dropdown-menu" );
			if ( !$( this ).next().hasClass( 'show' ) ) {
				$( this ).parents( '.dropdown-menu' ).first().find( '.show' ).removeClass( "show" );
			}
			var $subMenu = $( this ).next( ".dropdown-menu" );
			$subMenu.toggleClass( 'show' );
			
			$( this ).parent( "li" ).toggleClass( 'show' );
	
			$( this ).parents( 'li.nav-item.dropdown.show' ).on( 'hidden.bs.dropdown', function ( e ) {
				$( '.dropdown-menu .show' ).removeClass( "show" );
			} );
			
			return false;
		} );
	} );

/*===================================*
05. SEARCH JS
*===================================*/

	$(document).ready(function(){
	  $('#search').on("click",(function(e){
	  $(".header-form").toggleClass("search-open");
		e.stopPropagation()
	  }));
	})
	
/*===================================*
06. PRODUCT + SALLER SLIDER JS
*===================================*/
	$(document).ready(function() {
	  $('.products-slider, .saller-slider').owlCarousel({
		loop: false,
		margin: 30,
		nav: true,
		dots:false,
		thumbs: false,
		responsiveClass: true,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsive: {
		  0: {
			items: 2,
		  },
		  768: {
			items: 3,
		  },
		  1000: {
			items: 4,
		  }
		}
	  })
	});

/*===================================*
07. QUICKVIEW POPUP + ZOOM IMAGE + PRODUCT SLIDER JS
*===================================*/
	if ($(window).width() >= 768) {
	 var firstImgHeight = $("#product_img").height();
	 var divWidth = $(".quickview-product-detail").width();
	 $("#product_img").elevateZoom({
		 cursor: "crosshair",
		 easing : true,  
		 gallery:'pr_item_gallery',
		 zoomWindowOffetx: 30, 
		 zoomWindowWidth:divWidth,
		 zoomWindowHeight:firstImgHeight,
		 borderSize: 0,
		 galleryActiveClass: "active"
	 }); 
	}
	else {
		$("#product_img").elevateZoom({
			cursor: "crosshair",
			zoomType: "inner",
		 }); 
	}

	$('.quickview-popup-link').magnificPopup({
		  type:'inline',
		  alignTop: false,
		  overflowY: 'scroll',
		  midClick: true,
		  callbacks: {
		  open: function() {
				
			// Will fire when this exact popup is opened
			if ($(window).width() >= 768) {
			var firstImgHeight = $("#product_img").height();
			var divWidth = $(".quickview-product-detail").width();
			$("#product_img").elevateZoom({ 
				 cursor: "crosshair",
				 easing : true,  
				 gallery:'pr_item_gallery',
				 zoomWindowOffetx: 30, 
				 zoomWindowWidth:divWidth,
				 zoomWindowHeight:firstImgHeight,
				 borderSize: 0,
				 galleryActiveClass: "active"
			});
			}
			else {
				$("#product_img").elevateZoom({
				cursor: "crosshair",
				zoomType: "inner",
				gallery:'pr_item_gallery',
				galleryActiveClass: "active"
			 }); 
			}
		  }
		}
	});
	$('.image_popup').on('click', function () {
			$(this).find('.link_container').magnificPopup('open');
		});
		$('.link_container').each(function () {
		$(this).magnificPopup({
			delegate: '.image_popup',
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	});
	
	var owl = $('.product_gallery_item');
		owl.owlCarousel({
			loop: false,
			items: 4,
			dots: false,
			margin: 10,
			nav: true,
			navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
		});

/*===================================*
08. REVIEW SLIDER JS
*===================================*/
	$(document).ready(function() {
	  $('.review-slider').owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		dots:true,
		thumbs: false,
		responsiveClass: true,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsive: {
		  0: {
			items: 1,
		  },
		  576: {
			items: 1,
		  },
		  1000: {
			items: 1,
		  }
		}
	  })
	});

/*===================================*
09. PRICE FILTER JS
*===================================*/
 
	$( "#slider-range" ).slider({
		range: true,
		min: 10,
		max: 500,
		values: [ 10, 500 ],
		slide: function( event, ui ) {
		$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		}
	});
	$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) + " - $" + $( "#slider-range" ).slider( "values", 1 ) );  

/*===================================*
10. SELECT2 JS
*===================================*/
	$(".js-example-placeholder-single").select2({
		allowClear: true
	});

/*===================================*
11. COUNTER JS
*===================================*/
	$('.counter').countUp();

/*===================================*
12. ANIMATION JS
*===================================*/
	$(function() {
	
		function ckScrollInit(items, trigger) {
			items.each(function() {
				var ckElement = $(this),
					AnimationClass = ckElement.attr('data-animation'),
					AnimationDelay = ckElement.attr('data-animation-delay');
	
				ckElement.css({
					'-webkit-animation-delay': AnimationDelay,
					'-moz-animation-delay': AnimationDelay,
					'animation-delay': AnimationDelay
				});
	
				var ckTrigger = (trigger) ? trigger : ckElement;
	
				ckTrigger.waypoint(function() {
					ckElement.addClass("animated").css("visibility", "visible");
					ckElement.addClass('animated').addClass(AnimationClass);
				}, {
					triggerOnce: true,
					offset: '90%'
				});
			});
		}
	
		ckScrollInit($('.animation'));
		ckScrollInit($('.staggered-animation'), $('.staggered-animation-wrap'));
	
	});
	
/*===================================*
13. SCROLLUP JS
*===================================*/
	$(window).scroll(function() {
		if ($(this).scrollTop() > 160) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});
	
	$(".scrollup").on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 600);
		return false;
	});
	
/*===================================*
14. QUNTITY JS
*===================================*/	
	$('.plus').on("click", function(e) {
		if ($(this).prev().val()) {
		 $(this).prev().val(+$(this).prev().val() + 1);
		}
	});
	$('.minus').on("click", function(e) {
		if ($(this).next().val() > 1) {
			if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
		}
	});

	/*Cart Page Payment option*/	
	$('[name="payment_option"]').on('click', function(){
    
		var $value = $(this).attr('value');
	
		$('.payment-text').slideUp();
		$('[data-method="'+$value+'"]').slideDown();
		
	})
	
/*===================================*
15. CONTACT FORM JS
*===================================*/
	$("#submitButton").on("click", function(event) {
	    event.preventDefault();
	    var mydata = $("form").serialize();
	    $.ajax({
	        type: "POST",
	        dataType: "json",
	        url: "contact.php",
	        data: mydata,
	        success: function(data) {
	            if (data.type === "error") {
	                $("#alert-msg").removeClass("alert-msg-success");
	                $("#alert-msg").addClass("alert-msg-failure");
	            } else {
	                $("#alert-msg").addClass("alert-msg-success");
	                $("#alert-msg").removeClass("alert-msg-failure");
	                $("#first-name").val("Enter Name");
	                $("#email").val("Enter Email");
	                $("#subject").val("Enter Subject");
	                $("#description").val("Enter Message");

	            }
	            $("#alert-msg").html(data.msg);
	            $("#alert-msg").show();
	        },
	        error: function(xhr, textStatus) {
	            alert(textStatus);
	        }
	    });
	});
	
/*===================================*
16. GOOGLE MAP JS
*===================================*/
	google.maps.event.addDomListener(window, 'load', init);
        
	function init() {
		// Basic options for a simple Google Map
		// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		var mapOptions = {
			// How zoomed in you want the map to start at (always required)
			zoom: 12,

			// The latitude and longitude to center the map (always required)
			center: new google.maps.LatLng(51.4969759, -0.1210274), // New York

			// How you would like to style the map. 
			// This is where you would paste any style found on Snazzy Maps.
		   styles:[{"featureType":"all","elementType":"geometry.fill","stylers":[{"weight":"2.00"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"#9c9c9c"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#eeeeee"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#7b7b7b"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c8d7d4"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#070707"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]}]};

		// Get the HTML DOM element that will contain your map 
		// We are using a div with id="map" seen below in the <body>
		var mapElement = document.getElementById('map');

		// Create the Google Map using our element and options defined above
		var map = new google.maps.Map(mapElement, mapOptions);

		// Let's also add a marker while we're at it
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(51.4969759, -0.1210274),
			map: map,
			icon: "image/map-location.png",
			title: 'Snazzy!'
		});
	}	
			
/*===================================*
17. LIST GRID JS
*===================================*/   
	var listButton = $('.list-view');
	var gridButton = $('.grid-view');
	var wrapper = $('.list_grid_container');
	
	listButton.on('click',function(){
		
	  gridButton.removeClass('on');
	  listButton.addClass('on');
	  wrapper.removeClass('grid').addClass('list');
	  
	});
	
	gridButton.on('click',function(){
		
	  listButton.removeClass('on');
	  gridButton.addClass('on');
	  wrapper.removeClass('list').addClass('grid');
	  
	});
	
})(jQuery);

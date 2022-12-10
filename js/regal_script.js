(function($) {
	"use strict"; // Start of use strict
	
	/* Logo Lettering */
	var logo_rotate = $("header .reg_logo_animation").attr('data-rotate');
	if (logo_rotate!='') {
		$("header .reg_logo_animation").addClass('reg_logo_rotate_'+logo_rotate);
	}
	
	$("header .reg_logo_animation").lettering();
	$("header .reg_logo_animation span").each(function(){
	 	var min = 0;
	 	var max = 50;
	 	var randomNumber = Math.floor(Math.random()*(max-min+1)+min);
	 	$(this).css('transition-delay', '0.'+randomNumber+'s');
	 });


	/*CountTo*/
	$('.reg_timer').appear(function() {
        var e = $(this);
        e.countTo({
            from: 0,
            to: e.html(),
            speed: 1300,
            refreshInterval: 60
        })
    })
  
  $('.date_picker').datepicker();

  

    /*Gallery Lightbox*/
	$('.lightbox').magnificPopup({ 
	  type: 'image',
	  gallery:{
	    enabled:true
	  }
	});
	$('.video').magnificPopup({
	  type: 'iframe',
	  iframe: {
		  markup: '<div class="mfp-iframe-scaler">'+
		            '<div class="mfp-close"></div>'+
		            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
		          '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

		  patterns: {
		    youtube: {
		      index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

		      id: 'v=', // String that splits URL in a two parts, second part should be %id%
		      // Or null - full URL will be returned
		      // Or a function that should return %id%, for example:
		      // id: function(url) { return 'parsed id'; } 

		      src: 'http://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe. 
		    },
		    vimeo: {
		      index: 'vimeo.com/',
		      id: '/',
		      src: 'http://player.vimeo.com/video/%id%?autoplay=1'
		    },
		    gmaps: {
		      index: '//maps.google.',
		      src: '%id%&output=embed'
		    }

		    // you may add here more sources

		  },

		  srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
		}  
	  
	});

	/*Instafeed*/
  	var feed = new Instafeed({
        get: 'user',
        userId: 3239125850,
        accessToken: '3239125850.1677ed0.9918d505e9e64906b6db646380e9c61c',
        sortBy: 'most-liked',
        template: '<a href="{{link}}" target="_blank" class="reg_insta_item"><img class="img-responsive" src="{{image}}" /></a>',
        target: 'instagram-carousel',
        limit: 9,
        resolution: 'standard_resolution',
        after: function () {
            $('#instagram-carousel').owlCarousel({
                items: 3,
                navigation: true,
                pagination: true,
                autoPlay: 4000,
                loop:true,
                navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']
            });
        }

    });
  	feed.run();
	
	/*OWL Intro Slider*/
	$(".reg_slider_carousel").owlCarousel({
 		navigation : true, 
 		responsive: true, 
 		responsiveRefreshRate : 200, 
 		responsiveBaseElement:window, 
 		slideSpeed : 200, 
 		addClassActive:true,
		paginationSpeed : 200, 
		rewindSpeed : 200,
		items:1,
		autoPlay : true, 
		touchDrag:false,
		singleItem:true,
		transitionStyle: 'fade',
		navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']
	});

	/*OWL Single*/
	$(".reg_single_carousel").owlCarousel({
 		navigation : true, 
 		responsive: true, 
 		responsiveBaseElement:window, 
 		addClassActive:true,
		autoPlay : false, 
		touchDrag:false,
		singleItem:true,
		navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']
	});

    /*OWL Team*/
	$(".reg_team_slider").owlCarousel({
 		navigation : true, 
 		responsive: true, 
 		responsiveRefreshRate : 200, 
 		responsiveBaseElement:window, 
 		slideSpeed : 200, 
 		addClassActive:true,
		paginationSpeed : 200, 
		rewindSpeed : 200,
		items:3,
		itemsTablet:[1000,2],
		itemsMobile : [569,1],
		itemsDesktop:3,
		autoPlay : true, 
		touchDrag:false, 
		navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']
	});

	/* OWL Team Single*/
	$(".reg_team_slider_single").owlCarousel({
 		navigation : true, 
 		responsive: true, 
 		responsiveRefreshRate : 200, 
 		responsiveBaseElement:window, 
 		slideSpeed : 200, 
 		addClassActive:true,
		paginationSpeed : 200, 
		rewindSpeed : 200,
		items:1,
		autoPlay : true, 
		singleItem:true,
		autoHeight : true,
		touchDrag:false, 
		navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']
	});

	/*OWL Carousel in Shop Item*/
	if ($('.reg_shop_item_slider img').length>1) {
		$(".reg_shop_item_slider").owlCarousel({
	 		navigation : true, 
	 		responsive: true, 
	 		responsiveRefreshRate : 200, 
	 		responsiveBaseElement:window, 
	 		slideSpeed : 200, 
	 		addClassActive:true,
			paginationSpeed : 200, 
			rewindSpeed : 200, 
			singleItem:true, 
			autoPlay : false, 	
			touchDrag:false, 
			navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']
		});
	}

   
    // Twitter Feed
	   $('.tweets-feed').each(function(index) {
	       jQuery(this).attr('id', 'tweets-' + index);
	   }).each(function(index) {
	       
	       var TweetConfig = {
	           "id": jQuery('#tweets-' + index).attr('data-widget-id'),
	           "domId": '',
	           "maxTweets": 2,
	           "enableLinks": true,
	           "showUser": true,
	           "showTime": true,
	           "dateFunction": '',
	           "showRetweet": false,
	           "customCallback": handleTweets
	       };
	       function handleTweets(tweets) {
	           var x = tweets.length;
	           var n = 0;
	           var element = document.getElementById('tweets-' + index);
	           var html = '<ul class="slides">';
	           while (n < x) {
	               html += '<li>' + tweets[n] + '</li>';
	               n++;
	           }
	           html += '</ul>';
	           element.innerHTML = html;
	           return html;
	       }
	       twitterFetcher.fetch(TweetConfig);
	   });

	

	/* Section Background */
	$('.reg_image_bck').each(function(){
		var image = $(this).attr('data-image');
		var gradient = $(this).attr('data-gradient');
		var color = $(this).attr('data-color');
		var blend = $(this).attr('data-blend');
		var opacity = $(this).attr('data-opacity');
		var position = $(this).attr('data-position');
		var height = $(this).attr('data-height');
		if (image){
			$(this).css('background-image', 'url('+image+')');	
		}
		if (gradient){
			$(this).css('background-image', gradient);	
		}
		if (color){
			$(this).css('background-color', color);	
		}
		if (blend){
			$(this).css('background-blend-mode', blend);	
		}
		if (position){
			$(this).css('background-position', position);	
		}
		if (opacity){
			$(this).css('opacity', opacity);	
		}
		if (height){
			$(this).css('height', height);	
		}

	});



	/* Over */
	$('.reg_over, .reg_head_bck').each(function(){
		var color = $(this).attr('data-color');
		var image = $(this).attr('data-image');
		var opacity = $(this).attr('data-opacity');
		var blend = $(this).attr('data-blend');
		if (color){
			$(this).css('background-color', color);	
		}
		if (image){
			$(this).css('background-image', 'url('+image+')');	
		}
		if (opacity){
			$(this).css('opacity', opacity);	
		}
		if (blend){
			$(this).css('mix-blend-mode', blend);	
		}
	});

	/* Map */
	$('.reg_map_over').on("click", function(e){
		$(this).parents('.reg_section').toggleClass('active_map');
	});

	/* Mobile Menu */
	$('.reg_top_menu_mobile_link').on("click", function(e){
		$(this).next('.reg_top_menu_cont').fadeToggle();
		$(this).parents('.reg_light_nav').toggleClass('active');
	});



	/*Scroll Effect*/
	$('.reg_go').on("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 300);
		e.preventDefault();
	});

	/*Animation Block Delay*/	
	$('div[data-animation=animation_blocks]').each(function(){
		var i = 0;	
		$(this).find('.reg_icon_box, .skill-bar-content, .reg_anim_box').each(function(){
			$(this).css('transition-delay','0.'+i+'s');
			i++;
		})
	})

	$('.reg_menu_cont_txt').each(function(){
		var i = 300;	
		$(this).find('li a').each(function(){
			$(this).css('transition-delay',i+'ms');
			i=i+50;
		})
	})

	/*Increase-Decrease*/
    $('.increase-qty').on("click", function(e){
    	var qtya = $(this).parents('.add-to-cart').find('.qty').val();
    	var qtyb = qtya * 1 + 1;
    	$(this).parents('.add-to-cart').find('#qty').val(qtyb);
		e.preventDefault();
	});
	$('.decrease-qty').on("click", function(e){
    	var qtya = $(this).parents('.add-to-cart').find('#qty').val();
    	var qtyb = qtya * 1 - 1;
    	if (qtyb < 1) {
            qtyb = 1;
        }
    	$(this).parents('.add-to-cart').find('#qty').val(qtyb);
		e.preventDefault();
	});

	/* Shortcode Nav */
	var top_offset = $('header').height() - 1; 

	$('#nav-sidebar').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 700,
		scrollOffset: top_offset,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing',
	});
	
	

	/* Bootstrap */
	$('[data-toggle="tooltip"]').tooltip();
	$('[data-toggle="popover"]').popover();

	/* Anchor Scroll */
	$(window).scroll(function(){
		if ($(window).scrollTop() > 100) {
			$(".reg_logo").addClass('active');
			$('body').addClass('reg_first_step');
			
		}
		else {
			$('body').removeClass('reg_first_step');
			$(".reg_logo").removeClass('active');
		}
		if ($(window).scrollTop() > 500) {
			$('body').addClass('reg_second_step');
		}
		else {
			$('body').removeClass('reg_second_step');
		}
	});

	/* Fixed for Parallax */
	$(".reg_fixed").css("background-attachment","fixed");


	/* Submenu */
 	$('.reg_parent').on({
		mouseenter:function(){
			$(this).find('ul').stop().fadeIn(300);
		},mouseleave:function(){
			$(this).find('ul').stop().fadeOut(300);
		}
	});

 	/*Regal Menu*/
	$('.reg_menu').on({
		mouseenter:function(){
			$('.reg_menu_cont').addClass('reg_menu_hover');
		},mouseleave:function(){
			$('.reg_menu_cont').removeClass('reg_menu_hover');
		}
	});
	$('.reg_menu').on("click", function(e){
		$('.reg_menu_cont').addClass('reg_menu_opened');
		$(this).addClass('reg_menu_cl');
	});

	$('.reg_menu_cont_logo_close').on("click", function(e){
		$('.reg_menu_cont').removeClass('reg_menu_opened');
		$('.reg_menu').removeClass('reg_menu_cl');
	});

	/*Booking menu*/
	$('.reg_book').on("click", function(e){
		$('#reg_slider_review').addClass('reg_slider_review_opened');
		$(this).addClass('active');
	});
	$('.reg_book_close').on("click", function(e){
		$('#reg_slider_review').removeClass('reg_slider_review_opened');
		$('.reg_book').removeClass('active');
	});

	/* Top Menu Click to Section */
	$('.reg_menu_cont a[href*=\\#]:not([href=\\#])').on("click", function(){
		$('.reg_menu_cont a[href*=\\#]:not([href=\\#])').removeClass('active');
		$(this).addClass('active');
		
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	                 scrollTop: target.offset().top
	            }, 1000);
	            return false;
	        }
	    }
	});


 	/* Mobile Menu */
	$('.reg_mobile_menu_content .reg_parent').on("click", function(e){
		$(this).find('ul').slideToggle(300);
	});
	$('.reg_mobile_menu').on("click", function(e){
		$(this).toggleClass('active');
		$('.reg_mobile_menu_hor').toggleClass('active');
	});
	$('.reg_header_search span').on("click", function(e){
		$(this).next('.reg_header_search_cont').fadeToggle();
	});

	/* Block Autheight */
	if( !device.tablet() && !device.mobile() ) {
		$('.reg_auto_height').each(function(){
			setEqualHeight($(this).find('div[class^="col"]'));
		});
	}
	if( device.tablet() && device.landscape() ) {
		$('.reg_auto_height').each(function(){
			setEqualHeight($(this).find('div[class^="col"]'));
		});
	}

	$(window).resize(function() {
		if( !device.tablet() && !device.mobile() ) {
			$('.reg_auto_height').each(function(){
				setEqualHeight($(this).find('div[class^="col"]'));
			});
		}
		if( device.tablet() && device.landscape() ) {
			$('.reg_auto_height').each(function(){
				setEqualHeight($(this).find('div[class^="col"]'));
			});
		}
	});

	/*Boxes AutoHeight*/
	function setEqualHeight(columns)
	{
		var tallestcolumn = 0;
		columns.each(
			function()
			{
				$(this).css('height','auto');
				var currentHeight = $(this).height();
				if(currentHeight > tallestcolumn)
					{
					tallestcolumn = currentHeight;
					}
			}
		);
	columns.height(tallestcolumn);
	}

	
	
})(jQuery);


$(window).load(function(){

	// Page loader      
    $("body").imagesLoaded(function(){
        $(".reg_page_loader div").fadeOut();
    	$(".reg_page_loader").delay(200).fadeOut("slow");
    });


	/*SkroolR*/
	if( !device.tablet() && !device.mobile() ) {
		var s = skrollr.init({
			forceHeight: false,
		});
		$(window).stellar({
		 	horizontalScrolling: false,
			responsive: true,
	 	});
	}

 	/*Masonry*/
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
	    columnWidth: '.grid-item'
	  }	  
	});
	$grid.imagesLoaded().progress( function() {
	  $grid.isotope('layout');
	});
	$(window).resize(function(){
	  $grid.isotope('layout');
	});



	$('.masonry').masonry({
		itemSelector: '.masonry-item',
	});

	$('.filter-button-group').on( 'click', 'a', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});
	
	
});


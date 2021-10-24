;(function () {
	
	'use strict';



	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.insideOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.insideOf("iPhone") != -1) || 
			(navigator.platform.insideOf("iPod") != -1)
	    );
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};



	// Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#navbar').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500);
			
			return false;
		});
	
	};


	// Page Nav
	var clickMenu = function() {

		$('#navbar a:not([class="external"])').click(function(event){
			var section = $(this).data('nav-section'),
				navbar = $('#navbar');

				if ( $('[data-section="' + section + '"]').length ) {
			    	$('html, body').animate({
			        	scrollTop: $('[data-section="' + section + '"]').offset().top
			    	}, 500);
			   }

		    if ( navbar.is(':visible')) {
		    	navbar.removeClass('in');
		    	navbar.attr('aria-expanded', 'false');
		    	$('.js-fh5co-nav-toggle').removeClass('active');
		    }

		    event.preventDefault();
		    return false;
		});


	};

	// Reflect scrolling in navigation
	var navActive = function(section) {

		var $el = $('#navbar > ul');
		$el.find('li').removeClass('active');
		$el.each(function(){
			$(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
		});

	};

	var navigationSection = function() {

		var $section = $('section[data-section]');
		
		$section.waypoint(function(direction) {
		  	
		  	if (direction === 'down') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
	  		offset: '150px'
		});

		$section.waypoint(function(direction) {
		  	if (direction === 'up') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
		  	offset: function() { return -$(this.element).height() + 155; }
		});

	};


	


	// Window Scroll
	var windowScroll = function() {
		var lastScrollTop = 0;

		$(window).scroll(function(event){

		   	var header = $('#fh5co-header'),
				scrlTop = $(this).scrollTop();

			if ( scrlTop > 500 && scrlTop <= 2000 ) {
				header.addClass('navbar-fixed-top fh5co-animated slideInDown');
			} else if ( scrlTop <= 500) {
				if ( header.hasClass('navbar-fixed-top') ) {
					header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
					setTimeout(function(){
						header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
					}, 100 );
				}
			} 
			
		});
	};



	// Animations

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.addClass('fadeInUp animated');
							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};
	


	
	

	// Document on load.
	$(function(){

		// parallax();

		// burgerMenu();

		// clickMenu();

		// windowScroll();

		// navigationSection();

		// goToTop();


		// Animations
		contentWayPoint();
		

	});


}());



var themeToggler=document.querySelector(".checkmark");
var bodyElement= document.querySelector("body");
var checkboxTheme=document.getElementById("checkbox");
themeToggler.addEventListener("click",()=> {
    bodyElement.classList.toggle("dark-mode");
    var checkboxTheme=document.getElementById("checkbox");
    var checkedBool = checkboxTheme.checked;
    localStorage.setItem("theme",checkedBool);

});


var checkedStatus= localStorage.getItem("theme");
if(checkedStatus == "false"){
    checkboxTheme.checked=true;
    bodyElement.classList.toggle("dark-mode");
}

 function updateClock() {
	 
	var now = new Date(); // current date
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();
	var hours = now.getHours();
	var months= now.getMonth()+1;
	var day = now.getDate();
	if(minutes < 10) {
		minutes = "0" + minutes;
	}
	if(seconds < 10) {
		seconds = "0" + seconds;
	}
	if(hours < 10) {
		hours = "0" + hours;
	}
	if(months < 10) {
		months = "0" + months;
	}
	// if(day < 10) {
	// 	day = "0" + day;
	// }    
	
	
	  time = hours + ':' + minutes+':'+ seconds;
	  date = [ day, months,now.getFullYear()].join(' ');
	  document.getElementById('time').innerHTML = [date, time].join(' / ');
	  setTimeout(updateClock, 1000);
	}
	 updateClock();




	var link = document.querySelector(".pop-activator");
	var popupWindow = document.querySelector(".container-pop");
	var closePopupWindow = document.querySelector(".cross-container");
	var body = document.querySelector("body");
	
	
	closePopupWindow.addEventListener("click",() =>{
		popupWindow.classList.add("popup-transform"); 
		localStorage.setItem("show","true");
		shown = localStorage.getItem("show");
	 });
	 body.addEventListener("click",() =>{
		popupWindow.classList.add("popup-transform"); 
		localStorage.setItem("show","true");
		shown = localStorage.getItem("show");
	 });
	 
	 
	var shown = localStorage.getItem("show");
	

	if(shown !== "true"){
		setTimeout(showPopup,300);
		function showPopup(){
			popupWindow.classList.remove("popup-transform");
		}
	}
	
	 setTimeout(clearStorage,3000000);
	 function clearStorage(){
	 	localStorage.clear();
	 }
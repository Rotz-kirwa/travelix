/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Google Map
5. Init Search Form


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var menu = $('.menu');
	var menuActive = false;
	var header = $('.header');
	var map;
	var searchActive = false;

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initMenu();
	// Force map initialization after DOM is ready
	setTimeout(function() {
		initGoogleMap();
	}, 500);
	initSearchForm();

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if(window.innerWidth < 992)
		{
			if($(window).scrollTop() > 100)
			{
				header.addClass('scrolled');
			}
			else
			{
				header.removeClass('scrolled');
			}
		}
		else
		{
			if($(window).scrollTop() > 100)
			{
				header.addClass('scrolled');
			}
			else
			{
				header.removeClass('scrolled');
			}
		}
		if(window.innerWidth > 991 && menuActive)
		{
			closeMenu();
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		if($('.hamburger').length && $('.menu').length)
		{
			var hamb = $('.hamburger');
			var close = $('.menu_close_container');

			hamb.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
				else
				{
					closeMenu();
				}
			});

			close.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
				else
				{
					closeMenu();
				}
			});
		}
	}

	function openMenu()
	{
		menu.addClass('active');
		menuActive = true;
	}

	function closeMenu()
	{
		menu.removeClass('active');
		menuActive = false;
	}

	/* 

	4. Init Google Map

	*/

	function initGoogleMap()
	{
		// Spur Mall, Thika Road, Nairobi coordinates
		var spurMallLocation = new google.maps.LatLng(-1.2197, 36.9083);
    	var mapOptions = 
    	{
    		center: spurMallLocation,
	       	zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			draggable: true,
			scrollwheel: false,
			zoomControl: true,
			zoomControlOptions:
			{
				position: google.maps.ControlPosition.RIGHT_CENTER
			},
			mapTypeControl: false,
			scaleControl: false,
			streetViewControl: false,
			rotateControl: false,
			fullscreenControl: true,
			styles:[]
    	}

    	// Initialize map
    	map = new google.maps.Map(document.getElementById('map'), mapOptions);

    	// Add custom marker
    	var marker = new google.maps.Marker({
    		position: spurMallLocation,
    		map: map,
    		title: 'Wildwave Safaris - Spur Mall, Thika Road, Nairobi',
    		animation: google.maps.Animation.DROP
    	});

    	// Info window
    	var infoWindow = new google.maps.InfoWindow({
    		content: '<div style="padding:15px;font-family:Arial,sans-serif;"><h3 style="color:#fa9e1b;margin:0 0 8px 0;font-size:18px;">Wildwave Safaris</h3><p style="margin:0;color:#333;line-height:1.4;">Spur Mall, Thika Road<br>Nairobi, Kenya<br><strong style="color:#fa9e1b;">+254 713 241 666</strong><br><a href="mailto:wildwavesafaris@gmail.com" style="color:#fa9e1b;">wildwavesafaris@gmail.com</a></p></div>'
    	});

    	// Show info window on marker click
    	marker.addListener('click', function() {
    		infoWindow.open(map, marker);
    	});

    	// Auto-open info window after 2 seconds
    	setTimeout(function() {
    		infoWindow.open(map, marker);
    	}, 2000);
   
		// Re-center map after window resize
		google.maps.event.addDomListener(window, 'resize', function()
		{
			setTimeout(function()
			{
				google.maps.event.trigger(map, "resize");
				map.setCenter(spurMallLocation);
			}, 1400);
		});
	}

	/* 

	8. Init Search Form

	*/

	function initSearchForm()
	{
		if($('.search_form').length)
		{
			var searchForm = $('.search_form');
			var searchInput = $('.search_content_input');
			var searchButton = $('.content_search');

			searchButton.on('click', function(event)
			{
				event.stopPropagation();

				if(!searchActive)
				{
					searchForm.addClass('active');
					searchActive = true;

					$(document).one('click', function closeForm(e)
					{
						if($(e.target).hasClass('search_content_input'))
						{
							$(document).one('click', closeForm);
						}
						else
						{
							searchForm.removeClass('active');
							searchActive = false;
						}
					});
				}
				else
				{
					searchForm.removeClass('active');
					searchActive = false;
				}
			});	
		}
	}
});
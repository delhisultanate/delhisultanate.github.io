
     $('.melangeEventCarousal').slick({
			 autoplay: true,   
			 speed: 1000,
			 edgeFriction:1,
			 pauseOnDotsHover:false,
			 pauseOnHover:true,
			accessibility:true,
			 dots: true,
			 arrows: true,
			 slidesToShow: 1,
			 slidesToScroll: 1,
			 centerMode: false,
			 /*centerPadding: '180px',*/
			 prevArrow:'<div class="leftCircle"><span class="glyphicon glyphicon-chevron-left leftCircle_inner"></span></div>',
		nextArrow:'<div class="rightCircle"><span class="glyphicon glyphicon-chevron-right rightCircle_inner"></span></div>',		 
			  
	});     
	
$('.modal').on('shown.bs.modal', function (e) {
	$('.melangeGalleryCarousal').slick({
			 autoplay: true,   
			 speed: 1000,
			 edgeFriction:1,
			 pauseOnDotsHover:false,
			 pauseOnHover:true,
			accessibility:true,
			 dots: true,
			 arrows: true,
			 slidesToShow: 1,
			 slidesToScroll: 1,
			 centerMode: true,
			 centerPadding: '100px',
			 prevArrow:'<div class="leftCircle"><span class="glyphicon glyphicon-chevron-left leftCircle_inner"></span></div>',
		nextArrow:'<div class="rightCircle"><span class="glyphicon glyphicon-chevron-right rightCircle_inner"></span></div>',		 
			  
	});    
});	
	
   	

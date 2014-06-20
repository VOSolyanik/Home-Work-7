$(function() {	
	function bannerSlide() {
		var slides = $('.banner .wrapper'),
			next = $('.next'),
			previous = $('.previous'),
			counter = 0;

		slides.eq(0).css({'display':'block'});

		next.click(function(){		
			slides.eq(counter%slides.length).fadeOut(200, function(){
				slides.eq((counter+1)%slides.length).fadeIn(200);
				counter++;
			});				
		});

		previous.click(function(){
			slides.eq(counter%slides.length).fadeOut(200, function() {
				slides.eq((counter-1)%slides.length).fadeIn(200);
				counter--;
			});		
		});
	};
	function testimonialSlide() {
		var slides = $('.testimonial .inner'),
			slideSwitcher = document.createElement('ul'),
			switchers,
			prevSlideNum = 0;

		slideSwitcher.className = 'slide-switcher';

		for (var i = 0; i < slides.length; i++){
			slideSwitcher.appendChild(document.createElement('li'));
		};

		document.querySelector('.testimonial').appendChild(slideSwitcher);

		switchers = $('.slide-switcher li');

		slides.eq(0).css({'display':'block'});
		switchers.eq(0).addClass('curent');

		switchers.click(function(){
			if (switchers.index($(this))!==switchers.index($('.slide-switcher li.curent'))){
				switchers.removeClass('curent');
				$(this).addClass('curent');

				var tmp = $(this);

				slides.eq(prevSlideNum).fadeOut(200, function(){
					slides.eq(switchers.index(tmp)).fadeIn(200);
					prevSlideNum = switchers.index(tmp);
				});
			};
		});
	};
	bannerSlide();
	testimonialSlide();
});
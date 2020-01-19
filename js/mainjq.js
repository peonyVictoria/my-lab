$(function() {
	$('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		customPaging: function(slider, i) {
			return '<div class="pager__item" id=' + i + "></div>";
		},
		arrows: false
	});

	$('.reviews-list').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		responsive: [
			{
				breakpoint: 1140,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
			breakpoint: 720,
			settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});

	$('.btn__menu').on('click', function() {
		$('.nav-list').slideToggle();
	});
});
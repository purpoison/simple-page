$(document).ready(function() {

		$('.solar-system-slide').on('init', function(event, slick){
			var $count = slick.slideCount;
			// console.log($count)
			$('.new-select').append("<select class='select-test'>")
			for(i=0; i<$count; i++){
					var $slide_data = $(slick.$slides[i]).data('slide-name');	
					$('.select-test').append("<option value='"+i+"'>"+ $slide_data +"</option>")
			};
			$('.select-test').niceSelect();

	})
		var solar_slider = $('.solar-system-slide').slick({
       			arrows: false,

		});
		$('.select-test').change(function(e){
			var select_item = $(this).val();
			// console.log(select_item)
			solar_slider.slick('slickGoTo', select_item);
		})
		// $('.solar-system-slide').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		// 	$('.select-test option[value='+ nextSlide +']').prop('selected', true);
			// $('.select-test').niceSelect('update');
		// })
});

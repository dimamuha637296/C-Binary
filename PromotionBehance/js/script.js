$(document).ready(function () { 
	$(".js-range-slider.views").ionRangeSlider({
        step: 1000,
        from: 1000,
        skin: "round",
        hide_min_max: true,
        onStart: function (data) {
        	data.slider.closest(".modal-rate").find('.views-span').text(data.from);
        }
    });
    $(".js-range-slider.likes").ionRangeSlider({
    	step: 100,
        from: 200,
        skin: "round",
        hide_min_max: true,
        onStart: function (data) {
        	data.slider.closest(".modal-rate").find('.likes-span').text(data.from);
        	data.slider.closest(".modal-rate-bottom").find('.cost').html(
        		(parseInt(data.slider.closest(".modal-rate").find('.likes-span').text(),10) * 3) + 
        		'<span class="rouble"></span>')
        }
    });	


	$(".js-range-slider").on("change", function () {
        var from = $(this).prop("value"),
        	views = $(this).closest(".modal-rate").find('.views-span'),
        	likes = $(this).closest(".modal-rate").find('.likes-span'),
        	cost = $(this).closest(".modal-rate-bottom").find('.cost');

        if($(this).is($('.likes'))) {
        	likes.text(from);
        	$(".views").data("ionRangeSlider").update({
        		from: from * 5
        	});
        } else 
        if($(this).is($('.views'))) {
        	views.text(from);
        }
        cost.html((parseInt(likes.text(),10) * 3) + '<span class="rouble"></span>');
    });

	if ($('.rateType1').hasClass('discount')) {
		let i = $('.rateType1 .discountItem').text();
		$('.modal-rate[rateType="1"]').addClass('discount');
		$('.modal-rate[rateType="1"]').append('<span class="discountItem"></span>');
		$('.modal-rate[rateType="1"] .discountItem').text(i);
	}
	if ($('.rateType2').hasClass('discount')) {
		let i = $('.rateType2 .discountItem').text();
		$('.modal-rate[rateType="2"]').addClass('discount');
		$('.modal-rate[rateType="2"]').append('<span class="discountItem"></span>');
		$('.modal-rate[rateType="2"] .discountItem').text(i);
	}
	if ($('.rateType3').hasClass('discount')) {
		let i = $('.rateType3 .discountItem').text();
		$('.modal-rate[rateType="3"]').addClass('discount');
		$('.modal-rate[rateType="3"]').append('<span class="discountItem"></span>');
		$('.modal-rate[rateType="3"] .discountItem').text(i);
	}
	if ($('.rateType4').hasClass('discount')) {
		let i = $('.rateType4 .discountItem').text();
		$('.modal-rate[rateType="4"]').addClass('discount');
		$('.modal-rate[rateType="4"]').append('<span class="discountItem"></span>');
		$('.modal-rate[rateType="4"] .discountItem').text(i);
	}
	if ($('.rateType5').hasClass('discount')) {
		let i = $('.rateType5 .discountItem').text();
		$('.modal-rate[rateType="5"]').addClass('discount');
		$('.modal-rate[rateType="5"]').append('<span class="discountItem"></span>');
		$('.modal-rate[rateType="5"] .discountItem').text(i);
	}



	$('.rate .rateBottom button').click(function(){
		var buf = $(this).parent().parent().attr('rateType');
		var str = '.modal-rate[rateType="' + buf + '"]';
		$(str).addClass('open');
		$('body').addClass('darkness');
	});

	$('.topMenu button').click(function() {
		if ($(this).attr('menu-modal-type')==1) {
			$('.modal-menu[menu-modal-type="1"]').addClass('open');
		} else 
		if ($(this).attr('menu-modal-type')==2) {
			$('.modal-menu[menu-modal-type="2"]').addClass('open');
		} else
		if ($(this).attr('menu-modal-type')==3) {
			$('.modal-menu[menu-modal-type="3"]').addClass('open');
		}
		$('body').addClass('darkness');
	});
	$('.topBtn').click(function() {
		$('.modal-mail').addClass('open')
		$('body').addClass('darkness');
	});

	$('.modal-close').click(function(){
		$('body').removeClass('darkness');
		$('.modal').removeClass('open');
	})

	$('.overlay').click(function(){
		$('body').removeClass('darkness');
		$('.modal').removeClass('open');
	});
});
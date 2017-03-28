$(function(){
		$("#nav_btn").on({
			'touchstart':function(){
				$(".nav").css({'transform':'translateX(0)'});
			}
		})
		$(".right").on({
			'touchstart':function(){
				$("#nav").css({'transform':'translateX(-16rem)'});
			}
		})
		$("#nav ul li").on({
			'touchstart':function(){
				var i=$(this).index();
				$(this).addClass('active').siblings().removeClass('active');
			}
		})
})
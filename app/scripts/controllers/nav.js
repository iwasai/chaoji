$(function(){
		$("#nav_btn").on({
			'touchstart':function(){
				$(".nav").css({'transform':'translateX(0)'});
			}
		})
		$(".lby_right").on({
			'touchend':function(){
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
window.onscroll=function(){
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	scrollTop=$(document).scrollTop();
	//console.log(scrollTop);
	if(scrollTop<=240){
		$(".lby_top").css("display","none");
	}else{
		$(".lby_top").css("display","block");
	}
}

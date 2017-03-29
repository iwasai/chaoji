$(function() {
	var i = true;
	var block = document.getElementById("nav_btn");
	var oW, oH;
	block.addEventListener("touchstart", function(e) {
		i = true;
		var touches = e.touches[0];
		oW = touches.clientX - block.offsetLeft;
		oH = touches.clientY - block.offsetTop;
		document.addEventListener("touchmove", defaultEvent, false);
	}, false)
	block.addEventListener("touchmove", function(e) {
		i = false;
		var touches = e.touches[0];
		var oLeft = touches.clientX - oW;
		var oTop = touches.clientY - oH;
		if(oLeft < 0) {
			oLeft = 0;
		} else if(oLeft > document.documentElement.clientWidth - block.offsetWidth) {
			oLeft = (document.documentElement.clientWidth - block.offsetWidth);
		}
		block.style.left = oLeft + "px";
		block.style.top = oTop + "px"; 
	}, false);
	block.addEventListener("touchend", function() {
		if(i){
			$(".nav").css({ 'transform': 'translateX(0)' });
		}
		document.removeEventListener("touchmove", defaultEvent, false);
		return i = true;
	}, false);

	function defaultEvent(e) {
		e.preventDefault();
	}
	$(".lby_right").on({
		'touchend': function() {
			$("#nav").css({ 'transform': 'translateX(-16rem)' });
		}
	})
	$("#nav ul li").on({
		'touchstart': function() {
			var i = $(this).index();
			$(this).addClass('active').siblings().removeClass('active');
		}
	})
})
window.onscroll = function() {
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	scrollTop = $(document).scrollTop();
	//console.log(scrollTop);
	if(scrollTop <= 240) {
		$(".lby_top").css("display", "none");
	} else {
		$(".lby_top").css("display", "block");
	}
}
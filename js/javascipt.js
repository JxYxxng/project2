$(function(){
	// 스크롤 이벤트
	var a;
	var t=0;
	var firstFlag=false;

	$(".keyvisual").addClass("active");
	setTimeout(function(){
		$("html").animate({scrollTop : 0}, 800, function(){
			firstFlag=true;
			$(window).trigger("scroll");
		});
	}, 10);

	$(window).scroll(function(){
		if(firstFlag == false){
			return;
		}
		t=$(window).scrollTop();

		if(t < $("#vr").offset().top - 200){
			a=0;
		}
		else if(t < $("#portfolio").offset().top - 250){
			a=1;
		}
		else if(t < $("#about").offset().top - 250){
			a=2;
		}
		else if(t < $("#career").offset().top - 250){
			a=3;
		}
		else if(t < $("#awards").offset().top - 250){
			a=4;
		}
		else if(t < $("#contact").offset().top - 250){
			a=5;
			if(t == $(document).height()-$(window).height()){
				a=6;
			}
		}
		else{
			a=6;
		}
		$("#gnb > ul > li").removeClass("active");
		$("#gnb > ul > li").eq(a-1).addClass("active");
		$("#mobile > ul > li").removeClass("active");
		$("#mobile > ul > li").eq(a).addClass("active");

		// 메뉴
		if(a == 0){
			$("#gnb > ul > li").removeClass("active");
		}
		else{
			$("section ").eq(a-1).addClass("active");
			$("section").eq(a-1).find(".content").addClass("active");
		}

		// pc 메뉴 fixed
		if(a>0){
			$("#header").addClass("fixed");
		}
		else {
			$("#header").removeClass("fixed");
		}
	});
	$(window).trigger("scroll");


	// award_text 높이
	var w;
	var awards_h;
	var timer;

	$(window).resize(function(){
		clearTimeout(timer);

	 	timer=setTimeout(function(){
		w=$(window).width();
		awards_h=$(".awards_banner").height();
		$(".awards_text").css({"height":awards_h});

		if(w>720){
		 	$(".dim").trigger("click")
		}
		}, 10);
	});
	$(window).trigger("resize");

	//awards text 나타나기
	$(".awards_banner li").hover(
		function(){
			num=$(this).index();
			$(".awards_text li").eq(0).removeClass("active");
			$(".awards_text li").eq(num-1).addClass("active");},
		function(){
			$(".awards_text li").removeClass("active");
			$(".awards_text li").eq(0).addClass("active");
		}
	);
	$(".about_inner .img").hover(
		function(){
			$(this).next().addClass("active");
		},
		function(){
			$(this).next().removeClass("active");
		}
	);

	// 모바일 gnb
	$(".tab").click(function(e){
		e.preventDefault();
		showMenu();
	});
	$(".dim").click(function(){
		hideMenu();
	});
	function hideMenu(){
		$("#mobile").removeClass("active");
		$(".dim").removeClass("active");
		$(".tab").removeClass("active");
		$("body").removeClass("active");
		$("#mobile > ul > li").removeClass("active");
	}
	function showMenu(){
		if($("#mobile").hasClass("active")){
			$("#mobile").removeClass("active");
			$(".dim").removeClass("active");
			$(".tab").removeClass("active");
			$("body").removeClass("active");
		}
		else{
			$("#mobile").addClass("active");
			$(".dim").addClass("active");
			$(".tab").addClass("active");
			$("body").addClass("active");
		}
	}

	// 메뉴 이동
	var move=0;

	$("#gnb > ul > li").click(function(e){
		e.preventDefault();
		a=$(this).index();
		move=$("section").eq(a).offset().top;

		$("html").animate({"scrollTop":move},800);
	});

	$("#mobile > ul > li").click(function(e){
		e.preventDefault();
		a=$(this).index();

		if(a == 0){
			move=0;
		}
		else{
			move=$("section").eq(a-1).offset().top;
		}
		// console.log(a);
		// console.log(move);
		$("#mobile > ul > li").removeClass("active");
		$(this).addClass("active");
		$("html").animate({"scrollTop":move}, 800);
		hideMenu();
	});

	// top 버튼
	$(".top").click(function(e){
		e.preventDefault();
		$("html").animate({"scrollTop":0}, 800);
	});
});

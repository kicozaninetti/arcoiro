	jQuery(document).ready(function($){
		var $size = $(window).height();
		var $divSize = $size/6;
		var msg = "ENTRAR NO SITE";
		$("<div></div>")
			.addClass("arcoiro")
			.addClass("AIhaveToClose")
			.css("position", "absolute")
			.css("top", "0")
			.css("left", "0")
			.css("width", "100%")
			.css("text-align", "center")
			.appendTo("body");
		$("<div></div>")
			.addClass("AIcolorRed")
			.css("background-color", "#DB3937")
			.css("opacity", "0.6")
			.height($divSize)
			.appendTo("div.arcoiro");
		$("<div></div>")
			.addClass("AIcolorOrange")
			.css("background-color", "#F66419")
			.css("opacity", "0.6")
			.height($divSize)
			.appendTo("div.arcoiro");
		$("<div></div>")
			.addClass("AIcolorYellow")
			.css("background-color", "#FECC2F")
			.css("opacity", "0.6")
			.height($divSize)
			.appendTo("div.arcoiro");
		$("<div></div>")
			.addClass("AIcolorGreen")
			.css("background-color", "#AFC323")
			.css("opacity", "0.6")
			.height($divSize)
			.appendTo("div.arcoiro");
		$("<div></div>")
			.addClass("AIcolorBlue")
			.css("background-color", "#40A5D1")
			.css("opacity", "0.6")
			.height($divSize)
			.appendTo("div.arcoiro");
		$("<div></div>")
			.addClass("AIcolorPurple")
			.css("background-color", "#A364D9")
			.css("opacity", "0.6")
			.height($divSize)
			.appendTo("div.arcoiro");
		$("<div></div>")
			.addClass("AIcenter")
			.addClass("AIhaveToClose")
			.css("position", "absolute")
			.css("width", "100%")
			.css("top", "40%")
			.css("text-align", "center")
			.appendTo("body");
		$("<a href='#'>"+msg+"</a>")
			.addClass("AIaccess")
			.css("padding", "10px 30px")
			.css("border", "solid 2px #FFFFFF")
			.css("color", "#FFFFFF")
			.css("text-transform", "uppercase")
			.css("text-decoration", "none")
			.css("font-weight", "bold")
			.css("font-size", "50px")
			.appendTo("div.AIcenter")
			.on("click", function(){
				$(".AIhaveToClose").fadeOut();
			});
		$("<p>#CelebratePride</p>")
			.addClass("AIpride")
			.css("padding", "10px 30px")
			.css("color", "#FFFFFF")
			.css("margin-top", "50px")
			.css("font-weight", "bold")
			.css("font-size", "50px")
			.appendTo("div.AIcenter")
			;
		$("a.AIaccess").hover(
			function(){
				$(this)
				.css("background-color", "#FFFFFF")
				.css("color", "#333333");
			}, 
			function(){
				$(this)
				.css("background-color", "transparent")
				.css("color", "#FFFFFF");
			}
		);

	});

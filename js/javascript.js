$(document).ready(function(){
		//-- loader --
		var loader1 = $("#loader");
		setTimeout(function (){
			loader1.addClass('cargado');
		},1500);
			 
		//-- Menus --
		$(".sub-menu").click(function(){
			$(this).children("ul").slideToggle();
		});
		
		$("ul").click(function(a){
			a.stopPropagation();
		});
		
		//-- Deslizamiento con Menus --
		
			$("#menu a, #container-header a").click(function(){
				var seccion = $(this).attr("href");
				$("body, html").animate({
					scrollTop: $(seccion).offset().top-60
				},800);
				return false;
			});
		
		//--------- Tabs --------//
		var miTab = $("#misTabs").tabs();
		miTab.find(".ui-tabs-nav").sortable({
			axis: "x",
			stop: function(){
				miTab.tabs("refresh");
			}
		});
		
		
		// --- Capturar scroll --- //
		
		var acercaDeMi = $("#acerca_mi").offset().top-70;
		var habilidades = $("#habilidades").offset().top-70;
		var conocimientos = $("#conocimientos").offset().top-70;
		var portafolio = $("#portafolio").offset().top-70;
		var contactame = $("#contactame").offset().top-70;
		
		$(window).on("scroll", function(){
			var scroll1 = $(window).scrollTop();
			
			if(scroll1 >= acercaDeMi ){
				$(".btn_1").addClass("seleccionado");
			}else{
				$(".btn_1").removeClass("seleccionado");
			}
			
			if(scroll1 >= habilidades){
				$(".btn_2").addClass("seleccionado");
				$(".btn_1").removeClass("seleccionado");
			}else{
				$(".btn_2").removeClass("seleccionado");
			}
			
			if(scroll1 >= conocimientos ){
				$(".btn_3").addClass("seleccionado");
				$(".btn_1, .btn_2").removeClass("seleccionado");
			}else{
				$(".btn_3").removeClass("seleccionado");
			}
			
			if(scroll1 >= portafolio ){
				$(".btn_4").addClass("seleccionado");
				$(".btn_1, .btn_2, .btn_3").removeClass("seleccionado");
			}else{
				$(".btn_4").removeClass("seleccionado");
			}
			if(scroll1 >= contactame){
				$(".btn_5").addClass("seleccionado");
				$(".btn_1, .btn_2, .btn_3, .btn_4").removeClass("seleccionado");
			}else{
				$(".btn_5").removeClass("seleccionado");
			}
		});

		//---- formulario --- //
		$("#btn-enviar").click(function(){
			var nombre= $("#nombre").val();
			var email= $("#email").val();
			var comentario = $("#comentario").val();
			if( nombre.trim() == "" ){
				alert("Por favor llene todos los campos!!");
			}else{
				alert("Hola "+nombre + " algo salio mal!!");
				$("#mensajeF").html("Hola "+ nombre+", me puedes encontrar en mis redes mencionadas. !!gracias!!");
				$("#nombre").val("");
				$("#email").val("");
				$("#comentario").val("");
			}
			
		});
		
		// -- Botones MIS HABILIDADES -- //
		$("#btn-gmail").click(function(){
			$("#gmail").css("display","table");
		});
		$(".btn-1").click(function(){
			$("#flo_html").css("display","table");
		});
		$(".btn-2").click(function(){
			$("#flo_css").css("display","table");
		});
		$(".btn-3").click(function(){
			$("#flo_frond").css("display","table");
		});
		$(".btn-4").click(function(){
			$("#flo_js").css("display","table");
		});
		$(".btn-5").click(function(){
			$("#flo_js_escencial").css("display","table");
		});
		$(".btn-6").click(function(){
			$("#flo_js_dombom").css("display","table");
		});
		$(".btn-7").click(function(){
			$("#flo_jquery").css("display","table");
		});
		$(".btn-8").click(function(){
			$("#flo_jq_ui").css("display","table");
		});
		$(".btn-9").click(function(){
			$("#flo_jq_mobile").css("display","table");
		});
		
		$(".cerrar").click(function(){
			$("#gmail").css("display","none");
			$("#flo_html").css("display","none");
			$("#flo_css").css("display","none");
			$("#flo_frond").css("display","none");
			$("#flo_js").css("display","none");
			$("#flo_js_escencial").css("display","none");
			$("#flo_js_dombom").css("display","none");
			$("#flo_jquery").css("display","none");
			$("#flo_jq_mobile").css("display","none");
			$("#flo_jq_ui").css("display","none");
		});
	});
	
	
	
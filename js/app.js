
	$(document).ready(function(){
		//div blancos
		$(".blanc").droppable({
			tolerance: 'fit'
		});
		//al arrastrar ficha Azul
		$(".fAzul").draggable({
			revert: 'invalid',
			stop: function(){
				$(this).draggable('option','revert','invalid');
			}
		});
		//Al soltar ficha Azul
		$(".fAzul").droppable({
			greedy: true,
			tolerance: 'touch',
			drop: function(event, ui){
				ui.draggable.draggable('option','revert',true);
			}
		});
		
		$(".fRojo").draggable({ revert: 'invalid' });
		
	});


var ChooseDish = function(container, model) {
	var menu = model.getAllDishes("starter");
	var dishes = container.find("#dishes");

	var mainDishes = "";

	for (var i = 0; i < menu.length; i++){
		mainDishes += '<div class="col-md-2" id="pic">'+
					'<img src="images/'+menu[i].image+'">'+
					'<text>'+menu[i].name+'</text>'+
					'</div>';
	}

	dishes.html(mainDishes);

}
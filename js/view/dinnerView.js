var DinnerView = function(container, model) {
	model.addDishToMenu(1);
	model.addDishToMenu(100);
	model.addDishToMenu(201);

	var guests = model.getNumberOfGuests();
	var menu = model.getFullMenu();
	var menuPrice = model.getTotalMenuPrice();

	var dinnerMenu = container.find("#dinnerMenu");
	var guestCount = container.find("#guestCount");
	var dinnerPrice = container.find("#dinnerPrice");

	var dinner = "";

	for (i = 0; i < menu.length; i++) {
		var dishPrice = 0;
		for (j = 0; j < menu[i].ingredients.length; j++) {
			dishPrice += menu[i].ingredients[j].price;
		}
		dinner += '<div class="col-md-2" id="pic">' + 
		'<img src="images/' + menu[i].image + '">' +
		'<text>' + menu[i].name + '</text>' +
		'</div>' + '<text>' + dishPrice + '</text>';
	}
	
	dinnerPrice.html(menuPrice);
	dinnerMenu.html(dinner);
	guestCount.html(guests);
}
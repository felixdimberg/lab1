var DishView = function(container, model){
	var dishInfo = container.find("#dishInfo");
	var dishIngredients = container.find("#dishIngredients");
	var guestCount = container.find("#guestCount");
	var recipePrice = container.find("#totalPrice");

	var guests = model.getNumberOfGuests();
	var dish = model.getDish(1);
	var html = '<h1>' + dish.name + '</h1>' +
		'<img src="images/' + dish.image + '">' +
		'<text>' + dish.description + '</text>';
	var totalPrice = 0;

	var recipe = '<ul>';
	for (var i = 0; i < dish.ingredients.length; i++){
		recipe += '<li><left>' + dish.ingredients[i].quantity*guests + dish.ingredients[i].unit + '</left>'+
		'<center>'+ dish.ingredients[i].name + '</center>' +
		'<right> SEK ' + dish.ingredients[i].price*guests + '</right></li>';
		totalPrice += dish.ingredients[i].price;
	}
	recipe += '</ul>'

	recipePrice.html(totalPrice);
	dishIngredients.html(recipe);
	dishInfo.html(html);
	guestCount.html(guests);
}
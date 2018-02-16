var SidebarView = function (container, model) {

	var totalCost = container.find("#totalCost");

	totalCost.html(model.getTotalMenuPrice());
}
 

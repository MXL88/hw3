$(function(){
    renderPizza(com.dawgpizza.menu.pizzas);
});

function renderPizza(entries) {
    var template = $('.template');
    var pizzaContainer = $('.pizza-container');
    var clone;
    var price;

    pizzaContainer.empty();

    $.each(entries, function(){
       
        clone = template.clone();
        clone.find('.name').html(this.name);
        clone.find('.description').html(this.description);
        clone.find('.prices').html(this.prices);
        this.prices[0] = "0";

        clone.removeClass('template');
        pizzaContainer.append(clone);

    });
}
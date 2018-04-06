
//back-end-logic
// var pizzaObject = new Pizza("jared");
function Pizza(name){
  this.name = name;
  this.size = [];
  this.topping = [];
  this.total = 0;
  this.finalTotal = 0;
}
//this code below checks for the size of the pizza and sets the current total to a price based on size.
Pizza.prototype.sizeCheck = function(){
this.total = 0
  if(pizzaObject.size.includes("Medium")){
    this.total = 15.00;
  } else if (pizzaObject.size.includes("Large")){
    this.total = 20.00;
  } else if (pizzaObject.size.includes("Small")){
    this.total = 10.00;
  }
}
//this code below is refactored to check for every topping and just add a 1 per topping instead of individual topping checks.
Pizza.prototype.topCheck = function (){
this.finalTotal = 0;
  for(i = 1; i <= pizzaObject.topping.length; i ++){
    this.finalTotal = this.total += 1.00;
  }
}
//front-end-logic
$(document).ready(function(){
  $("#form1").submit(function(event){
      event.preventDefault();
      pizzaObject = new Pizza($("input#name").val());
      pizzaObject.size.push($("#size").val());
      $("input:checkbox[name=topping]:checked").each(function(){
        pizzaObject.topping.push($(this).val());
        pizzaObject.sizeCheck();
        pizzaObject.topCheck();
        $(".well").show();
        $("#yourTotal").text(pizzaObject.name + " your total is!");
        $("#total").text("$" + pizzaObject.finalTotal);
    })
  });
});

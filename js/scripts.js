var pizzaObject = new Pizza("jared");
function Pizza(name,){
  this.name = name;
  this.size = [];
  this.topping = [];
  this.total = 0;
  this.finalTotal = 0;
}

Pizza.prototype.sizeCheck = function(){
  if(pizzaObject.size.includes("med") || pizzaObject.size.includes("small") || pizzaObject.size.includes("large")){
    return true;
  } else {
    return false;
  }
}

Pizza.prototype.topCheck = function(){
  this.finalTotal = 0;
  if(pizzaObject.topping.includes("pep")){
    this.finalTotal = this.total += 1.00;
  } else {
    return false;
  }
}

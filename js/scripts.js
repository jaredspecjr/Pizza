var pizzaObject = new Pizza("jared");
function Pizza(name,){
  this.name = name;
  this.size = [];
  this.topping = [];
  this.total = 0;
  this.finalTotal = 0;
}

Pizza.prototype.sizeCheck = function(){
this.total = 0
  if(pizzaObject.size.includes("med")){
    this.total = 15.00;
  } else if (pizzaObject.size.includes("large")){
    this.total = 20.00;
  } else if (pizzaObject.size.includes("small")){
    this.total = 10.00;
  }
}

Pizza.prototype.topCheck = function(){
  this.finalTotal = 0;
  if(pizzaObject.topping.includes("pep")){
    this.finalTotal = this.total += 2.00;
  } else if(pizzaObject.topping.includes("cheese")){
    this.finalTotal = this.total += 1.00;
  } else if(pizzaObject.topping.includes("onions")){
    this.finalTotal = this.total += 2.00;
  }
}

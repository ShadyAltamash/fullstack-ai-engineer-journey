console.log("Hello World");
function makeCoffee(sugar, milk) {
  var instructions = "Boil Water\n";
  instructions += "Add " + sugar + " teaspoons of sugar\n";

  instructions += "Add " + milk + "% of milk";

  return instructions;
}

console.log(makeCoffee(2, 20));

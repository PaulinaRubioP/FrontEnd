/*Crea una functionllamada pizzaOven.  Debemos sentirnos libres de personalizar la información que registramos para nuestra pizza, pero asegurémonos de incluir lo siguiente:  tipoCorteza, tipoSalsa, quesos,y salsas.
*/
var sandwich = {
    pan:    "masa madre",
    proteína:  "asado",
    queso:   "queso suizo lacey",
    salsas: ["lechuga romana", "tomates reliquia", "salsa de rábano"]
};
console.log(sandwich);
function sandwichFactory(pan, proteína, queso, salsas) {
    var sandwich = {};
    sandwich.pan = pan;
    sandwich.proteína = proteína;
    sandwich.queso = queso;
    sandwich.salsas = salsas;
    return sandwich;
}
   
var s1 = sandwichFactory("trigo", "pavo", "provolone", ["mostaza", "cebolla frita", "rúcula"]);
console.log(s1);
console.log('--------------------------------------------------------------------------------------------------');
var pizza = {
    tipoCorteza:    "cortesa delgada",
    tipoDeSalsa:    "boloñesa",
    tipoDeQueso:    "de Cabra",
    tipoDeExtras:   ["aceitunas", "oregano", "cebolla", "rucula"]};
    console.log(pizza);
    function pizzaOven(tipoCorteza, tipoDeSalsa, tipoDeQueso, tipoDeExtras){
        var pizza ={};
        pizza.tipoCorteza = tipoCorteza;
        pizza.tipoDeSalsa = tipoDeSalsa;
        pizza.tipoDeQueso = tipoDeQueso;
        pizza.tipoDeExtras= tipoDeExtras;
        return pizza;
    }
    var pizza1 = pizzaOven("cortesa gruesa", "pesto", "provolone", ["tomate", "aceite oliva", "albahaca"]);
console.log(pizza1);

    var pizza2 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(pizza2);

var pizza3 = pizzaOven("lanzada a mano" , "marinara" , ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(pizza3);

var pizza4 = pizzaOven("cortesa con queso" , "griega" , "mozarella", ["carne", "chorizo", "choclo"]);
console.log(pizza4);

var pizza5 = pizzaOven("cortesa al ajo" , "boloñesa" , "provolone", ["piña", "jamón"]);
console.log(pizza5);



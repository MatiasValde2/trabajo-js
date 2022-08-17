
class Pizzas {
    constructor (id, Nombre, Ingredientes, Precio ){
        this.id = id,
        this.Nombre= Nombre,
        this.Ingredientes= Ingredientes,
        this.Precio= Precio;
    }
}

const pizzas = [
    new Pizzas (0, 'Muzza', ['Queso Muzzarella', 'Pure de tomate', 'Oregano', 'Aceitunas'], 600),
    new Pizzas (1, 'Vegetariana', ['Masa integral', 'Queso de Almendras', 'Pure de tomate', 'Rucula', 'Aceitunas'], 1200),
    new Pizzas (2, 'Carbonara', ['Queso', 'Pure de tomate', 'Oregano', 'Huevo Frito', 'Panzeta','Salsa BBQ', 'Aceitunas'], 1400),
    new Pizzas (3, 'Calabresa', ['Queso', 'Pure de tomate', 'Oregano', 'Calabreza en rodajas', 'Aceitunas'],1200),
    new Pizzas (4,'Peperoni', ['Queso', 'Pure de tomate', 'Oregano', 'Peperoni'],1000),
    new Pizzas (5, 'Jamon y Morron', ['Queso', 'Pure de tomate', 'Jamon', 'Morron', 'oregano', 'Aceitunas'],1000)
]

function impar() {
    let pizzasImpares=[];
    for (i=0; i<pizzas.length; i++){
        if ((pizzas[i].id %2)!==0){
            pizzasImpares.push (" " + pizzas[i].Nombre)
        }
        else{}
    }
    console.log("Estas pizzas tienen un ID impar:" + pizzasImpares )
};

impar()
function LaMasBarata() {
    let pizzaBarata=[];
    for (i=0; i<pizzas.length; i++){
        if ((pizzas[i].Precio == 600)){
            pizzaBarata.push (" " +pizzas[i].Nombre)
        }
        else{}
    }
    console.log("Nuestra pizza mas barata es la " + pizzaBarata )
}
LaMasBarata()

function Menu(){
        for (i=0; i<pizzas.length; i++){
            console.log(`La "${pizzas[i].Nombre}" tiene un precio de ${pizzas[i].Precio} pesos y cuenta con ${pizzas[i].Ingredientes}`)
    }
}
    Menu()


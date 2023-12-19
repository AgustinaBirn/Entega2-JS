// FUNCIONES GLOBALES
const existProduct = (array,referenceNumber) => {
    let exist = array.some( element => element.numberProduct === referenceNumber);
    return exist;
}

// SECCION "USUARIOS" / ROPA
let products = 1;
let stock = [];

class Product {
    constructor(model, size, color){
        this.model = model;
        this.size = size;
        this.color = color;
        this.numberProduct = products;
    }
}

const addProduct = (product) => {
    stock.push(product);
    products++;
    alert("¡Producto agregado con éxito!");
}
const deleteProduct = (numberProduct) => {
    if(existProduct(stock, numberProduct)){
        stock = stock.filter(product => product.numberProduct !== numberProduct);
        alert("Producto eliminado con éxito.")
    } else {
        alert("Producto no encontrado.");
    }
}
const showProduct = () => {
    let allProducts = stock.map(product => `Numero de producto: ${product.numberProduct} - Modelo: ${product.model}  Talle: ${product.size}  Color: ${product.color}`);
    // verifico si hay elementos en el array
    if(allProducts.length > 0){
        alert(allProducts.join("\n"));
    } else{
        alert("No hay productos cargados.");
    }
}

// SECCION MENUES
// menu compra
const shoppingMenu = () => {
    let estate = true;

    while(estate){
        let option = parseInt(
            prompt(
                `
                Bienvenido al menú de Compras
                1- Mostrar productos
                2- Agregar un producto
                3- Eliminar un producto
                4- Volver al menú principal
                `
            )
        )
        switch (option) {
            case 1:
                showProduct();
                break;
            case 2:
                let model = prompt("Ingrese el modelo del producto");
                let size = prompt("Ingrese el talle del producto");
                let color = prompt("Ingrese el color del producto");
                let product = new Product(model, size, color);
                addProduct(product);
                break;
            case 3:
                let products = parseInt(prompt("Ingrese el producto que desea eliminar"))
                deleteProduct(products);
                break;
            case 4:
                estate = false;
                mainMenu();
                break;
        
            default:
                alert("Ingrese una opción válida por favor.");
                break;
        }
    }
}

// menu principal
let estate = true;
const mainMenu = () => {
    
    while(estate){
        let option = parseInt(
            prompt(
                `
                Bienvenido a nuestra App de compra de Indumentaria
                1- Opciones de compra
                2- Salir
                `
            )
            )
        switch (option) {
            case 1:
                // menu de compra
                shoppingMenu();
                break;
            case 2:
                // salir
                estate = false;
                break;
            default:
                alert("Ingrese una opción válida por favor.");
                break;
        }
    }
}

mainMenu();
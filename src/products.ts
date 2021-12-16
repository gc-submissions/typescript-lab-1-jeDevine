export interface Product {
    name: string;
    price: number;
}

let products:Array<Product> = [{name: "Tacos", price: 5}, {name: "Potatoes", price: 10}, {name: "CornDogs", price: 15}];

export const calcAverageProductPrice = (arrayOfProducts:Array<Product>):number => {
   let average:number = arrayOfProducts.reduce((acc,product) => acc + product.price, 0) / arrayOfProducts.length;
   console.log(average);
   return average;
}

calcAverageProductPrice(products)
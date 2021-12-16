import {Product} from "./products"

interface InventoryItem {
    product: Product;
    quantity: number;
}

let inventory: InventoryItem[] = [
    {product:{name: "motor", price: 10.00}, quantity:10},
    {product:{name: "sensor", price: 12.50}, quantity:4},
    {product:{name: "LED", price: 1.00}, quantity:20},
];

const calcInventoryValue = (array: InventoryItem[]): number => {
    let total:number = 0;
    for(let i = 0; i < array.length; i++) {
        total = total + (array[i].quantity*array[i].product.price)
    }
    console.log(total);
    return total;
} 

calcInventoryValue(inventory)

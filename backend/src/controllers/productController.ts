import {Product} from '../types/product';
import {Request,Response} from 'express';

export const getProducts = (req:Request,res:Response)=>{
    const products: Product[] = [
        {id:1, name:"wireless mouse", price:20, imageUrl:"/images/mouse.jpg"},
        { id: 2, name: "Keyboard", price: 1299, imageUrl: "/images/keyboard.jpg" },
        { id: 3, name: "Headphones", price: 2499, imageUrl: "/images/headphones.jpg" },
        { id: 4, name: "Smartwatch", price: 4999, imageUrl: "/images/watch.jpg" },
        { id: 5, name: "USB Cable", price: 299, imageUrl: "/images/cable.jpg" },
        { id: 6, name: "Laptop Bag", price: 1499, imageUrl: "/images/laptop_bag.jpg" },
        { id: 7, name: "Wireless Charger", price: 1799, imageUrl: "/images/wireless_charger.jpg" },
        { id: 8, name: "Bluetooth Speaker", price: 1999, imageUrl: "/images/speaker.jpg" },
        { id: 9, name: "Phone Stand", price: 799, imageUrl: "/images/phone_stand.jpg" },
        { id: 10, name: "External Hard Drive", price: 3999, imageUrl: "/images/external_hdd.jpg" }
    ];

    res.json(products);
};
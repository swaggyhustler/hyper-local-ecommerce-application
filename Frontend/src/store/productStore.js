import { create } from "zustand";

export const productStore = create((set)=>({
    products: null,

    addProducts: (items)=>{
        set({products: items});
    },

    removeProducts: (id, products)=>{
        const prod = products.filter((item)=>{
            return id!=item._id;
        });
        set({products: prod});
    }
}))
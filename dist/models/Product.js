"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const data = [
    { title: 'Produto X', price: 10 },
    { title: 'Produto Y', price: 15 },
    { title: 'Produto W', price: 20 },
    { title: 'Produto G', price: 5 }
];
exports.Product = {
    getAll: () => {
        return data;
    },
    getFromPriceAfter: (price) => {
        return data.filter(item => item.price >= price);
    }
};

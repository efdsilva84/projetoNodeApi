"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.home = void 0;
const Product_1 = require("../models/Product");
const mysql_1 = require("../instances/mysql");
const home = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mysql_1.sequelize.authenticate();
        console.log('conectado ao banco');
    }
    catch (error) {
        console.log('deu erro');
    }
    let age = 90;
    let showOld = false;
    if (age > 50) {
        showOld = true;
    }
    let list = Product_1.Product.getAll();
    let expensiveList = Product_1.Product.getFromPriceAfter(12);
    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: []
    });
});
exports.home = home;

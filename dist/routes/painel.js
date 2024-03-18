"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send('Home do Painel');
});
router.get('/noticias', (req, res) => {
    res.send('Lista de notícias cadastradas');
});
exports.default = router;

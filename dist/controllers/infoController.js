"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sobre = exports.contato = void 0;
const contato = (req, res) => {
    res.render('pages/contato');
};
exports.contato = contato;
const sobre = (req, res) => {
    res.render('pages/sobre');
};
exports.sobre = sobre;

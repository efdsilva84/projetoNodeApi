"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idadeAction = exports.idadeForm = exports.nome = void 0;
const nome = (req, res) => {
    let nome = req.query.nome;
    let idade = req.query.idade;
    res.render('pages/nome', {
        nome,
        idade
    });
};
exports.nome = nome;
const idadeForm = (req, res) => {
    res.render('pages/idade');
};
exports.idadeForm = idadeForm;
const idadeAction = (req, res) => {
    let mostrarIdade = false;
    let idade = 0;
    if (req.body.ano) {
        let anoNascimento = parseInt(req.body.ano);
        let anoAtual = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }
    res.render('pages/idade', {
        idade,
        mostrarIdade
    });
};
exports.idadeAction = idadeAction;

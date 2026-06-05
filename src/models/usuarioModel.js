const db = require('../../db');

const criar = (dados, callback) => {
    const sql =
        'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';

    db.query(
        sql,
        [dados.nome, dados.email, dados.senha],
        callback
    );
};

const listar = (callback) => {
    db.query(
        'SELECT id, nome, email, criado_em FROM usuarios',
        callback
    );
};

const buscarPorId = (id, callback) => {
    db.query(
        'SELECT id, nome, email, criado_em FROM usuarios WHERE id = ?',
        [id],
        callback
    );
};

const buscarPorEmail = (email, callback) => {
    db.query(
        'SELECT * FROM usuarios WHERE email = ?',
        [email],
        callback
    );
};

const excluir = (id, callback) => {
    db.query(
        'DELETE FROM usuarios WHERE id = ?',
        [id],
        callback
    );
};

module.exports = {
    criar,
    listar,
    buscarPorId,
    buscarPorEmail,
    excluir
};
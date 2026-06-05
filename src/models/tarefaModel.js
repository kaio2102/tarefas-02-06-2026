const db = require('../../db');

const listar = (callback) => {
    db.query(
        'SELECT * FROM tarefas ORDER BY criado_em DESC',
        callback
    );
};

const buscarPorId = (id, callback) => {
    db.query(
        'SELECT * FROM tarefas WHERE id = ?',
        [id],
        callback
    );
};

const criar = (dados, callback) => {
    const sql =
        'INSERT INTO tarefas (titulo, descricao, status) VALUES (?, ?, ?)';

    db.query(
        sql,
        [
            dados.titulo,
            dados.descricao,
            dados.status || 'pendente'
        ],
        callback
    );
};

const atualizar = (id, dados, callback) => {
    const sql =
        'UPDATE tarefas SET titulo=?, descricao=?, status=? WHERE id=?';

    db.query(
        sql,
        [
            dados.titulo,
            dados.descricao,
            dados.status,
            id
        ],
        callback
    );
};

const excluir = (id, callback) => {
    db.query(
        'DELETE FROM tarefas WHERE id = ?',
        [id],
        callback
    );
};

module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizar,
    excluir
};
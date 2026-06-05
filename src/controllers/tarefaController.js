const tarefaModel = require('../models/tarefaModel');

const listar = (req, res) => {
    tarefaModel.listar((err, tarefas) => {
        if (err) {
            return res.status(500).json({
                erro: err.message
            });
        }

        res.json(tarefas);
    });
};

const buscarPorId = (req, res) => {
    tarefaModel.buscarPorId(
        req.params.id,
        (err, resultado) => {
            if (err) {
                return res.status(500).json({
                    erro: err.message
                });
            }

            if (resultado.length === 0) {
                return res.status(404).json({
                    mensagem: 'Tarefa não encontrada'
                });
            }

            res.json(resultado[0]);
        }
    );
};

const criar = (req, res) => {
    tarefaModel.criar(
        req.body,
        (err, resultado) => {
            if (err) {
                return res.status(500).json({
                    erro: err.message
                });
            }

            res.status(201).json({
                mensagem: 'Tarefa criada!',
                id: resultado.insertId
            });
        }
    );
};

const atualizar = (req, res) => {
    tarefaModel.atualizar(
        req.params.id,
        req.body,
        (err) => {
            if (err) {
                return res.status(500).json({
                    erro: err.message
                });
            }

            res.json({
                mensagem: 'Tarefa atualizada!'
            });
        }
    );
};

const excluir = (req, res) => {
    tarefaModel.excluir(
        req.params.id,
        (err) => {
            if (err) {
                return res.status(500).json({
                    erro: err.message
                });
            }

            res.json({
                mensagem: 'Tarefa excluída com sucesso!'
            });
        }
    );
};

module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizar,
    excluir
};
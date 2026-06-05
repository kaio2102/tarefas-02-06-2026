const bcrypt = require('bcryptjs');
const usuarioModel = require('../models/usuarioModel');

const cadastrar = async (req, res) => {
    const { nome, email, senha } = req.body;

    const senhaHash = await bcrypt.hash(senha, 10);

    usuarioModel.criar(
        {
            nome,
            email,
            senha: senhaHash
        },
        (err, resultado) => {
            if (err) {
                return res.status(500).json({
                    erro: err.message
                });
            }

            res.status(201).json({
                mensagem: 'Usuário cadastrado!',
                id: resultado.insertId
            });
        }
    );
};

const listar = (req, res) => {
    usuarioModel.listar((err, usuarios) => {
        if (err) {
            return res.status(500).json({
                erro: err.message
            });
        }

        res.json(usuarios);
    });
};

const buscarPorId = (req, res) => {
    usuarioModel.buscarPorId(
        req.params.id,
        (err, resultado) => {
            if (err) {
                return res.status(500).json({
                    erro: err.message
                });
            }

            if (resultado.length === 0) {
                return res.status(404).json({
                    mensagem: 'Usuário não encontrado'
                });
            }

            res.json(resultado[0]);
        }
    );
};

const excluir = (req, res) => {
    usuarioModel.excluir(
        req.params.id,
        (err) => {
            if (err) {
                return res.status(500).json({
                    erro: err.message
                });
            }

            res.json({
                mensagem: 'Usuário excluído com sucesso!'
            });
        }
    );
};

module.exports = {
    cadastrar,
    listar,
    buscarPorId,
    excluir
};
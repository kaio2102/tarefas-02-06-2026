const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const db = require('../../db');
const tarefaModel = require('../models/tarefaModel');
const usuarioModel = require('../models/usuarioModel');

const { autenticar } = require('../middlewares/authMiddleware');

router.get('/', (req, res) => {
    res.redirect(req.session.usuario ? '/tarefas' : '/login');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', (req, res) => {
    const { email, senha } = req.body;

    usuarioModel.buscarPorEmail(email, async (err, resultado) => {

        if (err || resultado.length === 0) {
            return res.render('login', {
                erro: 'Email ou senha inválidos'
            });
        }

        const valido = await bcrypt.compare(
            senha,
            resultado[0].senha
        );

        if (!valido) {
            return res.render('login', {
                erro: 'Email ou senha inválidos'
            });
        }

        req.session.usuario = {
            id: resultado[0].id,
            nome: resultado[0].nome
        };

        res.redirect('/tarefas');
    });
});

router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
});

router.get('/tarefas', autenticar, (req, res) => {
    tarefaModel.listar((err, tarefas) => {

        if (err) {
            return res
                .status(500)
                .send('Erro ao buscar tarefas');
        }

        res.render('tarefas/index', {
            tarefas,
            usuario: req.session.usuario
        });
    });
});

router.get('/tarefas/nova', autenticar, (req, res) => {
    res.render('tarefas/form', {
        tarefa: null,
        usuario: req.session.usuario
    });
});

router.post('/tarefas', autenticar, (req, res) => {
    tarefaModel.criar(req.body, (err) => {

        if (err) {
            return res
                .status(500)
                .send('Erro ao criar tarefa');
        }

        res.redirect('/tarefas');
    });
});

router.get('/tarefas/:id/editar', autenticar, (req, res) => {
    tarefaModel.buscarPorId(req.params.id, (err, resultado) => {

        if (err || resultado.length === 0) {
            return res.redirect('/tarefas');
        }

        res.render('tarefas/form', {
            tarefa: resultado[0],
            usuario: req.session.usuario
        });
    });
});

router.post('/tarefas/:id/editar', autenticar, (req, res) => {
    tarefaModel.atualizar(
        req.params.id,
        req.body,
        (err) => {

            if (err) {
                return res
                    .status(500)
                    .send('Erro ao atualizar tarefa');
            }

            res.redirect('/tarefas');
        }
    );
});

router.post('/tarefas/:id/excluir', autenticar, (req, res) => {
    tarefaModel.excluir(req.params.id, (err) => {

        if (err) {
            return res
                .status(500)
                .send('Erro ao excluir tarefa');
        }

        res.redirect('/tarefas');
    });
});

module.exports = router;
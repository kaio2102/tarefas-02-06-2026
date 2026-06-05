const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'SUA_SENHA_AQUI',
    database: 'sistema_tarefas'
});

conexao.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err.message);
        return;
    }

    console.log('Conectado ao MySQL!');
});

module.exports = conexao;
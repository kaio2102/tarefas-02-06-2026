## 1 Instalação 
npm init -y  

## 2 dependencias do projeto
npm install express mysql2 bcryptjs express-session ejs prisma @prisma/client

## 3 criar toda a estrutura de pastas
New-item -ItemType Directory -Force -path "src\models"
New-item -ItemType Directory -Force -Path "src\controllers
New-item -ItemType Directory -Force -Path "src\Routes"
New-item -ItemType Directory -Force -Path "src\middlewares"
New-item -ItemType Directory -Force -Path "src\views\tarefas"
New-item -ItemType Directory -Force -Path "src\prisma"
New-item -ItemType Directory -Force -Path "public"

## 4 Criar todos os arquivos
New-item -ItemType Directory -Force -Path "server.js"
New-item -ItemType Directory -Force -Path "src\models\tarefaModel.js"
New-item -ItemType Directory -Force -Path "src\models\usuarioModel.js"
New-item -ItemType Directory -Force -Path "src\controllers\tarefaController.js"
New-item -ItemType Directory -Force -Path "src\controllers\usuarioController.js"
New-item -ItemType Directory -Force -Path "src\controllers\authController.js"
New-item -ItemType Directory -Force -Path "src\routes\tarefasRoutes.js"
New-item -ItemType Directory -Force -Path "src\routes\usuariosRoutes.js"
New-item -ItemType Directory -Force -Path "src\routes\authRoutes.js"
New-item -ItemType Directory -Force -Path "src\routes\viewsRoutes.js"
New-item -ItemType Directory -Force -Path "src\middlewares\authMiddlewares.js"
New-item -ItemType Directory -Force -Path "src\views\laytout.ejs"
New-item -ItemType Directory -Force -Path "src\views\login.ejs"
New-item -ItemType Directory -Force -Path "src\views\tarefas\index.ejs"
New-item -ItemType Directory -Force -Path "src\views\tarefas\form.ejs"
New-item -ItemType Directory -Force -Path "src\prisma\client.js"






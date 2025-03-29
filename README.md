# 🚀 CRUD Node.js + Oracle Database

## 📋 Pré-requisitos
- Node.js v18+
- Oracle Database XE 21c
- Git (opcional)

## 🛠️ Configuração Rápida

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/kaikdev/atividade-oracle-com-nodejs.git
   cd atividade-oracle-com-nodejs
   
2. **Instale as dependências:**
    ```bash
    npm install

3. **Configure o banco:**
    ```bash
    CREATE TABLE users (
        id NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        name VARCHAR2(100),
        email VARCHAR2(100)
    );

4. **Crie o arquivo .env:**
    ```bash
    ORACLE_USER=system
    ORACLE_PASSWORD=sua_senha
    ORACLE_CONNECTION_STRING=localhost:1521/XEPDB1

## ⚡ Como Executar
    npm start

## 🌐 Endpoints
- POST	/api/users	Cria novo usuário
- GET	/api/users	Lista usuários

## 🔍 Testando
    # Criar usuário
    curl -X POST http://localhost:3000/api/users \
    -H "Content-Type: application/json" \
    -d '{"name":"Exemplo","email":"exemplo@teste.com"}'

    # Listar usuários
    curl http://localhost:3000/api/users


## 🚨 Solução de Problemas
- Erro de conexão: Verifique se o Oracle está rodando (services.msc)
- Variáveis incorretas: Confira o arquivo .env
- Porta ocupada: Altere a porta no app.js
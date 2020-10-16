## Instalando dependências necessárias:
### Back-end
 - Entre na pasta back-end/
 - rode o comando abaixo para instalar as dependências: 
   ```
   npm install
   ```
 - Crie um arquivo .env
 - Coloque as configurações do seu MySQL. Apenas deixe o PORT e o DB_DATABASE como no exemplo abaixo.
   ```
   PORT=3001
   DB_USER=root
   DB_PASSWORD=password
   DB_DATABASE=stock_system
   DB_HOST=127.0.0.1
   DB_DIALECT=mysql
   ```
   - Abra o MySQL no terminal ou o MySQL Workbench e rode o comando para criar um banco de dados:
   ```
   CREATE DATABASE IF NOT EXISTS stock_system;
   ```
   - Ainda na raiz do back-end/ rode o comandos abaixo para criar a tabela:
   ```
   npx sequelize db:migrate
   ```
   - Para popular o banco com alguns produtos padrão:
   ```
   npx sequelize db:seed:all
   ```
   - Caso necessite desfazer os comandos acima:
   ```
   npx sequelize db:migrate:undo
   npx sequelize db:seed:undo:all
   ```
   - Para iniciar o servidor:
   ```
   npm start
   ```
### Front-end
   - Entre na pasta front-end
   - Instalar dependências:
   ```
   npm install
   ```
   Para rodar o servidor, apenas digite:
   ```
   npm start
   ```
## Documentação da API
### GET /products
   - Retorna todos os produtos cadastrados:
```json
[
  {
    "id": 1,
    "productName": "Playstation 5",
    "quantity": 300,
    "unityPrice": "5000.00"
  },
  {
    "id": 2,
    "productName": "Xbox Series X",
    "quantity": 350,
    "unityPrice": "4500.00"
  },
  {
    "id": 3,
    "productName": "Controle T4W",
    "quantity": 600,
    "unityPrice": "250.00"
  }
]
```
### GET /product/:id
   - Retorna o produto específico pelo ID:
   ```json
   {
    "id": 1,
    "productName": "Playstation 5",
    "quantity": 300,
    "unityPrice": "5000.00"
   }
   ```
   - Caso passe um id de produto que não está cadastrado, retorna um erro 401:
   ```json
   {
    "message": "Produto não cadastrado"
   }
   ```
### POST /product
   - Para cadastrar algum produto coloque no body os campos:
   ```
   {
    "productName": "Nintendo 64",
    "quantity": 500,
    "unityPrice": 900.00
   }
   ```
   - Caso não coloque algums dos campos, retorna um erro 401:
   ```json
   {
    "message": "Campos Inválidos"
   }
   ```
   - Se tudo estiver correto, retorna 200: 
   ```json
   {
    "message": "Produto Cadastrado" 
   }
   ```
### put /product/:id
   - Para atualizar algum produto coloque no body os campos:
   ```
   {
    "productName": "Nintendo 64",
    "quantity": 500,
    "unityPrice": 900.00
   }
   ```

## Instalando dependências necessárias:
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
   - Abra o MySQL e crie um banco de dados com o nome **stock_system**.
   - Rode os comandos abaixo para criar as tabelas e popular com alguns produtos.
   ```
   npx sequelize db:migrate
   sequelize db:seed:all
   ```
   - Caso necessite desfazer os comandos acima:
   ```
   npx sequelize db:migrate:undo
   npx sequelize db:seed:undo:all
   ```

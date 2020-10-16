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

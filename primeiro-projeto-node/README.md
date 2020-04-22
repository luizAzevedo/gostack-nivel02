### Sobre:

- Aplicação em NodeJs e typescript.

---

### Ferramentas utilizadas:

- [Express](https://expressjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Insomnia](https://insomnia.rest/)
- [Uuidv4](https://www.npmjs.com/package/uuidv4)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [date-fns](https://date-fns.org/)
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
- [@types/express](https://www.npmjs.com/package/@types/express)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [DBeaver](https://dbeaver.io/)
- [Cors](https://enable-cors.org/index.html)

---

### Como rodar:

- Primeiro clone o repositório ou faça download;
- Abra a pasta do projeto e rode no terminal:

  `$ yarn`

  `$ yarn dev`

- No insomnia, crie uma requisição (get, post, put, delete) e basta copiar as seguintes rotas:

  Método GET (listar projetos): http://localhost:3333/projects

  Método DELETE (deletar projeto): http://localhost:3333/projects/1

  Método POST (criar projeto): http://localhost:3333/projects,
      		Colocar no body:
          {
      				"title": "Novo projeto",
              "owner": "Novo proprietário"
      		}

  Método PUT (atualizar projeto): http:/- No insomnia, crie uma requisição (get, post, put, delete) e basta copiar as seguintes rotas:

  Método GET (listar projetos): http://localhost:3333/projects

  Método DELETE (deletar projeto): http://localhost:3333/projects/1

  Método POST (criar projeto): http://localhost:3333/projects,
      		Colocar no body:
          {
      				"title": "Novo projeto",
              "owner": "Novo proprietário"
      		}

  Método PUT (atualizar projeto): http://localhost:3333/projects/1,
      		Colocar no body:
          {
      				"title": "altera titulo",
              "owner": "altera proprietário"
      		}
              "owner": "altera proprietário"
      		}

---

### Comandos utilizados na instalação:

#### Criando o arquivo package.json

yarn init -y

#### Instalando a biblioteca express

yarn add express

#### Instalando a biblioteca typescript -D <desenvolvimento>

yarn add typescript -D

#### Criando o arquivo tsconfig.json

yarn tsc --init

#### Instalando o intelisence do express no typescript

yarn add @types/express -D

#### Instalando a biblioteca ts-node-dev

yarn add ts-node-dev -D

#### Instalando a biblioteca eslint

yarn add eslint -D

#### Criando o arquivo eslint.json

yarn eslint --init
 - To check syntax, find problems, and enforce code style
 - JavaScript modules (import/export)
 - None of these
 - Does your project use TypeScript? (y/N) Y
 - Where does your code run?
    ◯ Browser
    ❯◉ Node
 - Use a popular style guide
 - Airbnb: https://github.com/airbnb/javascript
 - JSON
 - N
 - yarn add -D @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.20.1 @typescript-eslint/parser@latest

#### Instalando a biblioteca eslint

yarn add -D eslint-import-resolver-typescript

#### Instalando a biblioteca prettier

yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

#### Instalando a biblioteca uuidv4

yarn add uuidv4

#### Instalando a biblioteca date-fns

yarn add date-fns

#### Instalando a biblioteca typeorm

yarn add typeorm pg

yarn add reflect-metadata

#### Criando as migrations

yarn typeorm migration:create -n CreateAppointments

#### Executando as migrations

yarn typeorm migration:run

#### Revertendo uma migrations

yarn typeorm migration:revert

#### Consultando as migrations

yarn typeorm migration:show

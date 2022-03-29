## Descrição

Este projeto foi desenvolvido como solução de um teste para a empresa Dock. Para isso, foi utilizado
o framework ReactJS com TypeScript, SASS como pré-processador de CSS, ContextAPI para estado global, GraphQL para consumo da API, por meio do Apollo Client.
O objetivo é listar os repositórios no Github de um usuário, conforme o nome de usuário inserido no formulário.

## Rodando o projeto

Primeiro, é preciso instalar os pacotes do projeto. Para isso, rode o comando

```bash
yarn install
# or
yarn
```

Com os pacotes instalados, basta rodar o comando abaixo para inicializar o projeto:

```bash
yarn start
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

## Decisões

Ao inserir um nome de usuário no input do formulário e clicar em buscar, o estado global da aplicação é atualizado, por meio do `ContextAPI`. Após essa atualização, o hook `useEffect` irá executar novamente, fazendo uma chamada a função que executa a query `GraphQL` do `Apollo Cliente`, passando o nome de usuário como parâmetro.
Esse caminho foi escolhido seguindo as definições do hook `useEffect`, que tem o estado global da aplicação como dependência.

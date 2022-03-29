## Descrição

Este projeto foi desenvolvido como solução de um teste para a empresa Dock. Para isso, foi utilizado
o framework ReactJS com TypeScript, SASS como pré-processador de CSS, ContextAPI para estado global e GraphQL para consumo da API, por meio do Apollo/Client.
O objetivo é listar os repositórios no Github de um usuário, conforme o nome de usuário inserido no formulário.

## Rodando o projeto

Primeiro, será preciso configurar um token de autenticação para utilizar a API do Github. Para isso, siga os passos desse [tutorial](https://docs.github.com/pt/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) para gerar um token de acesso pessoal. No momento de selecionar os escopos, escolha, pelo menos, `repo` e `user`, que são os escopos utilizados nesse projeto.
Após ter o token gerado, crie um arquivo `.env.local` e atualize com o valor do token, seguindo o padrão feito em `.env.example`.

Em seguida, é preciso instalar os pacotes do projeto. Rode o comando

```bash
yarn install
# ou
yarn
```

Com os pacotes instalados e token gerado, basta rodar o comando abaixo para inicializar o projeto:

```bash
yarn start
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

Para visualizar o projeto rodando em um servidor da [`Vercel`](https://vercel.com/), acesse:

[https://teste-frontend-dock.vercel.app/](https://teste-frontend-dock.vercel.app/)

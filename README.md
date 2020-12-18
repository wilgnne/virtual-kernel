<h1 align="center">Bem-vindo ao miniso-124827 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> mini sistema operacional implementado na disciplina de Sistemas Operacionais - 2020 - FURG

## Dependências

```json
{
  "nodejs": "^12.x",
}
```

## Instalando dependências NodeJS

```python
yarn install or npm install
```

## Iniciar Projeto

```python
yarn start or npm run start
```

# Uso

Ao se iniciar o projeto, em um terminal, uma mensagem semelhante será exibia, basta acessar uma das URLs através de seu navegados para obter acesso a aplicação.

```bash
   ┌────────────────────────────────────────────────────┐
   │                                                    │
   │   Serving!                                         │
   │                                                    │
   │   - Local:            http://localhost:5000        │
   │   - On Your Network:  http://172.23.160.173:5000   │
   │                                                    │
   └────────────────────────────────────────────────────┘
```
Insira o conteudo do arquivo de entrada no teminal flutuante.

![Terminal](docs/terminal.png)

Aprecie a vista!

![Terminal](docs/exec.png)

# Sobre

## Web

O projeto web foi desenvolvido em React, e o ponto de entrada para a aplicação é o arquivo `packages/web/src/App.tsx`

## Server

Neste projeto foi utilizado um servidor webSocket para comunicação em tempo real com o front-end, e o ponto de entrada para a aplicação é o arquivo `packages/server/src/server.ts`

## Kernel

Aqui foi desenvolvida toda a regra de negocio do kernel, o ponto de entrada para a aplicação é o arquivo `packages/kernel/src/index.ts`

## Autor

👤 **Wilgnne Khawan <wilgnne.kba@gmail.com>**

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

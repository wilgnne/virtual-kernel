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
yarn dev or npm run dev
```

# Uso

Ao se iniciar o projeto, em um terminal, uma mensagem semelhante será exibia, basta acessar uma das URLs através de seu navegados para obter acesso a aplicação.

Observe que este projeto inclui escalonador de processos, gerenciamento de memoria e gerenciamento de disco, para auterar entre os modos basta selecionar o desejado na barra de navegação, localizada na parte superior direita.

```bash
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

## Escalonador de processos
Insira o conteudo do arquivo de entrada no teminal flutuante.

![Terminal](docs/terminal.png)

Aprecie a vista!

![Terminal](docs/exec.png)

## Gerenciador de memória
Insira o conteudo do arquivo de entrada no teminal flutuante.

![Memory](https://user-images.githubusercontent.com/38788330/118418391-a1237980-b68e-11eb-9221-1d58b4dac5bc.png)

## Gerenciador de disco
Digite os comandos no terminal integrado

![file-system](https://user-images.githubusercontent.com/38788330/118418447-d16b1800-b68e-11eb-9f90-6d6ddc7d047a.png)

# Sobre

## Web

O projeto web foi desenvolvido em React e NextJS, e o ponto de entrada para a aplicação é o arquivo `src/pages/index.tsx`

## Kernel

Aqui foi desenvolvida toda a regra de negocio do kernel, o ponto de entrada para a aplicação é o arquivo `src/services/kernel/index.ts`

## Autor

👤 **Wilgnne Khawan <wilgnne.kba@gmail.com>**

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

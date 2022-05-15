<div align="center">
  <img height="150em" src="https://github.com/AnaPerola/web_feedback_widget/blob/main/assets/new.png" />
</div>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-técnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-pré-requisitos">Pré-requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-iniciando-o-projeto">Iniciando Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-executando-testes">Testes</a>&nbsp;&nbsp;&nbsp;

</p>

  ![deploy](https://img.shields.io/static/v1?label=state&message=production&color=green)
  ![release-date](https://img.shields.io/static/v1?label=release-date&message=May-2022&color=orange)
  ![Vercel](https://img.shields.io/static/v1?label=railway&message=passing&color=breen)

# ✨ *Widget-Feedbacks (Backend)*

## 💻 Projeto:

Esse projeto é um Widget (elemento de interação) de Feedback que pode ser utilizado em qualquer aplicação que tenha o interesse em coletar o feedback do usuário que está utilizando o aplicação.

- Projeto focado nos princípios de SOLID
## 🔗 Disponivel em:

Você pode utilizar a API, está aqui: https://serverfeedbackwidget-production-2223.up.railway.app/
## 🚀 Técnologias

- [Node](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [NodeMailer](https://nodemailer.com/about/)
- [PostgresSQL](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/)
- [Axios](https://axios-http.com/ptbr/docs/intro) 


## 🔨 Funcionalidades

- [X] `Tipo de feedback`: Seleção de tipo de feedback para envio.
- [X] `Descrição de feedback`: Descrição em campo de formulário para inserir detalhes qual problema/ideia/outro tipo de feedback desejavel para envio.
- [X] `Screenshot`: Captura a tela atual que se refere ao feedback.
- [X] `Envio de Feedback`: Envio deste formulario preenchido com o screenshot para o Backend fazer as devidas validações.

## 📋 Pré-requisitos

- [Nodejs > 14.15v](https://nodejs.org/en/)

#

 💡 **Este projeto é divido em três partes:**

1. Frontend (https://github.com/AnaPerola/web_feedback_widget)
2. Backend (Projeto atual)
3. Mobile (https://github.com/AnaPerola/mobile_feedback_widget)

⚠️ Tanto o Frontend quanto o Mobile precisam que o Backend esteja sendo executado para funcionar.

#

## 🔧 Iniciando o projeto

### Rotas da aplicação:

- **`POST /feedbacks`**: Rota para cadastrar um novo feedback. O corpo da requisição deve conter as informações do feedback a ser cadastrado, sem o ID (gerado automaticamente pelo servidor).

1 - Clone o projeto
```console
$ git clone git@github.com:AnaPerola/server_feedback_widget.git
```
2 - Execute o comando para instalar todas as dependências
```console
$ npm install
```
3 - Suba o projeto 
```console
$ npm run dev
```

Se tudo ocorreu bem, visite: http://localhost:3333 😆

#

# 👩‍💻 Executando Testes

Execute o comando
```console
$ npm run test
```
#

<div align="center" style="display:flex; padding:5px; ">
  <img 
    alt="Ana-Node" 
    style="height:40px; width:40px;"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  >
  <img 
    alt="Ana-PostgreSQL"
    style="height:40px; width:40px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
  />
  <img
    alt="Ana-express"
    style="height:40px; width:40px;"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
  />
  <img
    alt="Ana-jest"
    style="height:40px; width:40px;"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" 
  />
  <img 
    alt="Ana-Typescrit"
    style="height:40px; width:40px;"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
  />
  <img
    alt="Ana-NPM"
    style="height:40px; width:40px;"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" 
  />
  <img
    alt="Ana-axios"
    style="height:40px; width:40px;"
    src="https://user-images.githubusercontent.com/43313420/105883616-57dbeb00-6007-11eb-9df2-de0e2a42655c.png" 
  />
</div>          

---
⌨️ com ❤️ https://github.com/anaperola 😊
_juntamente com a Rocketseat no evento *NLW Return*_

---
##### ⭐ Marque esse projeto com uma estrela

# Aplicativo Mobile com React Native e API em Node.js

Este projeto é um aplicativo mobile desenvolvido com **React Native** e **Expo**, integrado a uma **API** criada com **Node.js** e **Express**. O aplicativo consome os dados da API e utiliza a câmera do dispositivo como recurso de hardware.

## Funcionalidades

- **Consumo de API**: O aplicativo faz requisições à API local desenvolvida com Express.
- **Integração com Expo**: Utilização do framework Expo para simplificar o desenvolvimento do app.
- **Uso de Hardware**: O aplicativo solicita permissão para acessar a câmera do dispositivo.
- **Resposta em JSON**: Os dados recebidos da API são tratados e exibidos na interface do app.

## Pré-requisitos

- **Node.js**  
  Certifique-se de ter o Node.js instalado. [Download Node.js](https://nodejs.org/)

- **Expo CLI**  
  Ferramenta para gerenciar projetos React Native com Expo.

- **Expo Go**  
  Aplicativo para testar projetos Expo no dispositivo físico.

## Estrutura do Projeto

- **api/index.js**: contém o código do servidor Express que trata das requisições e retorna os dados.
- **api/package.json**: lista as dependências necessárias para o backend.
- **MeuAppExpo/App.js**: código principal do aplicativo React Native.
- **MeuAppExpo/package.json**: configuração das dependências do Expo.
# Cifra de César (Enola Holmes)

## Índice

* [1. Protótipo](#1-protótipo)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Usuários e suas relações com o produto](#3-usuários-e-suas-relações-com-o-produto)
* [4. Como o produto soluciona os problemas/necessidades dos usuários](#4-como-o-produto-soluciona-os-problemas-/-necessidades-dos-usuários)
* [5. Considerações Finais](#5-considerações-finais)
* [6. Checklist](#6-checklist)

***

## 1. Protótipo

A seguir, está o protótipo inicial do site. Um fluxograma da criação das funcionalidades do site e um fluxo dos processos para criação do projeto.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

## 2. Resumo do projeto

O site "Enola Holmes Cryptography"é uma ferramenta para criptografar e descriptografar mensagens, usando a Cifra de Cesar como método de criptografia. O tema foi baseado no filme "Enola Holmes", já que nele é usado mensagens codificadas entre a protagonista e sua mãe.

## 3. Usuários e suas relações com o produto

O produto foi criado com foco em usuários que desejam ter uma experiência de comunicação criptografada igual a protagonista do filme. Assim podem tanto enviar mensagens criptografadas, como descriptografas mensagens recebidas.

## 4. Como o produto soluciona os problemas/necessidades dos usuários

O usuário pode tanto enviar mensagens criptografadas, como descriptografas mensagens recebidas. ASsim solucionando seus problemas e sanando suas necessidades de uma comunicação que não quer que seja decifrada.

## 5. Considerações Finais

O produto faz a criptografia apenas do alfabeto maíusculo: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z". 

## 6. Checklist

* [X] `README.md` adicionar informação sobre o processo e decisões do desenho.
* [X] `README.md` explicar claramente quem são os usuários e as suas relações
  com o produto.
* [X] `README.md` explicar claramente como o produto soluciona os
  problemas/necessidades dos usuários.
* [X] Usar VanillaJS.
* [X] **Não** usar `this`.
* [X] Implementar `cipher.encode`.
* [X] Implementar `cipher.decode`.
* [X] Passar o linter com a configuração definida.
* [X] Passar as provas unitárias.
* [X] Testes unitários cubrindo 70% dos _statements_, _functions_ e _lines_, e
  no mínimo 50% das _branches_.
* [X] Interface que permita escolher o `offset` (chave de deslocamento) usava
  para cifrar/decifrar.
* [X] Interface que permita escrever um texto para ser cifrado.
* [X] Interface que mostre o resultado da cifra corretamente.
* [X] Interface que permita escrever um texto para ser decifrado.
* [X] Interface que mostre o resultado decifrado corretamente.

### Parte Opcional: "Hacker edition"

* [ ] Cifrar/decifrar minúsculas.
* [ ] Cifrar/decifrar _outros_ caractéres (espações, pontuação, `ç`, `á`, ...).
* [ ] Permitir usar `offset` negativo.


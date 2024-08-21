# Sorteador de Nomes :jigsaw:

Esse é um código simples para demosntrar como funcionam as funções **IIFE** *(Immediately Invoked Function Expression)*


---

## Indice
> 1. [O Que São Funções IIFE? :thinking:]()

> 2. [Como Funciona o Código :page_with_curl:]()

> 3. [Menções Honrosas :medal_sports:]()

---

### O Que São Funções IIFE? :thinking: 
Para entendermos como funcionam as funções IIFE funcionam vamos recapitular um pouco sobre como funcionam as funções.

> "Uma *função* é um bloco de código definido uma vez, mas que pode ser executado (ou chamado) qualquer número de vezes."
**JavaScript The Definitive Guide 6th Edition**

*Funções que não retornam void são chamadas de procedimento* :v::nerd_face:

Para você utilizar uma função dentro do seu código é necessária invocalá (ou chamalá), mas diferente das funções convencionais as funções IIFE são funções que não precisam ser invocadas para serem executadas, se comportando como se fossem parte do escopo global do código. 

*Por que usar as funções IIFE então?* **Pelo escopo.**

Como as funções tem um escopo local, quando o código terminar de percorrer a função as variáveis criadas dentro da função não continuarão no escopo global do código;

Funções IIFE também possuem sintaxes diferentes
```
(               
    function () { 

    }
)()

```

```
(
    function () <-- parâmetros { 

    }
)() <-- entrada de argumentos

```

---


### Como Funciona o Código :page_with_curl:

O código está em um arquivo chamado `index.js`. Ele está sendo interpretádo pelo `node.js`. Dessa maneira, é necessário possuir o interpretador para executar o código.

1. Instalar o `node.js` pelo site oficial 

2. Abrir arquivo com `node.js`

3. Utilizar o programa! 


---

### Menções Honrosas :medal_sports:
Eu aprendi as funções IFFE pelas aulas de JavaScript avançados no youtube. Abaixo vou deixar o link para os vídeos. 

[Brazilian dev](https://www.youtube.com/watch?v=kGbbPBRFCE0&list=PL-R1FQNkywO4sD42B6OI6KjG3uOPT0aNl) --> Playlist completa no youtube

---

Obrigado por ler este readme!

*Qualquer Dúvida ou conselho podem me contactar pelas minhas redes:* 
 
* [Linkedin](https://www.linkedin.com/in/alexandre-bitelo-0bab0824b/)

* <nav><a href = "mailto: alexandrebitelo41@gmail.com" target="_blank" rel="external" >Gmail</a>

* [Instagram](https://www.instagram.com/biteloalexandre)

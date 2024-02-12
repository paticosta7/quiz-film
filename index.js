const perguntas = [
    {
      pergunta: "Qual filme ganhou o Oscar de Melhor Filme em 1994?",
      respostas: [
         "Forrest Gump",
         "Pulp Fiction",
         "O Rei Leão"
      ],
      correta: 0
    },
    {
      pergunta: "Quem dirigiu o épico de ficção científica 'Interestelar'?",
      respostas: [
         "Steven Spielberg",
         "Christopher Nolan",
         "James Cameron"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o título do primeiro filme da saga 'Harry Potter'?",
      respostas: [
         "Harry Potter e a Câmara Secreta",
         "Harry Potter e a Ordem da Fênix",
         "Harry Potter e a Pedra Filosofal"
      ],
      correta: 2
    },
    {
      pergunta: "Quem interpretou o papel principal em 'O Poderoso Chefão'?",
      respostas: [
         "Robert De Niro",
         "Al Pacino",
         "Marlon Brando"
      ],
      correta: 2
    },
    {
      pergunta: "Em qual filme Leonardo DiCaprio finalmente ganhou seu primeiro Oscar de Melhor Ator?",
      respostas: [
         "A Origem",
         "Titanic",
         "O Regresso"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o filme de Quentin Tarantino que apresenta a famosa cena da dança entre John Travolta e Uma Thurman?",
      respostas: [
         "Cães de Aluguel",
         "Pulp Fiction",
         "Kill Bill: Volume 1"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o nome do robô amigável e azul no filme de animação 'Wall-E' da Pixar?",
      respostas: [
         "R2-D2",
         "EVE",
         "Wall-E"
      ],
      correta: 2
    },
    {
      pergunta: "Qual filme de terror de 2017 foi baseado em um romance de Stephen King sobre um palhaço assassino?",
      respostas: [
         "O Iluminado",
         "Invocação do Mal",
         "It: A Coisa"
      ],
      correta: 2
    },
    {
      pergunta: "Quem dirigiu o filme 'Parasita', vencedor do Oscar de Melhor Filme em 2020?",
      respostas: [
         "Bong Joon-ho",
         "Park Chan-wook",
         "Kim Jee-woon"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o filme de 1975 sobre um grande tubarão branco que aterroriza uma pequena cidade litorânea?",
      respostas: [
         "Tubarão",
         "Mar em Fúria",
         "Águas Rasas"
      ],
      correta: 0
    }
   ];
   const quiz = document.querySelector('#quiz')
   const template = document.querySelector('template')
   
   const corretas = new Set()
   const totalDePerguntas = perguntas.length
   const mostrarTotal = document.querySelector('#acertos span')
   mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
   
   // loop ou laço de repetição
   for (const item of perguntas) {
     const quizItem = template.content.cloneNode(true)
     quizItem.querySelector('h3').textContent = item.pergunta
   
     for (let resposta of item.respostas) {
       const dt = quizItem.querySelector('dl dt').cloneNode(true)
       dt.querySelector('span').textContent = resposta
       dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
       dt.querySelector('input').value = item.respostas.indexOf(resposta)
       dt.querySelector('input').onchange = (event) => {
         const estaCorreta = event.target.value == item.correta
   
         corretas.delete(item)
         if (estaCorreta) {
           corretas.add(item)
         }
   
         mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
       }
       quizItem.querySelector('dl').appendChild(dt)
     }
   
   
     quizItem.querySelector('dl dt').remove()
   
   
     // coloca a pergunta na tela
     quiz.appendChild(quizItem)
   }
   
   
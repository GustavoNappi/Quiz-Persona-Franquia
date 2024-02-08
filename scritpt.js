const perguntasPersona = [
    {
      pergunta: "Qual é o título do primeiro jogo da série Persona?",
      respostas: [
        "Persona 1: Revelations",
        "Persona 2: Innocent Sin",
        "Persona 3: FES"
      ],
      correta: 0
    },
    {
      pergunta: "Quem é o protagonista de Persona 5?",
      respostas: [
        "Yu Narukami",
        "Makoto Yuki",
        "Joker"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o nome da cidade em que Persona 4 se passa?",
      respostas: [
        "Inaba",
        "Tokyo",
        "Yasoinaba"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome da equipe de estudantes que protagonizam Persona 3?",
      respostas: [
        "Phantom Thieves",
        "SEES",
        "Investigation Team"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o arcano representado pela personagem Mitsuru Kirijo em Persona 3?",
      respostas: [
        "Arcano da Justiça",
        "Arcano da Imperatriz",
        "Arcano da Torre"
      ],
      correta: 0
    },
    {
      pergunta: "Quem é o mascote que acompanha os protagonistas em Persona 5?",
      respostas: [
        "Teddie",
        "Morgana",
        "Koromaru"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o nome do sistema de batalha em tempo real introduzido em Persona 3?",
      respostas: [
        "Sistema All-Out Attack",
        "Sistema Press Turn",
        "Sistema Social Link"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a habilidade única do protagonista de Persona 4?",
      respostas: [
        "Persona-changing",
        "Social Link Fusion",
        "TV World Navigation"
      ],
      correta: 2
    },
    {
      pergunta: "Quem é o antagonista principal em Persona 5?",
      respostas: [
        "Shido Masayoshi",
        "Adachi Tohru",
        "Kamoshida Suguru"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do navio que serve como base para os personagens em Persona 3?",
      respostas: [
        "Mementos",
        "Tartarus",
        "The Velvet Room"
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')

  const corretas = new Set()
  const totalDePerguntas = perguntasPersona.length
  const mostrarTotal = document.querySelector('#Acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //laço de repetição
  for(const item of perguntasPersona){
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for (let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntasPersona.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)              
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        
    }


    
    
    
    
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  
  quizItem.querySelector('dl dt').remove()
  
  
  
  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }
  
  
  
  
  
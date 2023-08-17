const personagens = [
  {
      "nome": "Jon Snow",
      "casa": "Stark",
      "personalidade": "Leal, justo, corajoso",
      "idade": 17,
      "imagem": "https://criticalhits.com.br/wp-content/uploads/2015/06/jon-snow-01.jpg"
  },
  {
      "nome": "Daenerys Targaryen",
      "casa": "Targaryen",
      "personalidade": "Forte, determinada, compassiva",
      "idade": 16,
      "imagem": "https://static1.purebreak.com.br/articles/6/10/68/06/@/468039-daenerys-targaryen-emilia-clarke-ficou-opengraph_1200-3.jpg"
  },
  {
      "nome": "Tyrion Lannister",
      "casa": "Lannister",
      "personalidade": "Inteligente, engraçado, compassivo",
      "idade": 30,
      "imagem": ""
  },
  {
      "nome": "Cersei Lannister",
      "casa": "Lannister",
      "personalidade": "Manipuladora, ambiciosa, cruel",
      "idade": 40,
      "imagem": ""
  },
  {
      "nome": "Jaime Lannister",
      "casa": "Lannister",
      "personalidade": "Leal, charmoso, complexo",
      "idade": 35,
      "imagem": ""
  },
  {
      "nome": "Sansa Stark",
      "casa": "Stark",
      "personalidade": "Inteligente, astuta, resiliente",
      "idade": 16,
      "imagem": "https://www.magazine-hd.com/apps/wp/wp-content/uploads/2021/04/game-of-thrones-sansa-figura-de-estilo.jpg"
  },
  {
      "nome": "Arya Stark",
      "casa": "Stark",
      "personalidade": "Independente, corajosa, determinada",
      "idade": 14,
      "imagem": "https://cloudfront-us-east-1.images.arcpublishing.com/estadao/ZRGUHD4X45J3RBDMTYNTQGWEKY.jpg"
  },
  {
      "nome": "Bran Stark",
      "casa": "Stark",
      "personalidade": "Inteligente, curioso, compassivo",
      "idade": 10,
      "imagem": ""
  },
  {
      "nome": "Robb Stark",
      "casa": "Stark",
      "personalidade": "Leal, justo, corajoso",
      "idade": 18,
      "imagem": ""
  },
  {
      "nome": "Theon Greyjoy",
      "casa": "Greyjoy",
      "personalidade": "Ambicioso, manipulador, complexo",
      "idade": 20,
      "imagem": ""
  },
  {
      "nome": "Ygritte",
      "casa": "Wildling",
      "personalidade": "Independente, forte, corajosa",
      "idade": 20,
      "imagem": ""
  },
  {
      "nome": "Stannis Baratheon",
      "casa": "Baratheon",
      "personalidade": "Leal, justo, determinado",
      "idade": 40,
      "imagem": ""
  },
  {
      "nome": "Melisandre",
      "casa": "Red Priestess",
      "personalidade": "Misteriosa, poderosa, perigosa",
      "idade": 'Indefinida',
      "imagem": ""
  },
  {
      "nome": "Petyr Baelish",
      "casa": "None",
      "personalidade": "Manipulador, astuto, complexo",
      "idade": 'Indefinida',
      "imagem": ""
  },
  {
      "nome": "Oberyn Martell",
      "casa": "Martell",
      "personalidade": "Leal, justo, corajoso",
      "idade": 40,
      "imagem": ""
  },
  {
      "nome": "Tywin Lannister",
      "casa": "Lannister",
      "personalidade": "Cruel, manipulador, poderoso",
      "idade": 60,
      "imagem": ""
  }
]
const image = document.querySelector('#characterImg')
const personagem = document.querySelector('#character');
const button = document.querySelector('#search-btn');
const resultado = document.querySelector('#result');


function findCharacter() {
  let characterName = '';

  if (personagem.value === '') {
    throw new Error('Para fazer a pesquisa você precisa digitar um personagem')
  }
  for (let index = 0; index < personagens.length; index += 1) {
    if (personagem.value === personagens[index].nome) {
      characterName = personagens[index].nome;
     return personagens[index]
    }
  }
  if (characterName != personagem.value) {
    throw new Error('Personagem não encontrado, digite um personagem válido')
  }
}

function printCharacter() {
  try {
    const data = findCharacter()
    resultado.innerText = `Nome: ${data.nome}
    Familia: ${data.casa}
    Caracteristicas: ${data.personalidade}
    Idade: ${data.idade}`
    resultado.classList.remove('error-message')
    image.classList.remove('no-image')
    image.classList.add('image-found')
    image.src = data.imagem

  } catch (error) {
    image.src = ""
    resultado.innerText = error.message
    resultado.classList.add('error-message')
    image.classList.remove('image-found')
    image.classList.add('no-image')
  } finally {
    personagem.value = ''
  }
}

button.addEventListener('click', printCharacter)

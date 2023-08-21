const personagens = [
  {
      "nome": "Jon Snow",
      "casa": "Stark",
      "personalidade": "Leal, justo, corajoso",
      "idade": "17 anos",
      "imagem": "https://criticalhits.com.br/wp-content/uploads/2015/06/jon-snow-01.jpg",
      "history": "Jon Snow interpretado por Kit Harington. Jon Snow da Casa Stark e da Patrulha da Noite foi criado como o filho bastardo de Ned Stark. Ned afirma que a mãe de Jon era uma enfermeira chamada Wylla. Seu lobo gigante é chamado de Fantasma devido ao seu albinismo e natureza tranquila. Ele se junta para Patrulha da Noite e se torna um lutador talentoso, mas seu senso de compaixão e justiça o coloca em conflito com seu ambiente hostil."
  },
  {
      "nome": "Daenerys Targaryen",
      "casa": "Targaryen",
      "personalidade": "Forte, determinada, compassiva",
      "idade": "16 anos",
      "imagem": "https://static1.purebreak.com.br/articles/6/10/68/06/@/468039-daenerys-targaryen-emilia-clarke-ficou-opengraph_1200-3.jpg",
      "history": "Daenerys Targaryen interpretada por Emilia Clarke. Daenerys é a princesa exilada da dinastia Targaryen, também chamada de a Nascida da Tormenta, ela e seu irmão Viserys foram levados para Essos durante a batalha final da Rebelião de Robert. Por dezessete anos, ela esteve sob os cuidados de Viserys, a quem ela temia, pois ele era abusivo com ela sempre que ela o desagradava. Em troca de um exército, Viserys a casa com o poderoso senhor da guerra de Dothraki, Khal Drogo, fazendo dela uma Khaleesi, uma rainha dos Dothraki. Ela é determinada a trazer justiça a seu reino, e põe o fim da escravidão como uma prioridade particular. A despeito de sua compaixão, porém, ela é capaz de ser dura e impiedosa com seus inimigos."
  },
  {
      "nome": "Tyrion Lannister",
      "casa": "Lannister",
      "personalidade": "Inteligente, engraçado, compassivo",
      "idade": "30 anos",
      "imagem": "https://veja.abril.com.br/wp-content/uploads/2019/04/tyrion-e1554316711513.jpg?quality=90&strip=info&w=992&resize=1200,800",
      "history": "Tyrion Lannister interpretado por Peter Dinklage. Apelidado de O Duende ou Meio-Homem, Tyrion da Casa Lannister é o irmão mais novo de Cersei e Jaime. Ele é um anão; e sua mãe morreu durante o seu nascimento, pelo qual seu pai, Tywin Lannister, o culpa. Embora não seja fisicamente poderoso, Tyrion tem uma mente astuta e geralmente usa a seu favor o fato de que os outros constantemente o subestimam. Tyrion é cruel com seus inimigos, mas possui grande simpatia para com os párias e as minorias. Tyrion se dá bem com seu irmão Jaime, mas possui uma relação mais fria com sua irmã Cersei. Desenvolveu, desde pequeno, o gosto e hábito pela leitura, pois acreditava, que devido suas limitações físicas, sua mente deveria ser sua arma. Sabia que sua cabeça era grande demais, embora preferisse pensar que tinha o tamanho certo para a sua mente."
  },
  {
      "nome": "Cersei Lannister",
      "casa": "Lannister",
      "personalidade": "Manipuladora, ambiciosa, cruel",
      "idade": "40 anos",
      "imagem": "https://i.uai.com.br/UIC-mmFrjEjk1N-c-Fmys5rXZFQ=/1200x900/smart/imgsapp2.uai.com.br/app/noticia_133890394703/2022/06/30/290264/cersei-lannister-de-game-of-thrones_1_75767.jpg",
      "history": "Cersei Lannister interpretada por Lena Headey como uma adulta e Nell Williams como uma criança. Cersei da Casa Lannister e Casa Baratheon é a Rainha dos Sete Reinos de Westeros, a esposa do rei Robert Baratheon e mãe dos príncipes Joffrey, Tommen e Myrcella Baratheon. Cersei tem um irmão gêmeo, Jaime, com quem ela se envolveu em um caso incestuoso desde a infância. Todos os três filhos de Cersei são de Jaime. O principal atributo de Cersei é seu desejo de poder e sua profunda lealdade para com seu pai, filhos e irmão Jaime. Cersei também despreza seu irmão mais novo Tyrion, uma vez que sua mãe morreu no parto dele."
  },
  {
      "nome": "Jaime Lannister",
      "casa": "Lannister",
      "personalidade": "Leal, charmoso, complexo",
      "idade": "35 anos",
      "imagem": "https://s2.glbimg.com/uNjtl4khGvrPygS2fiKuPPGDZfI=/smart/e.glbimg.com/og/ed/f/original/2020/10/13/captura_de_tela_2020-10-13_as_11.14.49.png",
      "history": "Jaime Lannister interpretado por Nikolaj Coster-Waldau. Sor Jaime da Casa Lannister é um membro da Guarda Real e um espadachim excepcionalmente habilidoso. Ele é o irmão gêmeo da rainha e manteve um incestuoso caso de amor com ela a vida toda, sendo pai de todos os três filhos vivos dela. Ele realmente ama sua irmã e faz qualquer coisa, não importa quão imprudente, ficar perto dela. Ele é apelidado de Regicida por matar o rei anterior, Aerys II, a quem ele jurou proteger. Ele foi autorizado a manter seu posto no atual Guarda Real por ter ajudado Robert a ganhar a guerra. Ao contrário de seu pai e irmã, Jaime se importa profundamente com seu irmão mais novo, Tyrion."
  },
  {
      "nome": "Sansa Stark",
      "casa": "Stark",
      "personalidade": "Inteligente, astuta, resiliente",
      "idade": "16 anos",
      "imagem": "https://www.magazine-hd.com/apps/wp/wp-content/uploads/2021/04/game-of-thrones-sansa-figura-de-estilo.jpg",
      "history": "Sansa Stark interpretada por Sophie Turner. Sansa da Casa Stark é a primeira filha e segunda criança de Eddard e Catelyn Stark. Ela também era a futura noiva do príncipe Joffrey e, portanto, a futura rainha dos sete reinos também. Sansa foi criada para ser uma dama, e possui as tradicionais graças femininas de seu meio, com um interesse especial em música, poesia, cantoria, dança, bordado, e outras atividades tradicionais femininas."
  },
  {
      "nome": "Arya Stark",
      "casa": "Stark",
      "personalidade": "Independente, corajosa, determinada",
      "idade": "14 anos",
      "imagem": "https://cloudfront-us-east-1.images.arcpublishing.com/estadao/ZRGUHD4X45J3RBDMTYNTQGWEKY.jpg",
      "history": "Arya Stark interpretada por Maisie Williams. Arya da Casa Stark é a filha mais nova e terceira filha de Lorde Eddard e Catelyn Stark de Winterfell. Sempre a moleca, Arya preferia estar treinando para usar armas do que costurar com uma agulha. Seu lobo gigante é chamado Nymeria. Arya é uma menina animada interessada em combate e exploração, ao contrário de sua irmã mais velha, Sansa. Arya deseja aprender a lutar com espadas e participar de torneios, para o horror de Sansa, que gosta das atividades mais tradicionais de uma nobre. Arya é muito próxima de seu meio-irmão Jon Snow, que a incentiva. Ao longo de suas viagens, Arya mostra grande desenvoltura, astúcia e uma capacidade firme de aceitar duras necessidades."
  },
  {
      "nome": "Bran Stark",
      "casa": "Stark",
      "personalidade": "Inteligente, curioso, compassivo",
      "idade": "10 anos",
      "imagem": "https://s2.glbimg.com/XSmL3IbvqbCH8WmThCl6HvVTKt0=/e.glbimg.com/og/ed/f/original/2019/04/12/bran_stark.jpg",
      "history": "Bran Stark (temporada 1–4, 6–8) interpretado por Isaac Hempstead Wright. Brandon da Casa Stark é o segundo filho e quarto filho de Eddard e Catelyn Stark de Winterfell. Ele foi nomeado com o nome após seu falecido tio, Brandon, que foi morto queimado pelo rei Aerys II. Seu lobo gigante é chamado de Verão. Durante a visita do rei Robert a Winterfell, ele acidentalmente encontrou Cersei e Jaime Lannister fazendo sexo, depois do qual Bran é empurrado da janela por Jaime, mutilando permanentemente suas pernas. Assim como seus irmãos, ele possui uma propensão para a aventura e emoção. Seu meio-irmão Jon carinhosamente pensa que Bran sempre foi teimoso e curioso, e que ele constantemente queria participar do jogo dos meninos mais velhos, acreditando ser um adulto de sete anos. No entanto, ele se torna mais sério e contemplativo, devido à sua situação depois de sua queda. Bran é um Troca-peles e warg, assim como alguns de seus irmãos. Mais tarde é revelado também que ele é também um vidente verde."
  },
  {
      "nome": "Robb Stark",
      "casa": "Stark",
      "personalidade": "Leal, justo, corajoso",
      "idade": "18 anos",
      "imagem": "https://veja.abril.com.br/wp-content/uploads/2018/09/robb-stark-1-e1536007969525.jpg?quality=90&strip=info&w=922&h=615&crop=1",
      "history": "Robb Stark (temporada 1–3) interpretado por Richard Madden. Robb da Casa Stark é o filho mais velho de Eddard e Catelyn Stark e o herdeiro de Winterfell. Seu lobo terrível é chamado de Vento Cinzento. Da mesma forma que seu pai, Robb tem um senso apurado de honra e justiça e, apesar da sua idade, ele tenta ser o melhor líder possível para seu povo. Apesar disso, ele parece bem sucessível aos seus sentimentos. Robb é rival, melhor amigo e constante companheiro de seu meio-irmão Jon Snow. Robb também admira e aprecia a companhia de Theon Greyjoy, que considera Robb um irmão. Robb se envolve na guerra contra os Lannisters depois que seu pai, Ned Stark, é preso por traição. Ele vence uma sucessão de batalhas na 2ª temporada, ganhando o apelido de Jovem Lobo."
  },
  {
      "nome": "Theon Greyjoy",
      "casa": "Greyjoy",
      "personalidade": "Ambicioso, manipulador, complexo",
      "idade": "20 anos",
      "imagem": "https://upload.wikimedia.org/wikipedia/pt/4/40/Theon-greyjoy-1024.jpg",
      "history": "Theon Greyjoy interpretado por Alfie Allen. Theon da Casa Greyjoy é o filho mais novo de Lorde Balon Greyjoy das Ilhas de Ferro. Ele é o refém em proteção de Lorde Eddard Stark, decorrente da fracassada Rebelião Greyjoy. Apesar de sua posição, ele continua fiel a Eddard e é amigo de seus filhos Robb e Jon. Sua relação com os Stark sempre foi respeitosa e ele considerava Robb Stark como seu irmão mais novo, embora rivalizasse com Jon Snow, o outro “intruso” da família. Theon sempre procurou a aprovação dos Stark, mas geralmente se sentia insatisfeito. Theon também é um excelente arqueiro, tendo sido capaz de salvar Bran, que estava sendo ameaçado por um selvagem, com uma flecha certeira."
  },
  {
      "nome": "Ygritte",
      "casa": "Wildling",
      "personalidade": "Independente, forte, corajosa",
      "idade": "20 anos",
      "imagem": "https://criticalhits.com.br/wp-content/uploads/2022/08/Ygritte-1.jpg",
      "history": "Ygritte (temporada 2–4) interpretada por Rose Leslie. Uma garota Selvagem com cabelos ruivos (beijada pelo fogo, um sinal de sorte entre os Selvagens) e uma seguidora de Mance Rayder. Ygritte exibia grande habilidade como arqueira. Vivendo ao norte da Muralha, ela era bem hábil na sobrevivência e era fielmente leal à causa de Mance Rayder. Ela valorizava seu status de mulher livre e depreciava os que viviam ao sul do Muro como ajoelhados, que seguiam cegamente os líderes hereditários em vez de escolherem um rei."
  },
  {
      "nome": "Stannis Baratheon",
      "casa": "Baratheon",
      "personalidade": "Leal, justo, determinado",
      "idade": "40 anos",
      "imagem": "https://jpimg.com.br/uploads/2017/04/2740220623-ator-de-game-thrones-critica-serie-nao-entendo-o-sucesso.jpg",
      "history": "Stannis Baratheon (temporada 2-5) interpretado por Stephen Dillane. Stannis da Casa Baratheon, Lorde de Dragonstone, é o mais velho dos irmãos mais novos de Robert Baratheon. Um homem pensativo e sem senso de humor, conhecido por um senso de justiça duro e inflexível, ele é obcecado por depravações reais e imaginárias. Após a morte de Robert, Ned envia-lhe uma carta que o nomeia como herdeiro legítimo e se torna outro desafiante do Trono de Ferro depois que seu suposto sobrinho Joffrey se torna rei. Stannis é um comandante experiente, marinheiro e guerreiro. Entretanto, sua personalidade atrapalha sua liderança. Sua relação com a esposa, Senhora Selyse Florent, é fria e distante. Eles tem uma filha, Shireen Baratheon, uma triste menina desfigurada pela escamagris."
  },
  {
      "nome": "Melisandre",
      "casa": "Red Priestess",
      "personalidade": "Misteriosa, poderosa, perigosa",
      "idade": 'Indefinida',
      "imagem": "https://i0.wp.com/ligadoemserie.com.br/wp-content/uploads/2016/05/melisandregot.jpg?resize=750%2C462&ssl=1",
      "history": "Melisandre (temporada 2–8) interpretada por Carice van Houten. Também conhecida como A Mulher Vermelha, é uma sacerdotisa do deus R'hllor a serviço de Stannis Baratheon. Melisandre tem poderes proféticos que lhe dão conhecimento parcial de eventos futuros. Ao contrário de muitas outras pessoas em Westeros com acesso à profecia, Melisandre tem fé absoluta em sua própria interpretação. Melisandre acredita que Stannis é o escolhido que converterá o povo de Westeros em seguidores de R'hllor. Apesar de ter um objetivo bem altruísta de salvar o mundo, ela não é o tipo de pessoa que dá valor a vida dos outros, pois sempre que pode, ela sacrifica vidas a R'hllor, queimando-as vivas, inclusive crianças."
  },
  {
      "nome": "Petyr Baelish",
      "casa": "None",
      "personalidade": "Manipulador, astuto, complexo",
      "idade": 'Indefinida',
      "imagem": "https://static.wikia.nocookie.net/gameofthrones/images/f/f8/Book_of_the_Stranger_05.jpg/revision/latest?cb=20171023235030&path-prefix=pt-br",
      "history": "Petyr Baelish (temporadas 1-7) interpretado por Aidan Gillen. Lorde Petyr Baelish, apelidado de Little Finger, é o mestre da moeda no Pequeno Conselho do Rei Robert Baratheon. Ele cresceu com Catelyn Tully e lutou com o irmão de Ned, Brandon, por sua mão. Petyr é um mestre manipulador que conhece os assuntos em andamento nos Sete Reinos graças a seus espiões. Petyr pretende pegar o Trono de Ferro para punir os poderosos nobres que costumavam olhar para ele. Ele possui consideráveis habilidades em comércio e finanças, e é mestre em intriga da corte, tendo seu brilhantismo equiparado apenas a sua ambição e seu dom de improvisação na política."
  },
  {
      "nome": "Oberyn Martell",
      "casa": "Martell",
      "personalidade": "Leal, justo, corajoso",
      "idade": "40 anos",
      "imagem": "https://upload.wikimedia.org/wikipedia/pt/0/03/OberynGoT.jpg",
      "history": "(temporada 4) interpretado por Pedro Pascal. Príncipe de Dorne, conhecido como o Víbora Vermelha. Ele é o irmão mais novo de Doran Martell, Príncipe de Dorne e Lorde de Lançassolar. Um renomado guerreiro e viajante, Oberyn tem oito filhas bastardas, chamadas de Serpentes da Areia. Sua irmã, Elia Targaryen, foi estuprada e morta durante o Ataque em Porto Real na Rebelião de Robert, por Sor Gregor Clegane. Oberyn foi um homem destemido e luxurioso, de pensamento rápido e língua afiada. Estudou por um tempo na Cidadela, e aparentemente forjou diversos elos, mas acabou por se entediar e abandonou a Ordem. Oberyn viajou o mundo, e fundou sua própria companhia de mercenários. Tinha um relacionamento muito próximo com sua irmã Elia, e eram inseparáveis quando crianças. Oberyn tem uma face marcada, com sobrancelhas finas, olhos de víbora, negros, e um nariz pontudo."
  },
  {
      "nome": "Tywin Lannister",
      "casa": "Lannister",
      "personalidade": "Cruel, manipulador, poderoso",
      "idade": "60 anos",
      "imagem": "https://conteudo.imguol.com.br/2d/2016/10/19/charles-dance-o-tywin-lannister-de-game-of-thrones-1476919340374_1920x1279.jpg",
      "history": "Tywin Lannister (temporada 1–4) interpretado por Charles Dance. Lorde de Casterly Rock, Escudo de Lannisport e Protetor do Oeste, Tywin da Casa Lannister é um homem calculista, implacável e controlador. Ele também é a antiga Mão do Rei Aerys II. Antes dos eventos da série, Tywin exerceu o cargo administrativo com a mesma eficiência que tinha no campo de batalha. A economia dos Sete Reinos prosperou e o país estava em paz. Ele é o pai de Cersei, Jaime e Tyrion. Anos depois da Rebelião de Robert, e no inicio da série, Eddard Stark é preso por traição, e o novo rei, Joffrey, o nomeia Mão do Rei mais uma vez."
  },
  {
      "nome": "Drogon",
      "casa": "Targaryen",
      "personalidade": "Leal, protetor, poderoso, majestoso",
      "idade":"10 anos",
      "imagem": "https://sm.ign.com/ign_br/screenshot/default/drogon-game-thrones-season-8-dragons-daenerys_fqpf.jpg",
      "history": "Drogon é o preto dos três dragões de Daenerys. Ele é visivelmente o maior e o dragão favorito de Daenerys. Ele recebeu o nome de Drogon em homenagem a Khal Drogo, o falecido marido de Daenerys. Ao longo das temporadas 2 e 3, Drogon é leal a Daenerys, mas na 4ª temporada, ele se torna agressivo com Daenerys e com os outros dragões por causa da comida, o que a faz perceber que ela pode estar perdendo o controle sobre seus dragões. Enquanto em Meereen, Daenerys recebe duas reclamações dos cidadãos da Baía dos Escravos sobre o comportamento de Drogon, um deles é um pastor cujo rebanho de ovelhas Drogon incendiou, e o segundo, um agricultor cuja filha de três anos, Drogon, matou. Embora Drogon desapareça antes que ele possa ser capturado, ele salva Daenerys de uma emboscada no Poço de Daznak e voa com ela nas costas, embora ele seja ferido pelos Filhos da Harpia no processo. Quando adulto, Drogon participa da batalha na Baía dos Escravos e eventualmente viaja com Daenerys para Westeros."
  }
]

// Código que faz com que a aplicação funcione
const image = document.querySelector('#characterImg')
const personagem = document.querySelector('#character');
const button = document.querySelector('#search-btn');
const resultado = document.querySelector('#result');
const historia = document.getElementById('history-text')
const historiaTitle = document.getElementById('history-title')

function prevDef(event) {
  event.preventDefault()
}

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
    image.src = data.imagem
    historia.innerText = data.history
    historiaTitle.innerText = `História do personagem`
    console.log(data.history.innerText);
    resultado.classList.remove('error-message')
    image.classList.remove('no-image')
    image.classList.add('image-found')

  } catch (error) {
    image.src = ""
    historia.innerText = ''
    historiaTitle.innerText = ''
    resultado.innerText = error.message
    resultado.classList.add('error-message')
    image.classList.remove('image-found')
    image.classList.add('no-image')
  } finally {
    personagem.value = ''
  }
}

button.addEventListener('click', prevDef)
button.addEventListener('click', printCharacter)

const percentVotesMock = (total, vote) => {
  const percent = ((vote/total) * 100).toFixed(2);
  return percent;
}

export const chapas = [
  {
    cod: 51,
    chapa: 'Cachaceiros',
    imgMan: 'https://yt3.ggpht.com/ytc/AMLnZu-AZNA_ba84E8kH3R5E-H8eBqBTGETlGGQAkfgtYQ=s900-c-k-c0x00ffffff-no-rj',
    nameMan: 'Zeca Pagodinho',
    cpfMan: '789.456.123-22',
    imgSub: 'https://akamai.sscdn.co/uploadfile/letras/fotos/5/d/1/3/5d138386cb0ff237d0f65cd6a9905ab4.jpg',
    nameSub: 'Tim Maia',
    cpfSub: '123.456.789-88',
    votes: 10,
    totalVotes: 60,
  },
  {
    cod: 171,
    chapa: 'Pilantras',
    imgMan: 'https://www.polemicaparaiba.com.br/wp-content/uploads/2021/02/Pedro-Cardoso-Agostinho-Carrara-1-1.jpg',
    nameMan: 'Augustinho Carrara',
    cpfMan: '171.711.177-77',
    imgSub: 'https://4.bp.blogspot.com/-ivwuSV4j5Iw/WBS8boARw4I/AAAAAAAAvkA/KQ9SUSO7mCYPoUrgjgjZuWLhSWAD80KeACLcB/s1600/rolando.jpg',
    nameSub: 'Orlando Lero',
    cpfSub: '654.789.321-11',
    votes: 20,
    totalVotes: 60,
  },
  {
    cod: 66,
    chapa: 'Seleção 94',
    imgMan: 'https://istoe.com.br/wp-content/uploads/istoeimagens/imagens/mi_1120759765241958.jpg?x75893',
    nameMan: 'Parreira',
    cpfMan: '944.449.949-44',
    imgSub: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5EmGJz_CVu38TzqRbEt4oAaf9oQ5-o-nfsQ&usqp=CAU',
    nameSub: 'Zagalo',
    cpfSub: '134.949.449-99',
    votes: 30,
    totalVotes: 60,
  },
]

const percent = (chapas) => {
  const totalVotes = chapas.map(({ votes }) => votes).reduce((total, curr) => curr + total, 0)
  const percentVotes = chapas.map(({ votes }) => ((votes/totalVotes) * 100).toFixed(2)) 
  return chapas.percentVotes
}
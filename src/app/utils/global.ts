export const Global = Object.freeze({
  login: {
    tipo: 'cliente',
    idLogin: '123',
  },
  produto: [
    {
      id: 1,
      empresa: 'Fabinho do pneu',
      nome: 'Troca de pneu',
      descricao:
        'Trocamos pneu 24horas por dia, 7 dias por semana, 350 dias por ano (tambem descançamos) ',
      preco: 60.01,
      img: 'https://github.com/leonardors98/angular-AEP/blob/master/src/app/assets/img/troca_de_pneu.jpg?raw=true',
    },
    {
      id: 2,
      empresa: 'Guinchos rebaixados',
      nome: 'Guincho de todo tipo de veiculo',
      descricao:
        'Guinchamos de tudo um pouco, desde sua bike com o pneu arriado, ate o seu caminhao 7 eixos que deu PT na marginal! ',
      preco: 456.68,
      img: 'https://github.com/leonardors98/angular-AEP/blob/master/src/app/assets/img/guincho_tunado.mp3.jpg?raw=true',
    },
    {
      id: 3,
      empresa: 'Blindados veiculos',
      nome: 'Cromagem de veiculos customizados',
      descricao:
        'Deixamos seu automovel com a sua cara e seu estilo, totalmente personalizado, com qualidade, rapidez e eficiencia. GARANTIMOS TOTAL SATISFAÇÃO NAS CROMAGEM! (tudo como a lei manda) ',
      preco: 999.98,
      img: 'https://github.com/leonardors98/angular-AEP/blob/master/src/app/assets/img/moto_cromada.jpg?raw=true',
    },
  ],
  clientes: [
    {
      id: '123',
      email: 'email@email.com',
      senha: '123',
      nomeCompleto: 'meu nome completo',
      endereco: {
        cep: '87060672',
        logradouro: 'Avenida Carlos Correa Borges',
        numero: '123',
        bairro: 'Conjunto Habitacional Inocente Vila Nova Júnior',
        cidade: 'Maringá',
        estado: 'Paraná',
      },
      pedidos: [
        { id: '1', idProduto: '13', quantidade: '3' },
        { id: '3', idProduto: '13', quantidade: '3' },
      ],
    },
  ],
  empresa: [
    {
      id: 1,
      email: 'carlos@guincho',
      senha: '123',
      nomeFantasia: 'Carlos Guincheiro',
      razaoSocial: '123',
      inscricaoEstadual: '123',
      telefone: '123',
      cnpj: '123',
      tipoServicoPrestado: ['guincho', 'carlos'],
      produtos: ['12', 15],
      endereco: {
        cep: '87060672',
        logradouro: 'Avenida Carlos Correa Borges',
        numero: '123',
        bairro: 'Conjunto Habitacional Inocente Vila Nova Júnior',
        cidade: 'Maringá',
        estado: 'Paraná',
      },
    },
  ],
});

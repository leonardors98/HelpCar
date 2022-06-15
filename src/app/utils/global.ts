export const Global = Object.freeze({
  login: {
    tipo: 'cliente',
    idLogin: '123',
  },
  produto: [
    {
      id: 1,
      empresa: 'nome da empresa',
      nome: 'nome do produto',
      descricao:
        'asdasd asdasd asd asdasd asdasd asd asdasd asdasd asd asdasd asdasd asd asdasd asdasd asd asdasd asdasd asd asdasd asdasd asd asdasd asdasd asd ',
      preco: 12.22,
      img: 'https://ghavatars.staticblitz.com/leonardors98.png?size=50',
    },
    {
      id: 2,
      empresa: 'nome da empresa',
      nome: 'nome do produto',
      descricao:
        'asdasd asdasd asd asdasd asdasd asd asdasd asdasd asd asdasd asdasd asd asdasd asdasd asd asdasd asdasd asd asdasd asdasd asd asdasd asdasd asd ',
      preco: 12.22,
      img: 'https://ghavatars.staticblitz.com/leonardors98.png?size=50',
    },
    {
      id: 3,
      empresa: 'nome da empresa',
      nome: 'nome do produto',
      descricao:
        'asdasd asdasd asd asdasd asdasd asd asdasd asdasd asd asdasd asdasd asd asdasd asdasd asd asdasd asdasd asd asdasd asdasd asd asdasd asdasd asd ',
      preco: 12.22,
      img: 'https://ghavatars.staticblitz.com/leonardors98.png?size=50',
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

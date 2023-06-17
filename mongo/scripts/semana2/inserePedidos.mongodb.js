use('ecomm');

db.orders.insertMany([
  {
    _id: ObjectId(),
    dataPedido: ISODate('2020-07-12'),
    account: {
      accountId: new ObjectId('6483506644deba038ebfd5c9'),
      nome_cliente: 'Eduardo Samuel Renato Campos',
    },
    enderecoEntrega: {
      bairro: 'Feu Rosa',
      rua: 'Rua das Dálias',
      numero: '307',
      CEP: '29172370',
      cidade: 'Serra',
      UF: 'ES',
    },
    itens: [
      {
        productId: new ObjectId('647a3e177b1a196720ecf23d'),
        quantidade: 1,
        desconto: NumberDecimal('0.3'),
        precoUnitario: NumberDecimal('3523.00'),
      },
      {
        productId: new ObjectId('647a3e177b1a196720ecf241'),
        quantidade: 2,
        precoUnitario: NumberDecimal('9176.00'),
      },
    ],
  },

  {
    _id: ObjectId(),
    dataPedido: ISODate('2020-01-09'),
    account: {
      accountId: new ObjectId('6483506644deba038ebfd5ca'),
      nome_cliente: 'Juan Breno Rafael Farias',
    },
    enderecoEntrega: {
      bairro: 'João Paulo',
      rua: 'Rua da Salina',
      numero: '818',
      CEP: '65041300',
      cidade: 'São Luís',
      UF: 'MA',
    },
    itens: [
      {
        productId: new ObjectId('647a3e177b1a196720ecf246'),
        quantidade: 3,
        desconto: NumberDecimal('0.24'),
        precoUnitario: NumberDecimal('8549.1'),
      },
    ],
  },

  // pedido invalido
  /* {
            _id: ObjectId(),
            dataPedido: ISODate("2020-07-12"),
            account:{
                nome_cliente:"Luis da Silva"
            },
            enderecoEntrega: {
                  bairro: "Tres",
                  rua: "Rua Vladimir",
                  numero: "327",
                  CEP: "24323270",
                  cidade: "Araça",
                  UF: "BA"
            },
            itens:[
                    {
                        precoUnitario: NumberDecimal("3523.00")
                    },
                    {
                        productId: new ObjectId("647a3e177b1a196720ecf241"),
                    }
                ]
            } */
]);

use('ecomm');

const idUsuario = ObjectId('64838e15f65407317c53ae60');

db.orders.aggregate([
  {
    $match: { _id: idUsuario },
  },

  {
    $unwind: '$itens',
  },

  {
    $group: {
      _id: '$account.nome_cliente',
      soma_quantidade_item: {
        $sum: '$itens.quantidade',
      },
      montante_sem_desconto: {
        $sum: { $multiply: ['$itens.quantidade', '$itens.precoUnitario'] },
      },
      total_desconto: {
        $sum: '$itens.desconto',
      },
    },

  },

]);

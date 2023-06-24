use('ecomm');

db.createCollection('accounts', {

  validator: {

    $jsonSchema: {

      bsonType: 'object',

      required: ['_id', 'nome', 'email', 'senha', 'dataCriacao', 'cpf', 'telefone', 'endereco'],

      properties: {
        _id: {
          description: 'id of the product',
          bsonType: 'objectId',
        },
        nome: {
          description: 'name of the user',
          bsonType: 'string',
          minLength: 5,
        },
        email: {
          description: 'email of the user',
          bsonType: 'string',
          minLength: 5,
        },
        senha: {
          description: 'password of the user',
          bsonType: 'string',
          minLength: 5,
        },
        dataCriacao: {
          description: 'date of account criation',
          bsonType: 'date',
        },
        cpf: {
          description: 'number on the id of the user',
          bsonType: 'string',
          minLength: 11,
          maxLength: 11,
        },
        telefone: {
          description: 'telephone number of the user',
          bsonType: 'string',
          minLength: 10,
        },
        endereco: {
          bsonType: 'object',
          required: ['bairro', 'rua', 'numero', 'cep', 'cidade', 'uf'],
          properties: {
            bairro: {
              description: 'neighborhood of the user',
              bsonType: 'string',
              minLength: 1,
            },
            rua: {
              description: 'street of the adress of the user',
              bsonType: 'string',
              minLength: 1,
            },
            numero: {
              description: 'number of the adress of the user',
              bsonType: 'string',
              minLength: 1,
            },
            complemento: {
              description: 'another informations about the adress of the user',
              bsonType: 'string',
            },
            cep: {
              description: 'identification number of the residency of the user',
              bsonType: 'string',
              minLength: 8,
              maxLength: 8,
            },
            cidade: {
              description: 'city of the user',
              bsonType: 'string',
              minLength: 5,
            },
            uf: {
              description: 'state of the user',
              bsonType: 'string',
              minLength: 2,
              maxLength: 2,
            },
          },
        },
      },
      additionalProperties: false,
    },
  },
});

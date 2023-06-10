use("ecomm");

db.accounts.insertMany([
    { _id: ObjectId(),
      nome: "Eduardo Samuel Renato Campos",
      email: "eduardosamuelcampos@padrejuliano.com",
      senha: "923fwsa**",
      dataCriacao: ISODate("2021-10-19") ,
      cpf: "50013932640",
      telefone: "(27)2340-0977",
      endereco: {
        
          bairro: "Feu Rosa",
          rua: "Rua das Dálias",
          numero: "307",
          cep: "29172370",
          cidade: "Serra",
          uf: "ES"
        }
    },
    {_id: ObjectId(),
        nome: "Juan Breno Rafael Farias",
        email: "juanbrenofarias@vitaonline.com.br",
        senha: "kysIsBnUea",
        dataCriacao: ISODate("2022-07-09") ,
        cpf: "66417969657",
        telefone: "(27)2880-0977",
        endereco: {
          
            bairro: "João Paulo",
            rua: "Rua da Salina",
            numero: "818",
            complemento: "casa 01 ",
            cep: "65041300",
            cidade: "São Luís",
            uf: "MA"
          }},
    {_id: ObjectId(),
        nome: "Daniela Flávia Corte Real",
        email: "daniela.daniela.cortereal@conexao.com",
        senha: "roLmJ9Noe9",
        dataCriacao: ISODate() ,
        cpf: "08474346487",
        telefone: "(27)2880-3437",
        endereco: {
          
            bairro: "Canindezinho",
            rua: "Rua Beira da Ponte",
            numero: "241",
            cep: "60734162",
            cidade: "Fortaleza",
            uf: "CE"
          }},
    //conta inválida
    /*{
        _id: ObjectId(),
        email: "random@email.com.br",
        senha: "k1224312",
        dataCriacao: new ISODate() ,
        telefone: "34234234",
        endereco: {
          
            bairro: "Itu",
            rua: "Rua Sol",
            numero: "23123",
            cep: "91234-240",
            cidade: "Gloria",
            uf: "RS"
          }
        }*/
]);

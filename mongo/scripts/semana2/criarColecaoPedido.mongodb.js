use('ecomm')

db.createCollection("orders",{

    validator:{

        $jsonSchema:{

            bsonType: "object",

                required:["_id","dataPedido","account","enderecoEntrega","itens"],

                properties: {
                    _id:{
                        description: "id of the order",
                        bsonType: "objectId"
                    },
                    dataPedido:{
                        description: "date of the order",
                        bsonType: "date",
                    },
                    account:{
                        bsonType: "object",
                        required:["accountId","nome_cliente"],
                        properties:{
                            accountId:{
                                description: "id of the account that made the order",
                                bsonType: "objectId"
                            },
                            nome_cliente:{
                                description:"name of the cliente that made the order",
                                bsonType:"string"
                            }
                        }
                    },
                    enderecoEntrega: {
                        bsonType: "object",
                        required: [
                          "bairro",
                          "rua",
                          "numero",
                          "CEP",
                          "cidade",
                          "UF"
                        ],
                        description: "address of the account that made the order",
                        properties: {
                          bairro: {
                            bsonType: "string",
                            minLength: 1,
                            description: "neighbour of the client"
                          },
                          rua: {
                            bsonType: "string",
                            minLength: 1,
                            description: "street of the client"
                          },
                          numero: {
                            bsonType: "string",
                            minLength: 1,
                            description: "number of the residency of the client"
                          },
                          complemento: {
                            description: "another informations about the address of the client",
                            bsonType: "string"
                          },
                          CEP: {
                            bsonType: "string",
                            minLength: 8,
                            maxLength: 8,
                            description: "identification number of the residency of the user"
                          },
                          cidade: {
                            bsonType: "string",
                            minLength: 5,
                            description: "city of the client"
                          },
                          UF: {
                            bsonType: "string",
                            minLength: 2,
                            maxLength: 2,
                            description: "state of the client"
                          }
                        },
                        additionalProperties: false,
                      },
                      itens:{
                        bsonType: "array",
                        minItems: 1,
                        uniqueItems: true,
                        additionalProperties: false,
                        items:{
                            bsonType: "object",
                            additionalProperties: false,
                            required: ["productId", "quantidade", "precoUnitario"],
                            properties: {
                                productId: {
                                    bsonType: "objectId",
                                    description: "id of the product"
                                },
                                quantidade: {
                                    bsonType: "int",
                                    minimum: 1,
                                    description: "quantity of product ordered"
                                },
                                desconto: {
                                    bsonType: "decimal",
                                    minimum: 0,
                                    exclusiveMinimum: true
                                },
                                precoUnitario: {
                                    bsonType: "decimal",
                                    minimum: 0,
                                    exclusiveMinimum: true
                                }

                        }
                      }
                    
                }
                
        },
        additionalProperties: false
    }
    
}
})
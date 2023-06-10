use('ecomm')

let quantidadePedido = 2

const update = db.products.updateOne(
    {
        "NOME": 'Galaxy Tab S8', "QUANTIDADE EM ESTOQUE":{$gte: quantidadePedido}
    },
    {
        $inc: {"QUANTIDADE EM ESTOQUE": -quantidadePedido}
        }
    )


if(update.matchedCount===0){
    console.log("Sorry. Your Order could not be completed. We do not have any more units of this product in our stock.")
}

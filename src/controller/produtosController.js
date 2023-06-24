import Produtos from '../models/Produto.js';

class ProdutoController {
  static listarProdutos = async (req, res) => {
    try {
      const produtosResultado = await Produtos.find().populate('CATEGORIA');
      res.status(200).json(produtosResultado);
    } catch (err) {
      res.status(500).json({ message: `${err.message} - Nenhum produto encontrado` });
    }
  };

  static listarProdutoPorId = async (req, res) => {
    const id = req.params.id;

    try {
      const produtoEspecifico = await Produtos.findById(id).populate('CATEGORIA').exec();
      res.status(200).send(produtoEspecifico);
    } catch (err) {
      res.status(400).send({ message: `${err.message} - Id do produto não localizado.` });
    }
  };

  static inserirProduto = async (req, res) => {
    try {
      const produtoNovo = new Produtos(req.body);

      if (Object.keys(produtoNovo).length === 0) {
        throw new Error('corpo da requisição vazio');
      }
      await produtoNovo.save();
      res.status(201).json(produtoNovo.toJSON());
    } catch (err) {
      if (err.message === 'Corpo da requisição vazio') {
        res.status(400).json(err.message);
      }
      res.status(500).send({ message: `${err.message} - falha ao inserir produto.` });
    }
  };

  static atualizarProduto = async (req, res) => {
    const id = req.params.id;

    try {
      await Produtos.findByIdAndUpdate(id, { $set: req.body });
      res.status(204).send({ message: 'Produto atualizado com sucesso' });
    } catch (err) {
      res.status(500).send({ message: `Produto não atualizado - ${err.message}` });
    }
  };

  static excluirProduto = async (req, res) => {
    const id = req.params.id;

    try {
      await Produtos.findByIdAndDelete(id);
      res.status(200).send({ message: 'Produto removido com sucesso' });
    } catch (error) {
      res.status(500).send({ message: `${err.message} - Produto não removido` });
    }
  };
}

export default ProdutoController;

import Categorias from '../models/Categoria.js';

class CategoriaController {
  static listarCategorias = async (req, res) => {
    try {
      const categoriasResultado = await Categorias.find();
      res.status(200).json(categoriasResultado);
    } catch (err) {
      res.status(500).json({ message: `${err.message} - Nenhuma categoria encontrada` });
    }
  };

  static listarCategoriaPorId = async (req, res) => {
    const id = req.params.id;

    try {
      const categoriaEspecifica = await Categorias.findById(id).exec();
      res.status(200).send(categoriaEspecifica);
    } catch (err) {
      res.status(400).send({ message: `${err.message} - Id da categoria não localizado.` });
    }
  };

  static inserirCategoria = async (req, res) => {
    try {
      const categoriaNova = new Categorias(req.body);
      if (Object.keys(categoriaNova).length === 0) {
        throw new Error('corpo da requisição vazio');
      }
      await categoriaNova.save();
      res.status(201).json(categoriaNova.toJSON());
    } catch (err) {
      if (err.message === 'Corpo da requisição vazio') {
        res.status(400).json(err.message);
      }
      res.status(500).send({ message: `${err.message} - falha ao inserir categoria.` });
    }
  };

  static ativarCategoria = async (req, res) => {
    const id = req.params.id;

    try {
      await Categorias.findByIdAndUpdate(id, { status: 'ATIVA' });
      res.status(204).send({ message: 'Categoria ativada com sucesso' });
    } catch (err) {
      res.status(500).send({ message: `Categoria não ativada - ${err.message}` });
    }
  };

  static atualizarCategoria = async (req, res) => {
    const id = req.params.id;

    try {
      await Categorias.findByIdAndUpdate(id, { $set: req.body });
      res.status(204).send({ message: 'Categoria atualizada com sucesso' });
    } catch (err) {
      res.status(500).send({ message: `Categoria não atualizada - ${err.message}` });
    }
  };

  static excluirCategoria = async (req, res) => {
    const id = req.params.id;

    try {
      await Categorias.findByIdAndDelete(id);
      res.status(200).send({ message: 'Categoria removida com sucesso' });
    } catch (err) {
      res.status(500).send({ message: `${err.message} - Categoria não removida` });
    }
  };
}

export default CategoriaController;

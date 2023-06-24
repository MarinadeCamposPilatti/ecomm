import { Decimal128, ObjectId } from 'mongodb';
import mongoose from 'mongoose';

const produtoSchema = new mongoose.Schema(
  {
    id: { type: ObjectId },
    NOME: {
      type: String,
      required: [true, 'Nome é obrigatório'],
      minLength: 3,
      validate: {
        validator(v) {
          const regex = /^\D/;
          if (!regex.test(v)) {
            throw new Error('Produto inválido');
          }
        },
        message: (props) => `${props.value} não pode começar com números!`,
      },
    },
    SLUG: {
      type: String,
      validate: {
        validator(v) {
          const regex = /[\w|-]/;
          if (!regex.test(v)) {
            throw new Error('Produto inválido');
          }
        },
        message: (props) => `${props.value} só pode conter letras, números e hífens!`,
      },
      required: true,
    },

    PRECO_UNITARIO: {
      type: Decimal128,
      validate: {
        validator(value) {
          if (value > 0.0) {
            return value;
          }
          throw new Error('Preço inválido');
        },
        message: 'Preço Unitário precisa ser maior que 0.',
      },
      required: true,
    },

    QUANTIDADE_EM_ESTOQUE: {
      type: Number,
      validate: {
        validator(value) {
          if (value > 0 && value < 10000) {
            return value;
          }
          throw new Error('Quantidade Inválida');
        },
        message: 'Quantidade em estoque não pode ser maior que 10000 e menor que 0.',
      },
      required: true,
    },

    CATEGORIA: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'categories',
      required: true,
    },
  },
);

const produtos = mongoose.model('products', produtoSchema);

export default produtos;

import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

const categoriaSchema = new mongoose.Schema(
  {
    id: { type: ObjectId },
    nome: {
      type: String,
      required: [true, 'Nome é obrigatório'],
      minLength: 3,
      validate: {
        validator(v) {
          const regex = /^\D/;
          if (!regex.test(v)) {
            throw new Error('Categoria inválida');
          }
        },
        message: (props) => `${props.value} não pode começar com números!`,
      },
    },
    status: { type: String, required: true, enum: ['ATIVA', 'INATIVA'] },
  },
);

const categorias = mongoose.model('categories', categoriaSchema);

export default categorias;

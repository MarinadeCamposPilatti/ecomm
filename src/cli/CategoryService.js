import chalk from 'chalk';
import fs from 'fs';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

export default class CategoryService {
  static findCategories(type, id) {
    fetch('http://localhost:3000/categories')
      .then((resposta) => {
        console.log(`response status : ${chalk.yellow(resposta.status)} - ${chalk.yellow(resposta.statusText)}`);
        return resposta.json();
      })
      .then((json) => {
        if (type === '--listarCategorias') {
          console.log(json);
        } else {
          this.findCategoryById(json, id);
        }

        return json;
      });
  }

  static findCategoryById(json, idCategory) {
    const specified = json.find((element) => element.id === idCategory);

    specified === undefined ? console.log(chalk.red('categoria inexistente')) : console.log(specified);
  }

  static createCategory(newCategory) {
    async function create(caminhoDoArquivo) {
      try {
        const encoding = 'utf-8';
        const novaCat = await fs.promises.readFile(caminhoDoArquivo, encoding);

        const objNovaCat = JSON.parse(novaCat);

        fetch('http://localhost:3000/categories', {
          method: 'POST',
          body: JSON.stringify(objNovaCat.categories[0]),
          headers: {
            Accept: 'application/json', // o que significa esse accept e esse content-type?
            'Content-Type': 'application/json ; charset=UTF-8',
          },
        }).then((response) => {
          console.log(`response status : ${chalk.yellow(response.status)} - ${chalk.yellow(response.statusText)}`);
          return response.json();
        }).then((text) => {
          console.log(text);
        }).catch((error) => {
          console.log(error); // porque não aparece nada para isso?
        });
      } catch (erro) {
        console.log(chalk.red('arquivo não encontrado'));
      }
    }

    create(newCategory);
  }

  static updateCategory(id, categoriaAtulizada) {
    async function update(caminhoDoArquivo) {
      try {
        const encoding = 'utf-8';
        const novaCat = await fs.promises.readFile(caminhoDoArquivo, encoding);

        const objNovaCat = JSON.parse(novaCat);

        fetch(`http://localhost:3000/categories/${id}`, {
          method: 'PATCH',
          body: JSON.stringify({ ...objNovaCat.categories[0] }),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=UTF-8',
          },
        }).then((response) => {
          console.log(`response status : ${chalk.yellow(response.status)} - ${chalk.yellow(response.statusText)}`);

          if (response.status === 404) {
            console.log(chalk.red('categoria inexistente'));
          }

          return response.json();
        }).then((text) => {
          console.log(text);
        }).catch((error) => {
          console.log(error);
        });
      } catch (erro) {
        console.log(chalk.red('arquivo não encontrado'));
      }
    }

    update(categoriaAtulizada);
  }

  static deleteCategory(ids) {
    async function deleteEspecificCategory() {
      try {
        fetch(`http://localhost:3000/categories/${ids}`, {
          method: 'DELETE',
        }).then((response) => {
          console.log(`response status : ${chalk.yellow(response.status)} - ${chalk.yellow(response.statusText)}`);

          if (response.status === 404) {
            console.log(chalk.red('categoria inexistente'));
          }

          return response.json();
        }).then((text) => {
          console.log(text);
        }).catch((error) => {
          console.log(error);
        });
      } catch (erro) {
        console.log(chalk.red('arquivo não encontrado'));
      }
    }

    deleteEspecificCategory(ids);
  }
}

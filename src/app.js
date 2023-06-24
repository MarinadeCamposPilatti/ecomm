import express from 'express';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import yaml from 'yaml';
import routes from './routes/index.js';
import db from './config/dbConnect.js';

db.on('error', console.log.bind(console, 'Erro de conexão'));

db.once('open', () => {
  console.log('Conexão ao MongoDB realizada');
});

const app = express();

const arquivo = fs.readFileSync('src/swagger/ecomm.yaml', 'utf8');
const swaggerDocumento = yaml.parse(arquivo);
const options = {
  explorer: true,
};
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocumento, options));

app.use(express.json());

routes(app);

export default app;

import express from "express";
import path from "path";
import swaggerUi from  "swagger-ui-express";
import { createRequire } from "module";
import { fileURLToPath } from 'url';

import {apiRouter} from './routes.js';

const require = createRequire(import.meta.url);
const swaggerDocument = require("./swagger.json");
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, 'front/build')));

app.use('/api', apiRouter);

app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
  ); 

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'front', 'build', 'index.html'))
}); 

app.listen(PORT, () => {
    console.log(`server listen port ${PORT}`)
});

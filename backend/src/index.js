import express from 'express';
import {} from 'dotenv/config';
import routes from './routes';

const { BACKEND_PORT:PORT } = process.env;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
})
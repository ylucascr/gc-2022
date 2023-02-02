import express from 'express';
import {} from 'dotenv/config';

const { PORT } = process.env;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World Back');
})

app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
})
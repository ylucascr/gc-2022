import express from 'express';
import {} from 'dotenv/config';
import routes from './routes';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use(express.json());
app.use(routes);

export default app;
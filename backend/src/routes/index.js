import express from 'express';
import todosRoutes from '../routes/todos';

const router = express.Router();

router.use('/todos', todosRoutes)

export default router;
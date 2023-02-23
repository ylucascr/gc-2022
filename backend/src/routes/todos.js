import express from 'express';
import todosController from '../controllers/todos';

const router = express.Router();

router.get('/', todosController.index);
router.get('/:id', todosController.read);
router.post('/', todosController.create);
router.post('/:id/done', todosController.markDone);
router.put('/:id', todosController.update);
router.delete('/:id', todosController.remove);

export default router;
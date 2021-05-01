import express from 'express';
import { withErrorHandling } from './utils';
import { index, findById } from '../controllers/user_controller';

const router = express.Router();

router.get('/', withErrorHandling(index));
router.get('/:id', withErrorHandling(findById))

export default router;
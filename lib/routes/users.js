import { index } from '../controllers/user_controller';

import express from 'express';

const router = express.Router();

router.get('/', index);


export default router;
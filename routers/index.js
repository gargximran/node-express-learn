import express from 'express'

import {index_controller} from '../controllers/index.js'

export const router = express.Router();



router.get('/', index_controller);


import express from 'express';
import {getCours, postCours, deleteCours, patchCours, putCours} from "./cours.controller";

const router = express.Router();

router.get('/', getCours);

router.post('/', postCours);

router.delete('/', deleteCours);

router.patch('/', patchCours);

router.put('/', putCours);

export default router;
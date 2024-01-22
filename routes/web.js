import express from 'express';
const router = express.Router();
import {studentController} from '../controllers/studentController.js';

//router.get('/edit', editController); // we want in this folder only to route the page that why i have wriiten code in homecontroller

router.get('/',studentController.getAllDoc) // it will use app.use('/student',web);
router.post('/', studentController.createDoc); // execute when form submit
router.get('/edit/:id', studentController.editDoc);
router.post('/update/:id', studentController.updateDocbyId);
router.post('/delete/:id', studentController.deleteDocbyId);
export default router;
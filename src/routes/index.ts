import { Router } from 'express';
import multer  from 'multer';

import * as HomeController from '../controllers/homeController';
import * as InfoController from '../controllers/infoController';
import * as UserController from '../controllers/userController';
import * as ApiController from '../controllers/apiController';
import * as PhraseController from '../controllers/phraseController';
import * as TodoController from '../controllers/todo.controller';

// const storageConfig = multer.diskStorage({
//     destination: (req, file, cb)=>{
//         cb(null,'./tmp')
//     },
//     filename:(req, file, cb)=>{
//         cb(null,file.fieldname + '.jpg');
//     }
// })

const upload = multer({
    // storage: storageConfig
    dest: './tmp',
    fileFilter:(req, file, cb)=>{
        const allowed: string[] = ['image/jpg', 'image/jpg', 'image/png'];
        cb(null, allowed.includes(file.mimetype));
    },
    limits:{fieldSize: 2000000}
})

const router = Router();

router.get('/', HomeController.home);
router.post('/novousuario', HomeController.novoUsuario);
router.post('/novafrase', PhraseController.createfrase);
router.get('/novafrase', PhraseController.listPhrases);
router.get('/novafrase/aleatoria', PhraseController.aletoriaFrase);
// router.post('/upload', upload.single('avatar'), PhraseController.uploadFile)

router.get('/novafrase/:id', PhraseController.getFraseid);
router.put('/novafrase/:id', PhraseController.updateFrase);
router.delete('/novafrase/:id', PhraseController.deleteFrase);

router.get('/todo', TodoController.all);
router.post('/todo', TodoController.add);
router.put('/todo/:id', TodoController.update);
router.delete('/todo/:id', TodoController.remove);









router.get('/contato', InfoController.contato);
router.get('/sobre', InfoController.sobre);
router.get('/ping', ApiController.ping );
router.get('/nome', UserController.nome);
router.get('/idade', UserController.idadeForm);
router.post('/idade-resultado', UserController.idadeAction);

export default router;
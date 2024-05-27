import express from 'express';
import { userSignup,userLogin } from '../Controller/user-controller.js';
import {getProducts,getProductById} from '../Controller/product-controller.js';
const  router = express.Router();


router.post('/signupUser', userSignup);
router.post('/login', userLogin);
router.get('/products',getProducts);
router.get('/product/:id', getProductById)
export default router;

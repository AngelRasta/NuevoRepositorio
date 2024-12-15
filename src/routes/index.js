import {  Router } from "express"
import { title } from "process"
const router = Router()

router.get('/', (req, res) => res.render('index', { title: 'Saneakers Storage' }))


router.get('/Main', (req, res) => res.render('Main', { title: 'Saneakers Storage-Pricipal' }))


router.get('/Productos', (req, res) => res.render('Productos', { title: 'Saneakers Storage-Productos' }))


router.get('/Galeria', (req, res) => res.render('Galeria', { title: 'Saneakers Storage-Galeria' }))


router.get('/Conocenos', (req, res) => res.render('Conocenos', { title: 'Saneakers Storage-Conocenos' }))


router.get('/Carrito', (req, res) => res.render('Carrito', { title: 'Saneakers Storage-Carrito' }))

export default router
import { Router } from "express";
const router = Router();

// Carrito inicial vacío
let carrito = [];

// Ruta para la página principal
router.get('/', (req, res) => res.render('index', { title: 'Saneakers Storage', carrito }));

// Ruta para la página de Main
router.get('/Main', (req, res) => res.render('Main', { title: 'Saneakers Storage-Principal' }));

// Ruta para la página de Productos
router.get('/Productos', (req, res) => res.render('Productos', { title: 'Saneakers Storage-Productos' }));

// Ruta para la página de Galería
router.get('/Galeria', (req, res) => res.render('Galeria', { title: 'Saneakers Storage-Galeria' }));

// Ruta para la página de Conócenos
router.get('/Conocenos', (req, res) => res.render('Conocenos', { title: 'Saneakers Storage-Conocenos' }));

// Ruta para la página del carrito
router.get('/Carrito', (req, res) => {
    res.render('Carrito', { title: 'Saneakers Storage-Carrito', carrito });
});

// Ruta para agregar productos al carrito
router.post('/agregar', (req, res) => {
    const producto = req.body;
    carrito.push(producto);
    res.redirect('/Carrito'); // Redirigir al carrito después de agregar el producto
});

// Ruta para eliminar un producto del carrito
router.post('/eliminar', (req, res) => {
    const { index } = req.body;
    carrito.splice(index, 1); // Eliminar el producto del carrito
    res.redirect('/Carrito'); // Redirigir al carrito después de eliminar el producto
});

export default router;

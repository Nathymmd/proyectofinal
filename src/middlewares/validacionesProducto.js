const { check } = require('express-validator');

module.exports = [
    check('nombre').notEmpty().withMessage('Escribe tu nombre').trim(),
    check('precio').isInt({gt:0}).withMessage('Indica el precio'),
    check('cantidad').isFloat({min: 1, max: 100}).withMessage('Indica la cantidad, no podes superar las 100 unidades'),
    check('codigo').notEmpty().withMessage('Indica el codigo'),
    check('descripcion').notEmpty().withMessage('Escribi una breve descripcion del producto'),
    check('id_productoCat').isInt({gt:0}).withMessage('Indica una categoria'),
    check('desc2').notEmpty().withMessage('Escribi toda la informacion del producto'),    
    check('img').custom((value, { req }) => {
        if (req.fileError) {
            throw new Error('Adjunte una imagen válida');
        }

        // Verifica el tamaño del archivo
        if (!req.file) {
            throw new Error('No se ha cargado ninguna imagen.');
        }

        if (req.file.size >= (1024 * 1024 * 10)) {
            throw new Error('La imagen es demasiado grande. Debe ser menor a 10 megabytes.');
        }

        return true;
    }),
];
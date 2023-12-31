const products_controller = require('../controller/products_controller')
const upload = require('../img/storege')

function create_products_routes(app) {

    app.post('/upload', upload.single('image'), products_controller.upload);
    app.get('/img/:name', products_controller.images);
    app.get('/products',products_controller.all )
    app.get('/dataProducts/:id', products_controller.dataID)
    app.post('/products', products_controller.posts)
    app.put('/changProducts/:id',products_controller.changId)
    app.delete('/deleteProducts/:id',products_controller.deleteId)
    
}
 module.exports = {create_products_routes}
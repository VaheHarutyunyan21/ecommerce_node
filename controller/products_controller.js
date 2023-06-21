const {Product} = require('../models')
const fs = require('fs')


exports.upload=(req, res)=>{
    if(req.file){
        res.json(req.file)
    }else{
        res.json('failed to add image')
    }
};
exports.images=(req, res)=>{
    const image_name = req.params.name
    fs.readFile(`./img/${image_name}`, function (err, data) {
        if (err) {
            return res.send(err);
        } else {
            res.send(data);
        }
    });
};


exports.all=(req,res)=>{
    Product.findAll().then((prod)=>{
        res.json(prod)
    }).catch((err)=>{
        res.status(500).json({error: err.message})
    })
};


exports.dataID=(req,res)=>{
    const {id} = req.params;
    Product.findByPk(id)
    .then((prod)=>{
        res.status(201).json(prod)
    }).catch((err)=>{
        res.status(500).json({error: err.message})
    })
};


exports.posts=(req,res)=>{
    const {name,description,price,categoryId,img} = req.body;
    Product.create({name,description,price,categoryId,img})
    .then((prod)=>{
        res.status(201).json(prod)
    }).catch((err)=>{
        res.status(500).json({error: err.message})
    })
};

exports.changId=(req,res)=>{
    const {id} = req.params;
    const { name,description,price,categoryId} = req.body;
    Product.update({name,description,price,categoryId}, {where: {id}} )
    .then((prod)=>{
        res.status(201).json(prod)
    }).catch((err)=>{
        res.status(500).json({error: err.message})
    });

};

exports.deleteId= (req, res) => {
    const { id } = req.params;
    Product.destroy ({ where: {id}})
    .then((prod)=>{
        res.status(201).json(prod)
    }).catch((err)=>{
        res.status(500).json({error: err.message})
    })
}
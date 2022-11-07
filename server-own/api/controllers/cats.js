const express = require('express');
const router = express.Router();

// class
const Cat = require('../models/cat')

router.get('/', async (req, res) => {
    try {
        // fecth data from class cat method all()
        const cats = await Cat.all
        // return a response of cats object as json
        // inside {} cuz it is an object/key-value
        res.json({cats})
    } catch(err) {
        res.status(500).json({err})
    }
})

router.get('/:id', async (req, res) => {
    try {
        const cat = await Cat.findById( parseInt(req.params.id) )
        res.json(cat)
    } catch(err){
        res.status(404).json({err})
    }
})

// router.get('/allNames', async (req, res) => {
//     try{
//         const names = await Cat.getAllName()
//         res.json(names)
//     } catch(err){
//         res.status(404).json({err})
//     }
// })

router.post('/', async (req, res) => {
    try {
        const cat = await Cat.create(req.body.name, req.body.age)
        res.json(cat)
    } catch(err) {
        res.status(404).json({err})
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const cat = await Cat.findById(parseInt(req.params.id))
        const updatedCat = await cat.update(req.body.name, req.body.age)
        res.json({dog: updatedCat})
    } catch(err) {
        res.status(500).json({err})
    }
})

router.delete('/:id', async(req, res) => {
    try {
        // get the cat first by id then destroy
        const cat = await Cat.findById(parseInt(req.params.id))
        await cat.destroy()
        res.status(204).json('Cat deleted')
    } catch(err){
        res.status(500).json({err})
    }
})



module.exports = router;
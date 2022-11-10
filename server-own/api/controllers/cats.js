const express = require('express');
const router = express.Router();

const Cat = require('../models/cat')

const showAll = async (req, res) => {
    try {
        // fecth data from class cat method all()
        const cats = await Cat.all
        // return a response of cats object as json
        // inside {} cuz it is an object/key-value
        res.json({cats})
    } catch(err) {
        res.status(500).json({err})
    }
}

const showOne = async (req, res) => {
    try {
        const cat = await Cat.findById( parseInt(req.params.id) )
        res.json(cat)
    } catch(err){
        res.status(404).json({err})
    }
}

const create = async (req, res) => {
    try {
        const cat = await Cat.create(req.body.name, req.body.age)
        res.json(cat)
    } catch(err) {
        res.status(404).json({err})
    }
}

const update = async (req, res) => {
    try {
        const cat = await Cat.findById(parseInt(req.params.id))
        const updatedCat = await cat.update(req.body.name, req.body.age)
        res.json({dog: updatedCat})
    } catch(err) {
        res.status(500).json({err})
    }
}

const destroy = async (req, res) => {
    try {
        // get the cat first by id then destroy
        const cat = await Cat.findById(parseInt(req.params.id))
        await cat.destroy()
        res.status(204).json('Cat deleted')
    } catch(err){
        res.status(500).json({err})
    }
}

module.exports = { showAll, showOne, create, update, destroy };
const express = require('express');
const router = express.Router();

const Owner = require('../models/owner')

// owners show route
const showOne = async (req, res) => {
    try {
        const owner = await Owner.findById(parseInt(req.params.id))
        res.json(owner)
    } catch (err) {
        res.status(400).send({err})
    }
}

// owners cats route
const ownersCats = async (req, res) => {
    try {
        const owner = await Owner.findById(parseInt(req.params.id))
        //console.log(owner)
        const cats = await owner.cats
        //console.log(cats)
        res.json(cats)
    } catch(err) {
        res.status(404).send({err}) 
    }
}

module.exports = { showOne, ownersCats }
const express = require('express')
const router = express.Router()

const House = require('./../models/house.js')
const customError = require('./../../lib/custom_errors.js')

router.post('/houses', (req, res, next) => {
  const houseData = req.body.house
  House.create(houseData)
    .then(house => res.status(201).json({house: house}))
    .catch(next)
})

router.get('/houses', (req, res, next) => {
  House.find()
    .populate('owner')
    .then(houses => res.json({ houses: houses }))
    .catch(next)
})

router.get('/houses/:id', (req, res, next) => {
  const id = req.params.id
  House.findById(id)
    .populate('owner')
    .then(customError)
    .then(house => res.json({ house: house }))
    .catch(next)
})

router.patch('/houses/:id', (req, res, next) => {
  const id = req.params.id
  const houseData = req.body.restaurant
  House.findById(id)
    .then(customError)
    .then(house => house.update(houseData))
    .then(() => res.sendStatus(204))
    .catch(next)
})

router.delete('/houses/:id', (req, res, next) => {
  const id = req.params.id
  House.findById(id)
    .then(customError)
    .then(house => house.remove())
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router

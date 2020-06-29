const express = require('express')
const passport = require('passport')
const router = express.Router()

const House = require('./../models/house.js')
const customErrors = require('./../../lib/custom_errors.js')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership
const requireToken = passport.authenticate('bearer', { session: false })

router.post('/houses', requireToken, (req, res, next) => {
  // set owner of new example to be current user
  req.body.house.owner = req.user.id

  House.create(req.body.house)
    // respond to succesful `create` with status 201 and JSON of new "example"
    .then(house => {
      res.status(201).json({ example: house.toObject() })
    })
    // if an error occurs, pass it off to our error handler
    // the error handler needs the error message and the `res` object so that it
    // can send an error message back to the client
    .catch(next)
})

router.get('/houses', requireToken, (req, res, next) => {
  House.find()
    .populate('owner')
    .then(houses => res.json({ houses: houses }))
    .catch(next)
})

router.get('/houses/:id', requireToken, (req, res, next) => {
  const id = req.params.id
  House.findById(id)
    .populate('owner')
    .then(handle404)
    .then(house => res.json({ house: house }))
    .catch(next)
})

router.patch('/houses/:id', requireToken, (req, res, next) => {
  // if the client attempts to change the `owner` property by including a new
  // owner, prevent that by deleting that key/value pair
  delete req.body.house.owner

  House.findById(req.params.id)
    .then(handle404)
    .then(house => {
      // pass the `req` object and the Mongoose record to `requireOwnership`
      // it will throw an error if the current user isn't the owner
      requireOwnership(req, house)

      // pass the result of Mongoose's `.update` to the next `.then`
      return house.updateOne(req.body.house)
    })
    // if that succeeded, return 204 and no JSON
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

router.delete('/houses/:id', requireToken, (req, res, next) => {
  House.findById(req.params.id)
    .then(handle404)
    .then(house => {
      // throw an error if current user doesn't own `house`
      requireOwnership(req, house)
      // delete the house ONLY IF the above didn't throw
      house.deleteOne()
    })
    // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// no token for testing
router.get('/noToken/houses', (req, res, next) => {
  House.find()
    .populate('owner')
    .then(houses => res.json({ houses: houses }))
    .catch(next)
})

router.get('/noToken/houses/:id', (req, res, next) => {
  const id = req.params.id
  House.findById(id)
    .populate('owner')
    .then(handle404)
    .then(house => res.json({ house: house }))
    .catch(next)
})

module.exports = router

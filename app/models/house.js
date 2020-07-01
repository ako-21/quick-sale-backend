const mongoose = require('mongoose')

const houseSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  beds: {
    type: String,
    required: true
  },
  baths: {
    type: String,
    required: true
  },
  sqft: {
    type: String,
    required: true
  },
  askingprice: {
    type: String,
    required: true
  },
  closingdate: {
    type: String,
    required: true
  },
  closingattorney: {
    type: String
  },
  emdeposit: {
    type: String
  },
  listingphone: {
    type: String
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('House', houseSchema)

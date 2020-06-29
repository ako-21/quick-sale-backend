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
  askingprice: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('House', houseSchema)

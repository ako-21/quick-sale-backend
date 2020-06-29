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
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('House', houseSchema)

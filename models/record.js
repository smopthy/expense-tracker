const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RecordSchema = new Schema({
  name: String,
  category: String,
  date: String,
  amount: Number,
  totalAmount: String,
  categoryName: String,
  icon: String
})

module.exports = mongoose.model('Record', RecordSchema)

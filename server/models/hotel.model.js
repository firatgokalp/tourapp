const mongoose = require('mongoose');
/**
 * @swagger
 * definitions:
 *   Hotel:
 *     type: object
 *     properties:
 *       lat:
 *         type: string
 *       lon:
 *         type: string
 *       hotelname:
 *         type: string
 *       id:
 *         type: integer
 *       location:
 *         type: string
 *       img:
 *         type: string
 *       thumb:
 *         type: string
 *       star:
 *         type: integer
 *       concept:
 *         type: string
 *       price:
 *         type: integer
 *       url:
 *         type: string
 */
const HotelSchema = mongoose.Schema({
  lat: String,
  lon: String,
  hotelname: String,
  id: Number,
  location: String,
  img: String,
  thumb: String,
  star: Number,
  concept: String,
  price: Number,
  url: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Hotel', HotelSchema);

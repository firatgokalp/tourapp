const Hotel = require('../models/hotel.model.js');

// Create and Save a new Note
exports.create = (req, res) => {

};

// Retrieve and return all notes from the database.
exports.list = (req, res) => {
  Hotel.find()
  .then(hotels => {
      res.send(hotels);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while retrieving hotels."
      });
  });
};

// Find a single note with a noteId
exports.detail = (req, res) => {
  Hotel.findOne({ id: req.params.hotelId })
    .then(hotel => {
        if(!hotel) {
            return res.status(404).send({
                message: "Hotel not found with id " + req.params.hotelId
            });
        }
        res.send(hotel);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Hotel not found with id " + req.params.hotelId
            });
        }
        return res.status(500).send({
            message: "Error retrieving hotel with id " + req.params.hotelId
        });
    });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};

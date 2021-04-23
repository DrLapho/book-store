const Book = require("../models/book");

//adding a new book
exports.addBook = (req, res) => {
  Book.create(req.body).then((data) => {
    res.json(data);
  });
};
//get all books from the database
exports.getBooks = (req, res) => {
  Book.find({}).then((data) => {
    res.json(data);
  });
};
//delete a specific book
exports.deleteBook = (req, res) => {
  Book.findByIdAndRemove(req.params.id).then((data) => {
    res.json({
      message: data,
    });
  });
};

//edit a specific book
exports.editBook = (req, res) => {
  Book.findByIdAndUpdate(req.params.id, { $set: req.body }).then((data) => {
    res.json(data);
  });
};

//get one book
exports.getBook = (req,res)=>{
  Book.findById(req.params.id).then((data)=>{
    res.json(data);
  })
}
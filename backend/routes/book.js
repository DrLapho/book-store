const express = require("express"); // initializing express
const router = express.Router();
const book_controller = require("../controller/book");

router.post("/", book_controller.addBook);
router.get("/", book_controller.getBooks);
router.delete("/:id", book_controller.deleteBook);
router.put("/:id", book_controller.editBook);
router.get("/:id",book_controller.getBook);


module.exports = router;
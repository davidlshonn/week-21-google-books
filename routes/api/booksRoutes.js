// // in here we will set up the different controller functions on the routers
const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// // /api/books/ -> get request that finds all books in our db
// //-> post request which willl add a book to our db
router.route("/").get(booksController.findAll).post(booksController.create);
// api/books/:id
// //-> use the id to update a book in the db
// // -> use the id to remove a book from the db
// router
//   .route("/:id")
//   .get(postsController.findById)
//   .put(postsController.update)
//   .delete(postsController.remove);

module.exports = router;

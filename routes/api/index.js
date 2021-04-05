const router = require("express").Router();
const booksEndpoints = require("./booksRoutes");
const googleEndpoints = require("./googleRoute");

router.use("/books", booksEndpoints);
router.use("/google", googleEndpoints);

module.exports = router;

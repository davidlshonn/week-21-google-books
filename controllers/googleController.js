const axios = require("axios");

module.exports = {
  googleApiCall: function (request, response) {
    const { query: params } = request;
    console.log(request);
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=hunger")
      .then((results) =>
        results.data.items.filter(
          (result) =>
            result.volumnInfo.title &&
            result.volumeInfo.authors &&
            result.volumnInfo.imageLinks.thumbnail &&
            result.volumnInfo.description &&
            result.volumnInfo.saleInfo.buyLink
        )
      )
      .then((filteredBooks) => res.json(filteredBooks));
  },
};

import axios from "axios";

export default {
  getGoogleBooks: function (q) {
    console.log(q);
    return axios.get("/api/google", { params: { q: "title" + q } });
  },
};

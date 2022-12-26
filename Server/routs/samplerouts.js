const {
  addUser,unicqIdChecker,adduserData
} = require("../controller/samplecontroller");

const routes = [
  {
    method: "POST",
    url: "/users",
    handler: addUser,
  },
  {
    method: "POST",
    url: "/validater",
    handler: unicqIdChecker,
  },
  {
    method: "POST",
    url: "/adduserData",
    handler: adduserData,
  },
  
];
module.exports = routes;

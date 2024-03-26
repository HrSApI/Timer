const moment = require("moment");
const currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");

function Time() {
  console.log(currentTime);
}

module.exports = { Time };

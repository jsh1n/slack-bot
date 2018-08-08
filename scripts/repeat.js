// Description:
//   HelloWorld

var rm = require('../lib/removeHeader.js');

module.exports = function (robot) {
  robot.hear(/repeat;/i, res => {
    res.send(rm.removeHeader(res.message.toString()))
  })
};

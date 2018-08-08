// Description:
//   HelloWorld

module.exports = function (robot) {
  robot.hear(/hello/i, res => {
    res.send(`Hello,  @${res.message.user.name}`)
  })
};

// Description:
//   HelloWorld

module.exports = function (robot) {
  robot.hear(/hello/i, res => {
    res.send(`おはよう@${res.message.user.name}おにいちゃん！`)
  })
};

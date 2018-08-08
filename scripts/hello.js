// Description:
//   HelloWorld

module.exports = function (robot) {
  robot.hear(/hello/i, res => {
    res.send(res.random[`おはよう@${res.message.user.name}おにいちゃん！`, `うまる　まとめサイトの巡回で忙しいからだまってて！`]);
  })
};
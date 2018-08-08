// Description:
//   HelloWorld

module.exports = function (robot) {
  robot.hear(/おはよう/i, res => {
    res.send(res.random[`おはよう@${res.message.user.name}おにいちゃん！`, `うまる　まとめサイトの巡回で忙しいからだまってて！`]);
  })
  robot.hear(/こんにちは/i, res => {
    res.send(res.random[`うまる…きかーーん！！`, `うまる　まとめサイトの巡回で忙しいからだまってて！`]);
  })
  robot.hear(/こんばんわ/i, res => {
    res.send(res.random[`うまる…きかーーん！！`, `うまる　まとめサイトの巡回で忙しいからだまってて！`]);
  })
};
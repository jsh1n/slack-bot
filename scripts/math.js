// Description:
//   mathjax

var mathJax = require('mathjax-node-svg2png');
var fs = require("fs");
var rm = require('../lib/removeHeader.js');
var exec = require('child_process').exec;


module.exports = function (robot) {
	robot.hear(/tex;/i, res => {
		mathJax.config({
			MathJax: {
				// traditional MathJax configuration
			}
		});
		mathJax.start();

		mathJax.typeset({
			math: rm.removeHeader(res.message.toString()),
			format: "TeX", // "inline-TeX", "MathML",
			png: true,
			scale: 1.5
		}, function (data) {
			if (!data.errors) {
				var base64 = data.png.replace(/^data:image\/png;base64,/, "");
				fs.writeFileSync("math.png", base64, 'base64');
				var filename = 'math.png';
				var channel = res.message.rawMessage.channel;
				exec(`curl -F file=@${filename} -F channels=${channel} -F token=${process.env.HUBOT_SLACK_TOKEN} https://slack.com/api/files.upload`, (err, stdout, stderr) => {
					if (err) { console.log(err); }
					console.log(stdout);
				});
			}
		});
	})
};

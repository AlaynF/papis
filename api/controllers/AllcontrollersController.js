/**
 * AllcontrollersController
 *
 * @description :: Server-side logic for managing allcontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var contact_info = {};

module.exports = {

	render_contact: function (req, res) {
		res.view('contact', {
			error_message: ''
		});
	},

	render_info: function (req, res) {
		res.view('info', {
			error_message:''
		});
	},

	contactinfo: function (req, res) {
		var data = req.body;
		var nodemailer = require("nodemailer");
		var smtpTransport = nodemailer.createTransport('smtps://Alaynfernandez%40gmail.com:Alaynalayn78	@smtp.gmail.com');

		// nodemailer.createTransport("SMTP",{
		// 	service: "Gmail",  // sets automatically host, port and connection security settings
		// 	auth: {
		// 		user: "Alaynfernandez@gmail.com",
		// 		pass: "Supermario78"
		// 	}
		// });

		info = {
			fullname: data.data.fullname,
			email: data.data.email,
			message: data.data.message
		}

		if (!info.fullname || !info.email || !info.message) {
			res.json({
				success: false
			});

			return;
		}

		smtpTransport.sendMail({  //email options
			from: "Alayn Fernandez <Alaynfernandez@gmail.com>", // sender address.  Must be the same as authenticated user if using Gmail.
			to: info.email, // receiver
			subject: "Emailing with nodemailer", // subject
			html: "Hey " + info.fullname + ", thank you for the message!" // body
		}, function(error, response){  //callback
			if(error) {
				console.log(error);
			} else {
				console.log("Message sent.");
			}

			res.json({
				success: true
			});

			smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
		});
	}
}

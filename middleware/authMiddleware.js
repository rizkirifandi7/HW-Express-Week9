const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_KEY = process.env.JWT_KEY;

module.exports.authenticateUser = (req, res, next) => {
	const beareHeader = req.headers["authorization"];
	const token = beareHeader.split(" ")[1];

	if (!token) {
		return res.status(403).json({ message: "Unauthorized" });
	}

	jwt.verify(token, JWT_KEY, (err, user) => {
		if (err) {
			return res.status(403).json({ message: "Unauthorized" });
		}
		req.user = user;
		next();
	});
};

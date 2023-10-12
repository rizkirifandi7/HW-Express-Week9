const swaggerJsdoc = require("swagger-jsdoc");

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Movie API",
			version: "1.0.0",
			description: "API documentation using Swagger",
		},
		servers: [
			{
				url: "http://localhost:3000", // Sesuaikan dengan URL server Anda
				description: "Development Server",
			},
		],
		components: {
			securitySchemes: {
				bearerAuth: {
					type: "http",
					scheme: "bearer",
					bearerFormat: "JWT",
				},
			},
		},
		security: [
			{
				bearerAuth: [],
			},
		],
	},
	apis: ["./routes/*.js"], // Atur sesuai dengan rute yang ingin Anda dokumentasikan
};

const specs = swaggerJsdoc(options);

module.exports = specs;

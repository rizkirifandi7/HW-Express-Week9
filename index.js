const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const specs = require("./utils/swaggerConfig");
const movieRoutes = require("./routes/movieRoutes");
const userRoutes = require("./routes/userRoutes");
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Tentukan lokasi file log
const logStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), { flags: 'a' });

// Konfigurasi morgan untuk menulis log ke file
app.use(morgan('common', { stream: logStream }));

app.use(bodyParser.json());

app.use("/api/movies", movieRoutes);
app.use("/api/users", userRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

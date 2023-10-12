const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");
const { authenticateUser } = require("../middleware/authMiddleware");

/**
 * @swagger
 * /api/movies:
 *   get:
 *     summary: Get a list of movies with pagination.
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of movies to retrieve (default is 10).
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *         description: Number of movies to skip (default is 0).
 *     responses:
 *       200:
 *         description: A list of movies.
 *     tags:
 *       - movies
 */
router.get("/", movieController.getMovies);

/**
 * @swagger
 * /api/movies/{id}:
 *   get:
 *     summary: Get a movie by ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Movie ID
 *     responses:
 *       200:
 *         description: Get a movie by id.
 *     tags:
 *       - movies
 */
router.get("/:id", authenticateUser, movieController.getMovieById);

/**
 * @swagger
 * /api/movies:
 *   post:
 *     summary: Create a new movie.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               genres:
 *                 type: string
 *               year:
 *                 type: integer
 *     responses:
 *       201:
 *         description: The newly created movie.
 *     tags:
 *       - movies
 */
router.post("/", authenticateUser, movieController.createMovie);

/**
 * @swagger
 * /api/movies/{id}:
 *   delete:
 *     summary: Delete a movie by ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Movie ID
 *     responses:
 *       200:
 *         description: The deleted movie.
 *     tags:
 *       - movies
 */
router.delete("/:id", authenticateUser, movieController.deleteMovie);

/**
 * @swagger
 * /api/movies/{id}:
 *   put:
 *     summary: Update a movie by ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Movie ID
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               genres:
 *                 type: string
 *               year:
 *                 type: integer
 *     responses:
 *       200:
 *         description: The updated movie.
 *     tags:
 *       - movies
 */
router.put("/:id", authenticateUser, movieController.updateMovie);

module.exports = router;

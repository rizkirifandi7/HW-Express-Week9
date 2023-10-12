const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Register a new user.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               gender:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       201:
 *         description: The newly registered user.
 *     tags:
 *       - users
 */
router.post("/register", userController.registerUser);

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login as a user and obtain a JWT token.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: A JWT token for authenticated access.
 *     tags:
 *       - users
 */
router.post("/login", userController.loginUser);

module.exports = router;

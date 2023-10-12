const Movie = require("../models/movieModel");

// Mendapatkan daftar film dengan paginasi
const getMovies = async (req, res) => {
	try {
		const limit = req.query.limit || 10;
		const offset = req.query.offset || 0;

		const movies = await Movie.getMovies(limit, offset);
		res.json(movies);
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error!" });
	}
};

// Membuat film baru
const createMovie = async (req, res) => {
	try {
		const { title, genres, year } = req.body;
		const newMovie = await Movie.createMovie(title, genres, year);
		res.json(newMovie);
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error!" });
	}
};

// Menghapus film
const deleteMovie = async (req, res) => {
	try {
		const id = req.params.id;
		const deletedMovie = await Movie.deleteMovie(id);
		res.json({ message: "Data berhasil terhapus!", deletedMovie });
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error!" });
	}
};

// Memperbarui film
const updateMovie = async (req, res) => {
	try {
		const id = req.params.id;
		const { title, genres, year } = req.body;
		const updatedMovie = await Movie.updateMovie(id, title, genres, year);
		res.json({ message: "Data berhasil diupdate!", updatedMovie });
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error!" });
	}
};

module.exports = { getMovies, createMovie, deleteMovie, updateMovie };

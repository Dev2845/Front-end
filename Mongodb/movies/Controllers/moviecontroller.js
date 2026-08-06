const movie = require("../Model/Movie")

const createmovie = async (req, res) => {
  try {
    const movies = await movie.create(req.body);

    res.status(201).json(movies);
  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

//   get all movies

const getmovies = async (req, res) => {
  try {
    const data = await movie.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// get single movie

const getmoviebyId = async (req, res) => {
  try {
    const movies = await movie.findById(req.params.id);
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updatemovie = async (req, res) => {
  try {
    await movie.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      message: "Updated",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// delete movie

const deletemovie = async (req, res) => {
  try {
    await movie.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const categoryFind = async (req, res) => {
  try {
    const catagory = req.query.catagory

    const movies = await movie.find({ catagory })

    res.status(200).json(movies);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createmovie, getmoviebyId, getmovies, updatemovie, deletemovie, categoryFind
}
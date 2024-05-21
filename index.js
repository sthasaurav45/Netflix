import express from "express";
const app = express();

// to make app understand json
app.use(express.json());

// routes
app.get("/say-hello", (req, res) => {
  console.log(req);
  return res.status(200).send("hello");
});

// add movie
let movieList = [];
app.post("/movie/add", (req, res) => {
  // extract new movie from req.body

  const newMovie = req.body;
  //   add new movie to movieList
  movieList.push(newMovie);
  //   send response
  return res.status(200).send({ message: "movie is added successfully" });
});

// get movies
app.get("/movie/list", (req, res) => {
  return res.status(200).send({ message: "sucess", movies: movieList });
});

// delete a movie
// app.delete
// network port and server

const PORT = 8001;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getMovie, saveMovie } from "../fakeMovieService";
import { genres } from "../fakeGenreService";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    errors: {},
  };

  schema = {
    title: Joi.string().label("Title"),
    genreId: Joi.string().label("Gerne"),
    numberInStock: Joi.number().min(0).max(100).label("Number in Stock"),
    dailyRentalRate: Joi.number().min(0).max(10).label("Daily Rental Rate"),
  };

  componentDidMount() {
    console.log(this.props);

    const movieId = this.props.match.params.id;
    if (movieId === "new") return;

    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace("/not-found");

    this.setState({ data: this.makeModel(movie) });
  }

  makeModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  doSubmit = () => {
    
    saveMovie(this.state.data);

    this.props.history.push("/movies")
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId","Genre", "Select Genre", genres )}
          {this.renderInput("numberInStock", "Number In Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButtom("Add")}
        </form>
      </div>
    );
  }
}

export default MovieForm;

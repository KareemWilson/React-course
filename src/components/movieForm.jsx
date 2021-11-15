import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getMovie } from "../fakeMovieService";
import { genres } from "../fakeGenreService";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genre: "",
      numberInStock: "",
      rate: "",
    },
    errors: {},
  };

  schema = {
    title: Joi.string().label("Title"),
    genre: Joi.string().label("Gerne"),
    numberInStock: Joi.number().min(0).max(100).label("Number in Stock"),
    rate: Joi.number().min(0).max(10).label("Rate"),
  };

  componentDidMount() {
    const movieId = this.props.match.params.id;
    if (movieId === "new") return;

    const movie = getMovie(movieId);
    if (!movie) this.props.history.replace("/not-found");
  }

  doSubmit() {
    console.log("submitttttt");
  }

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("Genre", "Select Genre", genres, "genre")}
          {this.renderInput("numberInStock", "Number In Stock")}
          {this.renderInput("rate", "Rate")}
          {this.renderButtom("Add")}
        </form>
      </div>
    );
  }
}

export default MovieForm;

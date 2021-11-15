import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getMovie } from "../fakeMovieService";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genre: "",
      numberInStock: "",
      rate: "",
    },
    errors: {},
    movie: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
  };

  componentDidMount() {
    const movieId = this.props.match.params.id;
    if (movieId === "new") return;

    const movie = getMovie(movieId);
    if (!movie) this.props.history.replace("/not-found");
    else this.setState({ movie });
  }

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("genre", "Genre")}
          {this.renderInput("numberInStock", "Number In Stock")}
          {this.renderInput("rate", "Rate")}
          {this.renderButtom("Add")}
        </form>
      </div>
    );
  }
}

export default MovieForm;

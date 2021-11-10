import React from "react";
// creating CreateVideoGame class
class CreateVideoGame extends React.Component {
  state = {
    newVideoGame: "",
    newGameHero: "",
  };

  handleChange = (e) => {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createVideoGame(this.state.newVideoGame, this.state.newGameHero);
    this.setState({
      newVideoGame: "",
      newGameHero: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            onChange={this.handleChange}
            className="form-control"
            placeholder="Enter a favorite video game"
            value={this.state.newVideoGame}
            name="newVideoGame"
          />
          <input
            onChange={this.handleChange}
            className="form-control"
            placeholder="Enter your favorite hero to play as in that game"
            value={this.state.newGameHero}
            name="newGameHero"
          />
          <button type="submit" className="btn btn-primary form-control">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default CreateVideoGame;

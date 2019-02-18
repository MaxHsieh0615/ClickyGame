import React, { Component } from "react";
import PlayerCard from "./components/PlayerCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import players from "./players.json";
import $ from 'jquery';

class App extends Component {
  // Setting this.state.players to the players json array
  state = {
    players,
    message:"Do not click the same picture twice or you lose.",
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.players.forEach(player => {
      player.count = 0;
    });
    this.setState({
      message: "You lost!",
      score: 0});
    return true;
  }

  randomPlayer = id => {
    this.state.players.find((o, i) => {
      if (o.id === id) {
        if(players[i].count === 0){
          players[i].count = players[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.players.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }

  // Map over this.state.players and render a PlayerCard component for each player object
  render() {
    return (
      <Wrapper>
        <Title message={this.state.message} score={this.state.score} highscore={this.state.highscore}>Slam Dunk Clicky Game</Title>
        {this.state.players.map(player => (
          <PlayerCard
            randomPlayer={this.randomPlayer}
            id={player.id}
            key={player.id}
            image={player.image}
          />
        ))}
      </Wrapper>
    );
  }
}

$(document).click(function shake() {
  $("#msg").effect("shake");
});

export default App;

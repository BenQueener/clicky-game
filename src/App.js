import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import bots from "./cards.json";
import "./App.css";

// import bombshell from "./images/bombshell.PNG"
// import bumblebee from "./images/bumblebee.PNG"
// import devistator from "./images/devistator.PNG"
// import grimlock from "./images/grimlock.PNG"
// import kickback from "./images/kickback.PNG"
// import megatron from "./images/megatron.PNG"
// import Menasour from "./images/Menasour.PNG"
// import optimus from "./images/optimus.PNG"
// import sideswipe from "./images/sideswipe.PNG"
// import soundwave from "./images/soundwave.PNG"
// import starscream from "./images/starscream.PNG"
// import wheeljack from "./images/wheeljack.PNG"

class App extends Component {
  // Setting this.state.bots to the cards json array
  state = {
    bots,
    clickedBotsIds: [],
    score: 0,
    goal: 12,
    status: ""
  };

  //shuffle the cards in the browser when clicked
  shuffleScoreCard = id => {
    let clickedBotsIds = this.state.clickedBotsIds;

    if(clickedBotsIds.includes(id)){
      this.setState({ clickedBotsIds: [], score: 0, status:  "You Lose." });
      return;
    }else{
      clickedBotsIds.push(id)

      if(clickedBotsIds.length === 12){
        this.setState({score: 12, status: "You Won.", clickedBotsIds: []});
        console.log('You Win');
        return;
      }

      this.setState({ bots, clickedBotsIds, score: clickedBotsIds.length, status: " " });

      for (let i = bots.length - 1; i > 0; i--) {
        //creates a random number between 1 and the length of the number of cards I have
        let j = Math.floor(Math.random() * (i + 1));
        //switch the current location of the bot with a random location in the array
        [bots[i], bots[j]] = [bots[j], bots[i]];
      }
    }
  }

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clicky Game</h1>
          <p className="App-intro">
            Don't click the image more than once.
          </p>
        </header>
        <Score total={this.state.score}
               goal={12}
               status={this.state.status}
               />
        <Wrapper>
          {this.state.bots.map(robot => (
            <Card
              shuffleScoreCard={this.shuffleScoreCard}
              id={robot.id}
              key={robot.id}
              image={robot.image}
            />
          ))}
        </Wrapper>
    </div>
    );
  }
}

export default App;
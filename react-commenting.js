// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1.      userInput is an empty string to be updated to what the user types into the input box

    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2. robot function that updates the userinput to be whatever is typed into the input box
    this.setState({ userInput: e.target.value})
  }

  render(){
    // 3. destructuring userInput
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4. onChange the funtion robot is called to update the text */}
          onChange={ this.robot }
          {/* 5. the vaue of the text is the updated userInput, or whatever the user has typed into the input box*/}
          value={ userInput }
        />

        <div>
          {/* 6. GoodRobot component */}
          <GoodRobot
            {/* 7. passing the props of the userInput to the good robot */}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8. inside the good robot component
      <div>
        <h3>Good Robot</h3>
        {/* 9. this is what the good robot says, it includes the props of userInput*/}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10.
export default GoodRobot

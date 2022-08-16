import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// NO ARROW FUNCTION
// class Square extends React.Component {
//     render() {
//       return (
//         <button className="square" onClick={function() { console.log('click'); }}>
//           {this.props.value}
//         </button>
//       );
//     }
//   }

// ARROW FUNCTION
class Square extends React.Component {
    /* In the constructor body of a derived class (with extends), the super keyword may appear 
    as a "function call" (super(...args)), which must be called before the this keyword is used, 
    and before the constructor returns. It calls the parent class's constructor and binds the 
    parent class's public fields, after which the derived class's constructor 
    can further access and modify this.*/
    constructor(props) {
        super(props);
        this.state = {
          value: null,
        };
      }

    /*By calling this.setState from an onClick handler in the Square’s render method, we tell 
    React to re-render that Square whenever its <button> is clicked. After the update, the Square’s 
    this.state.value will be 'X', so we’ll see the X on the game board. If you click on any Square, 
    an X should show up.When you call setState in a component, React automatically updates the 
    child components inside of it too.*/
    render() {
      return (
        <button 
          className="square" 
          onClick={() => this.setState({value: 'X'})}
        >
          {this.state.value}
        </button>
      );
    }
   }

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

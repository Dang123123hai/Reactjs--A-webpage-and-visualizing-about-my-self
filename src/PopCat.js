import React from "react";
import a from './PopcatImg/open.png'
import b from './PopcatImg/close.png'
import c from './App.css'
class PopCat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { s:b };
  }
  render() {
    return (
      <div>
        <img src={this.state.s} alt=''/><br></br>
        <button onClick={() => {
            this.setState({
              s:a
            })
          }}
        >
          Open
        </button>
        <button
          onClick={() => {
            this.setState({
              s:b
            })
          }}
        >
          Close
        </button>

      </div>
    );
  }
}
export default PopCat;
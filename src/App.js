import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  // 初期化処理で実行される
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    // setStateが実行されるとコールバックでrenderが実行される（状態をかえるときは必ずsetStateを使用する）
    this.setState({ count: this.state.count + 1 })
  }

  handleMinusButon = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButon}>-1</button>
      </React.Fragment>
    );
  }
}

export default App;

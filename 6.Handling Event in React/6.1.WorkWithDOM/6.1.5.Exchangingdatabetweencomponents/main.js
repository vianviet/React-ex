class ClickCounterButton extends React.Component {
  render() {
  return <button
  onClick={this.props.handler}
  className="btn btn-info">
  touch me!
  </button>
  }
}
class Counter extends React.Component {
  render() {
  return <span>Clicked {this.props.value} times.</span>
  }
}
class Example extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {counter: 0}
  }
  handleClick(event) {
    this.setState({counter: ++this.state.counter})
  }
  render() {
    return (
    <div>
    <ClickCounterButton handler={this.handleClick}/>
    <br/>
    <Counter value={this.state.counter}/>
    </div>
    )
  }
} 
ReactDOM.render(
    <Example />, document.getElementById('content'))
class Example extends React.Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
    this.prompt = "Hello I'm Form, Input something !!"
  }
  submit(event) {
    let input = this.refs.input
    alert(ReactDOM.findDOMNode(input).value)
  }
  render() {
    return (
    <div className="well">
      <p>{this.prompt}</p>
      <input type="text" ref="input"name="input" defaultValue="Input some thing in here"/>
      <button onClick={this.submit}>Submit</button>
  </div>
    )
  }
}
ReactDOM.render(<Example />, document.getElementById('content'))
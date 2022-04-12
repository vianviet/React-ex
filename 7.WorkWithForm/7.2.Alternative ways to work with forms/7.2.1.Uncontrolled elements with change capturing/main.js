class Example extends React.Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {textbook: ''}
  }
  handleChange(event) {
  console.log(event.target.value)
  this.setState({textbook: event.target.value})
  }
  render() {
    return <div>
      <input
        type="text"
        onChange={this.handleChange}
        placeholder="Example" 
      />
      <br/>
    <span>{this.state.textbook}</span>
    </div>
  }
}
ReactDOM.render(<Example />, document.getElementById('content'))
class Example extends React.Component {
  constructor(props) {
    super(props)
      this.state = {selectedValue: 'node'}
      this.handleSelectChange = this.handleSelectChange.bind(this)
  } 
  handleSelectChange(event) {
    this.setState({selectedValue: event.target.value})
  }
  render() {
  return <form>
  <select
  value={this.state.selectedValue}
  onChange={this.handleSelectChange}>
  <option value="ruby">Ruby</option>
  <option value="node">Node</option>
  <option value="python">Python</option>
  </select>
  </form>
  }
}
ReactDOM.render(
    <Example />, document.getElementById('content'))
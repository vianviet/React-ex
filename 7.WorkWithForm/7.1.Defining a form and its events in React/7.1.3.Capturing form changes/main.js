class Example extends React.Component {
  handleChange(event) {
    console.log(event.target.value)
  }
  render() {
    return <input
    type="text"
    onChange={this.handleChange}
    defaultValue="Napaglobal"/>
  }
}
ReactDOM.render(
    <Example />, document.getElementById('content'))
class Example extends React.Component {
  handleKeyUp(event) {
    if (event.keyCode == 13) {
      return this.sendData()
    }   
  }
  render() {
    return <form onKeyUp={this.handleKeyUp}>
      <input type="text" name="email" />
    </form>
  }
}
ReactDOM.render(
    <Example />, document.getElementById('content'))
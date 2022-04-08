class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        textareaChange: "",
        buttonClick : "",
        mouseOver: "",
        color : "white"
      };
      this.mouseOver = this.mouseOver.bind(this)
    }
    changeText(e) {
      this.setState({
        textareaChange: e.target.value
      });
    }
    mouseOver() {
      this.setState({
        mouseOver: this.state.mouseOver + "listening...",
        color: "Red",
      });
    }
    render() {
      return (
        <div style={{marginTop: "5%","background-color": "yellow"}}>
          <button
            onClick={() => {
              this.setState({
                buttonClick: this.state.buttonClick + "Click..."
              });
            }}
          >
            Click me..
          </button>{" "}
         
          <p>
            button: <code>{this.state.buttonClick}</code>
          </p>
          <hr />
          <textarea onChange={e => this.changeText(e)} placeholder="Put some thing in"></textarea>
          <p>
            textarea: <code>{this.state.textareaChange}</code>
          </p>
   
          <hr />
          <h6 style={{"background-color" : this.state.color}} onMouseOver={this.mouseOver}>Hover on me</h6>
          <p>
            mouseOver: <code>{this.state.mouseOver}</code>
          </p>
        </div>
        );
    }
}
ReactDOM.render(
    <Example />, document.getElementById('content'))
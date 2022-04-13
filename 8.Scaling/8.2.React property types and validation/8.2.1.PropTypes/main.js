class Example extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>{this.props.prompt}</p>
        <input type="text" name="input" defaultValue={this.props.value} />
        <button>Click</button>
      </div>
    );
  }
}
Example.defaultProps = { value: "Input some thing here", prompt: "Hello" };
Example.propTypes = {
  name: PropTypes.string,
  prompt: PropTypes.number,
};
ReactDOM.render(<Example />, document.getElementById("content"));

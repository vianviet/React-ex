class Mouting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "none",
    };
  }
  componentWillMount() {
    setTimeout(() => this.setState({ text: "will mount" }), 3000);
  }
  componentDidMount() {
    setTimeout(() => this.setState({ text: "did mount" }), 2000);
  }

  render() {
    return (
      <div>
        <p>{this.state.text}</p>
      </div>
    );
  }
}
ReactDOM.render(<Mouting />, document.getElementById("content"));

import Hello from "./Hello";

class Dad extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {React.Children.map(this.props.children, (child) => (
          <Hello />
        ))}
      </div>
    );
  }
}
ReactDOM.render(
  <Dad>{["Hello Son", "Hello Dad"]}</Dad>,
  document.getElementById("content")
);

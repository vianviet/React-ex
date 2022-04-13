class Button extends React.Component {
  render() {
    return <button className="btn">{this.props.buttonLabel}</button>;
  }
}
Button.defaultProps = { buttonLabel: "Submit" };
Button.propTypes = {
  handler: PropTypes.func.isRequired,
  title: PropTypes.string,
  email(props, propName, componentName) {
    let emailRegularExpression =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!emailRegularExpression.test(props[propName])) {
      return new Error("Email validation failed!");
    }
  },
};

class Content extends React.Component {
  render() {
    let number = 1;
    return (
      <div>
        <Button buttonLabel="Start" />
        <Button />
        <Button title={number} />
        <Button />
        <Button email="not-a-valid-email" />
        <Button email="hi@azat.co" />
      </div>
    );
  }
}

ReactDOM.render(<Content />, document.getElementById("content"));

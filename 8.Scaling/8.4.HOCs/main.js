class H1Element extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>{this.props.children}</h1>;
  }
}
class Label extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <label>{this.props.children}</label>;
  }
}
function HOCfunc(WrapItem, message) {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <WrapItem> {message} </WrapItem>
        </div>
      );
    }
  };
}
const NewH1 = HOCfunc(H1Element, "Hello I'm H1 element");
const Newlabel = HOCfunc(Label, "Hello I'm Label");
ReactDOM.render(
  <div>
    <NewH1></NewH1>
    <br />
    <Newlabel></Newlabel>
  </div>,
  document.getElementById("content")
);

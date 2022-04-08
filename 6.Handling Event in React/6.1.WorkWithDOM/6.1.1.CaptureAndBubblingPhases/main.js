class Example extends React.Component {
  handle() {
    alert("I'm Parent");
  }
  handle1(event) {
    alert("I'm Child 1");
    event.stopPropagation();
  }
  handle2(event) {
    alert("I'm Child 2");
    event.stopPropagation();
  }
  handle3(event) {
    alert("I'm Child 3");
    event.stopPropagation();
  }
  render() {
    return (
        <div className="im-a-parent" onClick={this.handle}>
            <button className="im-a-child" onClick={this.handle1}>Child 1</button>
            <button className="im-a-child" onClick={this.handle2}>Child 2</button>
            <button className="im-a-child" onClick={this.handle3}>Child 3</button>
        </div>
    );
  } 
}
ReactDOM.render(
    <Example />, document.getElementById('content'))
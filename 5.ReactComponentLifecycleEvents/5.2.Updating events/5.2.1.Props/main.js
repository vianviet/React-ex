class Example extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(nextProps) {
        alert("Rewrite props text : " + nextProps.text);
    }
    render() {
        return (
            <div>
                <h1>{this.props.text}</h1>
            </div>
      );
    }
} 
ReactDOM.render(
      <Example text="hello mars" />, document.getElementById('content')
)
setTimeout( ()=> {
	ReactDOM.render(<Example text="Hello world" />,document.getElementById('content'));}, 10000);
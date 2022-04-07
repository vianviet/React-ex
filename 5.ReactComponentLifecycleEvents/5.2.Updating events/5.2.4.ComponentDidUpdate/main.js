class Example extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     time: (new Date()).toLocaleString()
        // };
        
    }
    componentWillReceiveProps(nextProps) {
        alert("Rewrite props text : " + nextProps.text);
    }  
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.text == nextProps.text) {
          alert("Props and state haven't changed, so I'm not gonna update!");
          return false;
        } else {
          alert("Okay fine I will update.");
          return true;
        }
    }
    componentWillUpdate(nextProps, nextState) {
        setTimeout(()=>{
            alert('ComponentWillUpdate is about to update!  Any second now!');
        },0);
    }
    componentDidUpdate(nextProps, nextState) {
        setTimeout(()=>{
            alert('ComponentDidUpdate now');
        },0);
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
      <Example text="hello mars"/>, document.getElementById('content')
)
setTimeout( ()=> {
	ReactDOM.render(<Example text="hello mars"/>,document.getElementById('content'));}, 5000);
setTimeout( ()=> {
	ReactDOM.render(<Example text="Hello world"/>,document.getElementById('content'));}, 10000);
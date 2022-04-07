class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: (new Date()).toLocaleString()
        };
    }
    updateTime = () => {
        this.setState({time: (new Date()).toLocaleString() });
    }
    componentWillUnmount() {
        setTimeout(()=>alert('Goodbye Clock'),0)
    }
    render() {
        return (
            <div>
                <p>Time: {this.state.time}</p>
                {setInterval(this.updateTime,100)}
                <br/>
                
            </div>
      );
    }
}
const Empty = () => {
    return <h1>This is empty</h1>
}
ReactDOM.render(
      <Time />, document.getElementById('content')
)
setTimeout( ()=> {
	ReactDOM.render(<Empty />,document.getElementById('content'));}, 5000);
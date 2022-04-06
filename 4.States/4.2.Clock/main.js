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
ReactDOM.render(
      <Time />, document.getElementById('content')
)
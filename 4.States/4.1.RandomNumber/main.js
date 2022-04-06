class Random extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            random: 0,
        };
    }
    
    changeNumber = () => {
        var r = Math.random();
        this.setState({random: r});
    }
    render() {
        return (
            <div>
                <p>Random number: {this.state.random}</p>
                <br/>
                <button type="button" onClick={this.changeNumber}>Change Number</button>
            </div>
      );
    }
} 
ReactDOM.render(
      <Random />, document.getElementById('content')
)
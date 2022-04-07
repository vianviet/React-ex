class Mouting extends React.Component {
    componentDidMount(){
       setTimeout(()=>alert("did mount action after rendered"),0)
    }
    componentWillMount(){
        alert("will mount action before render")
    }
    render() {
        return (
            <div>
                <p>Hello I'm Render</p>
            </div>
      );
    }
} 
ReactDOM.render(
      <Mouting />, document.getElementById('content')
)
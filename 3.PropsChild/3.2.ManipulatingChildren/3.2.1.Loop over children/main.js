class Dad extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return <div>
            {React.Children.map(this.props.children, child => <h1>{child}</h1>)}
        </div>
    }
}
ReactDOM.render( <Dad>{["Hello Son","Hello Dad"]}</Dad>,document.getElementById("content"))
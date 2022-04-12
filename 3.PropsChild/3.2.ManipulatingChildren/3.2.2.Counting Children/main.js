class GrandFather extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        console.log("Grand Father Use length props :" + this.props.children.length) // = 18 >>> False
        console.log("Grand Father Use count props :" + React.Children.count(this.props.children)) // = 1 >>> True 
        React.Children.count(this.props.children)
        return <div>
            {React.Children.map(this.props.children, child => <h1>{child}</h1>)}
        </div>
    }
}
class Dad extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        console.log("Dad Use length props :" + this.props.children.length) // = 3 >>> True
        console.log("Dad Use count props :" + React.Children.count(this.props.children)) // = 2 >>> False 
        React.Children.count(this.props.children)
        return <div>
            {React.Children.map(this.props.children, child => <h1>{child}</h1>)}
            <br/>
            <GrandFather>"Hello GrandSon"</GrandFather>
        </div>
    }
}
ReactDOM.render( <Dad>{["Hello Son","Hello Dad",() => "Hello Both"]}</Dad>,document.getElementById("content"))
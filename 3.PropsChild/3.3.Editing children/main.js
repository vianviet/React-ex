class RadioButton extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        console.log(this.props.name)
        return <div>
            <input type="radio" 
                        name={this.props.name} 
                        value={this.props.value} />
            <label>{this.props.value}</label>
        </div>
    }
}
class Example extends React.Component {
    constructor(props){
        super(props)
    }
    renderChildren() {
        console.log(this.props.name)
        return React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                name: this.props.name
            })
        });
    }
    render() {
        return <div>{this.renderChildren()}</div>
    }
}
ReactDOM.render( 
<Example name = "gender">
    <RadioButton value="Male" />
    <RadioButton value="Female" />
    <RadioButton value="Undefind" />
</Example>
,document.getElementById("content"))
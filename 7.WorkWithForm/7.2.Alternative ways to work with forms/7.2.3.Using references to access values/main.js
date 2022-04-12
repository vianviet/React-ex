class Example extends React.Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
    this.prompt = "Hello I'm Form, Input your email and comment"
  }
  submit(event) {
    let emailAddress = this.refs.emailAddress
    let comments = this.refs.comments
    console.log(ReactDOM.findDOMNode(emailAddress).value)
    console.log(ReactDOM.findDOMNode(comments).value)
  }
  render() {
    return (
    <div className="well">
      <p>{this.prompt}</p>
      <div className="form-group">
        Email: 
        <input ref="emailAddress" className="form-control"
        type="text" placeholder="hi@azat.co"
        />
      </div>
      <div className="form-group">
        Comments: <input ref="comments" className="form-control"
        placeholder="I like your website!"
        />
      </div> <br/>
      <div className="form-group">
        <a className="btn btn-primary" 
        value="Submit"
        onClick={this.submit}>Submit
        </a>
      </div>
  </div>
    )
  }
}
ReactDOM.render(<Example />, document.getElementById('content'))
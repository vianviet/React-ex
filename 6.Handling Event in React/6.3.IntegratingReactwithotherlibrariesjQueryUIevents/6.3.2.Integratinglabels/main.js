class Example extends React.Component {
  constructor(props) {
    super(props)
      this.handleSlide = this.handleSlide.bind(this)
      this.state = {sliderValue: 0}
  }
  handleSlide(event) {
    this.setState({sliderValue: event.detail.ui.value})
  }
  componentDidMount() {
    window.addEventListener('slide', this.handleSlide)
  }
  componentWillUnmount() {
    window.removeEventListener('slide', this.handleSlide)
  }
  render() {
    return <div className=""s >
      Value: {this.state.sliderValue}
    </div>
  }
}
let handleChange = (e, ui)=>{
  var slideEvent = new CustomEvent('slide', {
  detail: {ui: ui, jQueryEvent: e}
  })
  window.dispatchEvent(slideEvent)
  $( '#slider' ).slider({
  'change': handleChange,
  'slide': handleChange
  })
}
ReactDOM.render(
    <Example />, document.getElementById('content'))
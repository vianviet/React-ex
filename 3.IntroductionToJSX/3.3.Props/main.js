

// function
const AJSXfunction = (props) => <a href = { props.link } > { props.text } </a>

// class
class AJSXclass extends React.Component {
    render(props) {
        return <a href = { props.link } > { props.text } </a>
    }
}

ReactDOM.render(
    <AJSXfunction link = "https://napaglobal.com/" text = "Napaglobal" />,
    document.getElementById('content')
)
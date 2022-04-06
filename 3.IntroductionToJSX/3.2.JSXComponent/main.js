// Simple Component with function
function AJSX() {
    return <a href = "Napaglobal.com"> Napaglobal </a>
}

// Simple Component with arrow function
const AJSXArrow = () => <a href = "Napaglobal.com"> Napaglobal </a>


class Napaglobal extends React.Component {
    render() {
        return <a href = "Napaglobal.com"> Napaglobal </a>
    }
}

ReactDOM.render(
    <Napaglobal/>,
    document.getElementById('content')
)
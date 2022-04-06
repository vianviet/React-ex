let a = React.createElement('a', { href: "https://napaglobal.com/" }, 'Napaglobal')
class Napaglobal extends React.Component {
    render() {
        return React.createElement('div', null, a, a)
    }
}
ReactDOM.render(
    React.createElement(Napaglobal, null),
    document.getElementById('content')
)
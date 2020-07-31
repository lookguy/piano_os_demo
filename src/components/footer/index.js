import React from "react"

function footer(props) {
    const listItem = props.nav.map(item =>
        <React.Fragment>
            <li className="foot_nav">{item.name}</li>
        </React.Fragment>)
    return (
        <footer className="gq_footer">
            <ul>{listItem}</ul>
        </footer>
    )
}
export default footer
import reactLogo from '../images/react-icon-small.png'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="d-flex">
                <img src={reactLogo} className='nav-logo' alt="react" />
                <h1 className='nav-text'>ReactFacts</h1>
            </div>
            <div className="d-flex">
                <h2>React Course - Project 1</h2>
            </div>
        </nav>
    )
}
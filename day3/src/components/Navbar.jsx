


export default function Navbar({isDarkMode, toggleTheme}){
    return(
        <nav className="navbar">
            <h1>web dev</h1>

            <ul className="nav-links">
                <li>Home</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>

            <button onClick={toggleTheme}>
                {isDarkMode ? "Light mode" : "Dark mode"}
            </button>
        </nav>
    )
}
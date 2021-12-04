import './style.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <a href="/" className="main-link">
                    <h2 className="app-name">NoteMe</h2>
                </a>
                <p className="app-sub-name">A simple note taking app</p>
            </nav>
        </>
    )
}

export default Navbar;
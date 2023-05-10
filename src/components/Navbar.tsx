import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow" aria-label="Thirteenth navbar example" style={{ marginBottom: '75px' }}>
                <div className="container">
                    <Link className="navbar-brand" style={{ fontSize: '40px', fontWeight: 'bold', color: '#0C346F' }} to="/">Langapp</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
                        <ul className="navbar-nav col-lg-12 justify-content-lg-end">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Anasayfa</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/categories">Kategoriler</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/wordList">Kelimeler</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Profil</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Oturum Aç</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
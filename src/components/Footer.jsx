import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div className="container" style={{ marginTop: '100px' }}>
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p className="col-md-4 mb-0 text-body-secondary">&copy; 2023 Company, Inc</p>

                    <Link to="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    </Link>

                    <ul className="nav col-md-4 justify-content-end">
                        <li className="nav-item"><Link to="#" className="nav-link px-2">Anasayfa</Link></li>
                        <li className="nav-item"><Link to="#" className="nav-link px-2">Hakkımızda</Link></li>
                        <li className="nav-item"><Link to="#" className="nav-link px-2">İletişim</Link></li>
                        <li className="nav-item"><Link to="#" className="nav-link px-2">SSS</Link></li>
                        <li className="nav-item"><Link to="#" className="nav-link px-2">KVKK</Link></li>
                    </ul>
                </footer>
            </div>
        </div >
    )
}

export default Footer
import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
                    <h1 className="text-body-emphasis">404 NOT FOUND</h1>
                    <p className="col-lg-6 mx-auto my-4">
                        Meşhur sayfadasın. Muhtemelen olmak istediğin bir yerde değilsin.
                    </p>
                    <Link className="btn btn-primary px-5 mb-5" to="/">Anasayfa</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound;
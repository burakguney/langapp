import React from 'react'

const Levels = () => {
    return (
        <div>
            <div className="card text-center">
                <div className="card-header">
                    ---Lütfen İstediğiniz Seviyeyi Seçiniz---
                </div>
            </div>
            <br /><br />
            <div className="row">
                <div className="col-sm-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Seviye 1</h5>
                            <p className="card-text">Yiyecek ve İçecekler</p>
                            <a href="/game" className="btn btn-primary">Başla</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Seviye 2</h5>
                            <p className="card-text">Hayvanlar ve Kıyafeler</p>
                            <a href="/game" className="btn btn-primary">Başla</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Seviye 3</h5>
                            <p className="card-text">Ülkeler</p>
                            <a href="/game" className="btn btn-primary">Başla</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Seviye 4</h5>
                            <p className="card-text">Spor ve Sanat</p>
                            <a href="/game" className="btn btn-primary">Başla</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Levels
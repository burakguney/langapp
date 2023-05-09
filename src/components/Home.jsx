import React from 'react'
import edu from '../images/edu.svg'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className="row flex-md-row-reverse align-items-center">
                <div className="col-md-6">
                    <img src={edu} className="d-block mx-lg-auto img-fluid p-3" alt="Bootstrap Themes" loading="lazy" />
                </div>
                <div className="col-md-6 text-center p-3">
                    <h1 className="display-5 fw-bold lh-1 mb-5" style={{ color: '#F9A826' }}>Langapp'e Hoş geldin!</h1>
                    <p className="lead">İngilizce öğrenmenin eğlenceli bir yoluna hazır ol! Langapp, kelime dağarcığını geliştirmek ve dil öğrenmek isteyenler için harika bir seçenek. Oyun sırasında, Türkçe kelime bilginizi İngilizce'ye çevirerek ve İngilizce kelime bilginizi Türkçe'ye çevirerek hem öğrenme hem de eğlenme fırsatı bulacaksın. Zorluk seviyeleri arttıkça, daha da fazla kelime ve terim öğreneceksin.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-center">
                        <Link className="btn btn-outline-success shadow btn-lg px-4 me-md-2 mt-4" to="/categories">Haydi Başlayalım!</Link >
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home
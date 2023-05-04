import React from 'react'
import edu from '../images/edu.svg'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div class="row flex-lg-row-reverse align-items-center">
                <div class="col-lg-6">
                    <img src={edu} class="d-block mx-lg-auto img-fluid p-3" alt="Bootstrap Themes" loading="lazy" />
                </div>
                <div class="col-lg-6 text-center p-3">
                    <h1 class="display-5 fw-bold lh-1 mb-5" style={{ color: '#F9A826' }}>Langapp'e Hoş geldin!</h1>
                    <p class="lead">İngilizce öğrenmenin eğlenceli bir yoluna hazır ol! Langapp, kelime dağarcığını geliştirmek ve dil öğrenmek isteyenler için harika bir seçenek. Oyun sırasında, Türkçe kelime bilginizi İngilizce'ye çevirerek ve İngilizce kelime bilginizi Türkçe'ye çevirerek hem öğrenme hem de eğlenme fırsatı bulacaksın. Zorluk seviyeleri arttıkça, daha da fazla kelime ve terim öğreneceksin.</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-center">
                        <Link class="btn btn-primary shadow btn-lg px-4 me-md-2 mt-4" to="/levels">Haydi Başlayalım!</Link >
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home
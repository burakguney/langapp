import React from 'react'

const Game = () => {
    return (
        <div>
            <div className="p-3 text-center bg-body-white rounded">
                <h1 className="text-body-emphasis my-5">İngilizce Kelime</h1>
                <p className="col-lg-5 col-md-6 mx-auto fs-5 text-muted mb-5">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control text-center" placeholder="" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button class="btn btn-outline-warning btn-sm text-dark" type="button" id="button-addon2"><i class="fa-solid fa-lightbulb"></i></button>
                    </div>
                </p>
                <p>
                    İpucu
                </p>
                <br />
                <div className="my-5">
                    <div class="d-grid gap-2 col-lg-3 col-md-4 col-6 mx-auto">
                        <button class="btn btn-success" type="button">Kontrol Et</button>
                        <button class="btn btn-warning" type="button">Geç</button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Game
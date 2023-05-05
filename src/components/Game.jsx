import React, { useEffect, useState } from 'react'
import http from '../http-common';
import { useParams } from 'react-router-dom'

const Game = () => {
    const { id } = useParams();

    const [words, setWords] = useState([]);

    useEffect(() => {
        if (id) {
            getWordsByCategoryId(id);
        }
    }, [id]);

    const getWordsByCategoryId = (id) => {
        http.get(`/word/category/${id}`)
            .then(response => {
                setWords(response.data);
                console.log(response.data);
            }).catch(err => {
                console.log(err);
            })
    }

    const refresh = () => {
        if (id) {
            getWordsByCategoryId(id);
        }
    }

    return (
        <div>
            {
                words.length > 0 && (
                    <div className="p-3 text-center bg-body-white rounded">
                        <h1 className="text-body-emphasis my-5">{words[Math.floor(Math.random() * words.length)].english}</h1>
                        {words.map((word) => (
                            <button className="btn btn-primary m-2" type="button">{word.turkish}</button>
                        ))}
                        <br />
                        <div className="my-5">
                            <div class="d-grid gap-2 col-lg-3 col-md-4 col-6 mx-auto">
                                <button className="btn btn-warning" onClick={refresh} type="button">Geç</button>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default Game
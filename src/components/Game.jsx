import React, { useEffect, useState } from 'react'
import http from '../http-common';
import { useParams } from 'react-router-dom'

const Game = () => {
    const { id } = useParams();

    const [words, setWords] = useState([]);
    const [question, setQuestion] = useState(Object);
    const [message, setMessage] = useState("");


    useEffect(() => {
        if (id) {
            setTimeout(() => {
                getWordsByCategoryId(id);
            }, 2000);
        }
    }, [id]);

    const getWordsByCategoryId = (id) => {
        http.get(`/word/category/${id}`)
            .then(response => {
                const responseData = response.data;
                setWords(responseData);
                setQuestion(responseData[Math.floor(Math.random() * words.length)]);
                setMessage("");
            }).catch(err => {
                console.log(err);
            })
    }

    const refresh = (categoryId) => {
        if (categoryId) {
            getWordsByCategoryId(categoryId);
        }
    }

    const checkWord = (wordId) => {
        if (wordId === question._id) {
            setMessage("Yeni Kelime");
        } else {
            setMessage("Yanlış");
        }
    }

    return (
        <div>
            {
                words.length > 0 && question ? (
                    <div className="p-3 text-center bg-body-white rounded">
                        <h1 className="text-body-emphasis my-5">{question.english}</h1>
                        {words.map((word) => (
                            <button className="btn btn-outline-success m-1" type="button" onClick={() => checkWord(word._id)} key={word._id}>{word.turkish}</button>
                        ))}
                        <br />
                        {
                            message ? (
                                message === "Yeni Kelime" ?
                                    (<div>
                                        <button className="btn btn-success mt-5 shadow" onClick={() => refresh(question.category)} type="button">{message}</button>
                                    </div>
                                    ) :
                                    (<h4 className='mt-5'><span className="badge text-bg-danger">{message}</span></h4>)
                            ) : (
                                <h4 className="mt-5"><span className="badge text-bg-light">...</span></h4>
                            )
                        }
                    </div>
                ) : (<div class="d-flex justify-content-center">
                    <div class="spinner-grow" role="status">
                    </div>
                    <h3 className='mt-5'>Game Loading...</h3>
                </div>)
            }

        </div>
    )
}

export default Game
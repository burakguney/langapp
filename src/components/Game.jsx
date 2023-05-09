import React, { useCallback, useEffect, useState } from 'react'
import http from '../http-common';
import { useParams } from 'react-router-dom'

const Game = () => {
    const { categoryName } = useParams();

    const [words, setWords] = useState([]);
    const [question, setQuestion] = useState({});
    const [message, setMessage] = useState(null);

    const getWordsByCategory = useCallback(() => {
        http.get(`/word/category/${categoryName}`)
            .then(response => {

                if (response.status === 200) {
                    const responseData = response.data;
                    setWords(responseData);
                    setQuestion(responseData[Math.floor(Math.random() * responseData.length)]);
                }
                setMessage(null);
            }).catch(err => {
                console.log(err);
            })
    }, [categoryName])

    useEffect(() => {
        getWordsByCategory();
    }, [getWordsByCategory]);

    const checkWord = (wordId) => {
        if (wordId === question._id) {
            getWordsByCategory();
        } else {
            setMessage("Yanlış");
        }
    }

    return (
        <div>
            {
                <div className="p-3 text-center bg-body-white rounded">
                    <h1 className="text-body-emphasis my-5">{question.english}</h1>
                    {
                        words.map((word) => (
                            <button className="btn btn-outline-success m-1" type="button" onClick={() => checkWord(word._id)} key={word._id}>{word.turkish}</button>
                        ))
                    }
                    <br />
                    {
                        message && (
                            <label className="btn btn-danger my-5 disabled">{message} !</label>
                        )
                    }
                </div>
            }
        </div >
    )
}

export default Game
import { useCallback, useEffect, useState } from 'react'
import http from '../http-common';
import { useParams } from 'react-router-dom'

interface Word {
    _id: string;
    turkish: string;
    english: string;
}

const Game = () => {
    const { categoryName } = useParams();

    const [words, setWords] = useState<Word[]>([]);
    const [word, setWord] = useState<Word>(Object);
    const [message, setMessage] = useState<String>();

    const getWordsByCategory = useCallback(() => {
        http.get(`/word/category/${categoryName}`)
            .then(response => {
                if (response.status === 200) {
                    const responseData = response.data;
                    setWords(responseData);
                    setWord(responseData[Math.floor(Math.random() * responseData.length)]);
                }
                setMessage("");
            }).catch(err => {
                console.log(err);
            })
    }, [categoryName])

    useEffect(() => {
        getWordsByCategory();
    }, [getWordsByCategory]);

    const checkWord = (wordId: string) => {
        if (wordId === word._id) {
            getWordsByCategory();
        } else {
            setMessage("Yanlış");
        }
    }

    return (
        <div>
            {
                <div className="p-3 text-center bg-body-white">
                    <h1 className="text-body-emphasis mb-5 border p-5 col-lg-6 col-md-8 col-12 mx-auto rounded shadow">{word.english}</h1>
                    <br />
                    <div className="d-grid gap-2 col-lg-2 col-md-3 col-sm-4 col-8 mx-auto">
                        {
                            words.map((word) => (
                                <button className="btn btn-outline-success" type="button" onClick={() => checkWord(word._id)} key={word._id}>{word.turkish}</button>
                            ))
                        }
                    </div>
                    <br />
                    <div className='my-5'>
                        {
                            message ?
                                (
                                    <h4><span className="badge text-bg-danger">{message} !</span></h4>
                                )
                                :
                                (
                                    <h4><span className="badge disabled">.</span></h4>
                                )
                        }
                    </div>
                </div>
            }
        </div >
    )
}

export default Game
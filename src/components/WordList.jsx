import React, { useState, useCallback, useEffect } from 'react'
import http from '../http-common';
import { Link } from 'react-router-dom';

const WordList = () => {

    const [words, setWords] = useState([]);

    const getWords = useCallback(() => {
        http.get(`/word`)
            .then(response => {
                const responseData = response.data;
                setWords(responseData);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    useEffect(() => {
        getWords();
    }, [getWords]);

    return (
        <div>
            {
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Türkçe</th>
                                <th scope="col">İngilizce</th>
                                <th scope="col">Kategori</th>
                                <th scope="col">
                                    <Link className="btn badge btn-success" to="/addWord">Kelime Ekle</Link>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {words.map((word) => (
                                <tr key={word._id}>
                                    <td>{word.turkish}</td>
                                    <td>{word.english}</td>
                                    <td>{word.category.name}</td>
                                    <td>
                                        <Link className="btn badge btn-primary" to={`/editWord/${word._id}`}>Güncelle</Link>
                                        <Link className="btn badge btn-danger mx-2" to="/editWord">Sil</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}

export default WordList
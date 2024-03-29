import { useState, useCallback, useEffect } from 'react'
import http from '../../http-common';
import { Link } from 'react-router-dom';

interface Word {
    _id: string;
    turkish: string;
    english: string;
    category: {
        _id: string,
        name: string,
        description: string
    };
}

const WordList = () => {

    const [words, setWords] = useState<Word[]>([]);

    const getWords = useCallback(() => {
        http.get(`/word`)
            .then(response => {
                const responseData = response.data;
                setWords(responseData);

                console.log(responseData);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    const deleteWord = (id: string) => {
        http.delete(`/word/${id}`)
            .then(response => {
                getWords();
            }).catch(err => {
                console.log(err);
            })
    }

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
                                <th scope="col" className='text-center'>
                                    <Link className="btn badge btn-success" to="/addWord">Kelime Ekle</Link>
                                    <Link className="btn badge btn-warning mx-2" to="/categoryList">Kategoriler</Link>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {words.map((word) => (
                                <tr key={word._id}>
                                    <td>{word.turkish}</td>
                                    <td>{word.english}</td>
                                    <td>{word.category.name}</td>
                                    <td className='text-center'>
                                        <Link className="btn badge btn-primary" to={`/editWord/${word._id}`}>Güncelle</Link>
                                        <button className="btn badge btn-danger mx-2" onClick={() => deleteWord(word._id)}>Sil</button>
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
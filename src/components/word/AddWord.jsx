import React, { useState, useCallback, useEffect } from "react";
import http from "../../http-common";

const AddWord = () => {
    const initialWordState = {
        id: null,
        turkish: "",
        english: "",
        category: ""
    };
    const [word, setWord] = useState(initialWordState);
    const [submitted, setSubmitted] = useState(false);

    const [categories, setCategories] = useState([]);

    const getCategories = useCallback(() => {
        http.get("/category")
            .then(response => {
                setCategories(response.data);
            }).catch(err => {
                console.log(err);
            })
    }, [])

    useEffect(() => {
        getCategories();
    }, [getCategories]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setWord({ ...word, [name]: value });
    };

    const saveWord = () => {
        var data = {
            turkish: word.turkish.toLowerCase(),
            english: word.english.toLowerCase(),
            category: word.category
        };

        console.log(data);

        http.post("/word", data)
            .then(response => {
                setWord({
                    id: response.data.id,
                    turkish: response.data.turkish,
                    english: response.data.english,
                    category: response.data.category.name
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const newWord = () => {
        setWord(initialWordState);
        setSubmitted(false);
    };

    return (
        <div className="submit-form">
            {submitted ? (
                <div className="row">
                    <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-12 my-2">
                        <h4>You submitted successfully!</h4>
                        <button className="btn btn-success my-2" onClick={newWord}>
                            Add
                        </button>
                    </div>
                </div>
            ) : (
                <div className="row">
                    <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-12 my-2">
                        <label htmlFor="turkish" className="form-label"><strong>Turkish</strong></label>
                        <input
                            type="text"
                            className="form-control"
                            id="turkish"
                            required
                            value={word.turkish}
                            onChange={handleInputChange}
                            name="turkish"
                        />
                    </div>
                    <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-12 my-2">
                        <div className="form-group">
                            <label htmlFor="english" className="form-label"><strong>English</strong></label>
                            <input
                                type="text"
                                className="form-control"
                                id="english"
                                required
                                value={word.english}
                                onChange={handleInputChange}
                                name="english"
                            />
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-12 my-2">
                        <div className="form-group">
                            <label htmlFor="category" className="form-label"><strong>Category</strong></label>
                            <select className="form-select" value={word.category} name="category" onChange={handleInputChange} aria-label="Default select example">
                                <option selected>Kategoriler</option>
                                {
                                    categories.map((category) => (
                                        <option key={category._id} value={category._id}>{category.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-12 my-2">
                        <button onClick={saveWord} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                </div>
            )
            }
        </div >
    );
};

export default AddWord;
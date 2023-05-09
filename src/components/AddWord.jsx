import React, { useState } from "react";
import http from "../http-common";

const AddWord = () => {
    const initialWordState = {
        id: null,
        turkish: "",
        english: "",
        category: ""
    };
    const [word, setWord] = useState(initialWordState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setWord({ ...word, [name]: value });
    };

    const saveWord = () => {
        var data = {
            turkish: word.title,
            english: word.description,
            category: word.category
        };

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
                <div>
                    <h4>You submitted successfully!</h4>
                    <button className="btn btn-success" onClick={newWord}>
                        Add
                    </button>
                </div>
            ) : (
                <div>
                    <div className="form-group">
                        <label htmlFor="turkish">Turkish</label>
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

                    <div className="form-group">
                        <label htmlFor="english">English</label>
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

                    <button onClick={saveWord} className="btn btn-success">
                        Submit
                    </button>
                </div>
            )}
        </div>
    );
};

export default AddWord;
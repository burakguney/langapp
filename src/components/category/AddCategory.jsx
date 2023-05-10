import React, { useState } from "react";
import http from "../../http-common";

const AddCategory = () => {
    const initialCategoryState = {
        id: null,
        name: "",
        description: ""
    };
    const [category, setCategory] = useState(initialCategoryState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCategory({ ...category, [name]: value });
    };

    const saveCategory = () => {
        var data = {
            name: category.name.toLowerCase(),
            description: category.description.toLowerCase()
        };

        console.log(data);

        http.post("/category", data)
            .then(response => {
                setCategory({
                    id: response.data.id,
                    name: response.data.name,
                    description: response.data.description
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const newCategory = () => {
        setCategory(initialCategoryState);
        setSubmitted(false);
    };

    return (
        <div className="submit-form">
            {submitted ? (
                <div className="row">
                    <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-12 my-2">
                        <h4>You submitted successfully!</h4>
                        <button className="btn btn-success my-2" onClick={newCategory}>
                            Add
                        </button>
                    </div>
                </div>
            ) : (
                <div className="row">
                    <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-12 my-2">
                        <label htmlFor="name" className="form-label"><strong>Name</strong></label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            required
                            value={category.name}
                            onChange={handleInputChange}
                            name="name"
                        />
                    </div>
                    <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-12 my-2">
                        <div className="form-group">
                            <label htmlFor="description" className="form-label"><strong>Description</strong></label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                required
                                value={category.description}
                                onChange={handleInputChange}
                                name="description"
                            />
                        </div>
                    </div>

                    <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-12 my-2">
                        <button onClick={saveCategory} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                </div>
            )
            }
        </div >
    );
};

export default AddCategory;
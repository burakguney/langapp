import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import http from "../http-common";

interface Category {
    _id: string;
    name: string;
    description: string;
}

const Categories = () => {
    const [categories, setCategories] = useState<Category[]>([]);

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

    return (
        <div>
            <div className="card text-center">
                <div className="card-header">
                    Öğrenmek İstediğin Seviyeyi Seç!
                </div>
            </div>
            <br /><br />
            <div className="row">
                {
                    categories.map((category) => (
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-3" key={category._id}>
                            <div className="card text-center shadow">
                                <div className="card-body">
                                    <h5 className="card-title">{category.name}</h5>
                                    <p className="card-text">{category.description}</p>
                                    <Link to={`/game/category/${category.name}`} className="btn btn-success">Başla</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories
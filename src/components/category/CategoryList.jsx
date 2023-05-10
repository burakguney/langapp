import React, { useState, useCallback, useEffect } from 'react'
import http from '../../http-common';
import { Link } from 'react-router-dom';

const CategoryList = () => {

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

    const deleteCategory = (id) => {
        http.delete(`/category/${id}`)
            .then(response => {
                getCategories();
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            {
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Kategori Adı</th>
                                <th scope="col">Açıklama</th>
                                <th scope="col" className='text-center'>
                                    <Link className="btn badge btn-success" to="/addCategory">Kategori Ekle</Link>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category) => (
                                <tr key={category._id}>
                                    <td>{category.name}</td>
                                    <td>{category.description}</td>
                                    <td className='text-center'>
                                        <Link className="btn badge btn-primary" to={`/editCategory/${category._id}`}>Güncelle</Link>
                                        <Link className="btn badge btn-danger mx-2" onClick={() => deleteCategory(category._id)}>Sil</Link>
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

export default CategoryList
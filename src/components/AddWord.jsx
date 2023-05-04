import React from 'react'
import Link from 'react-router-dom'

const AddWord = () => {
    return (
        <div>
            <table className="table table-striped ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Türkçe</th>
                        <th scope="col">İngilizce</th>
                        <th scope="col">Resim</th>
                        <th scope="col"><Link to="/addtoword"><button type="button" className="btn btn-info" >Yeni Kelime Ekle</button></Link></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Elma</td>
                        <td>Apple</td>
                        <td>Apple</td>
                        <td><Link to="/addtoword"><button type="button" className="btn btn-info" >Düzenle</button></Link></td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default AddWord
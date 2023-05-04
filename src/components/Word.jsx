import React from 'react'

const Word = () => {
    return (
        <div>
            <table className="table table-striped ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Türkçe</th>
                        <th scope="col">İngilizce</th>
                        <th scope="col">İpucu</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Elma</td>
                        <td>Apple</td>
                        <td>Bir meyve</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Word
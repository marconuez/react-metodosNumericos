import React from 'react'

export const TableBiseccion = ({calculos}) => {
    return (
        <table className="table text-nowrap table-hover ">
            <thead className="table-dark">
                <tr>
                    <th scope="col">Iteración</th>
                    <th scope="col">a</th>
                    <th scope="col">b</th>
                    <th scope="col">Xr</th>
                    <th scope="col">f(a)</th>
                    <th scope="col">f(b)</th>
                    <th scope="col">f(Xr)</th>
                    <th scope="col">f(a)*f(Xr)</th>
                    <th scope="col">|Ɛa|%</th>
                </tr>
            </thead>
            <tbody>
                {calculos.map(valores => (
                    <tr key={valores.n}>
                        <th scope="row">{valores.n}</th>
                        <th scope="row">{valores.a}</th>
                        <th scope="row">{valores.b}</th>
                        <td>{valores.xr}</td>
                        <td>{valores.fa}</td>
                        <td>{valores.fb}</td>
                        <td>{valores.fx}</td>
                        <td>{valores.ff}</td>
                        <td>{valores.ea}</td>
                    </tr>

                ))}
                
            </tbody>
        </table>
    )
}

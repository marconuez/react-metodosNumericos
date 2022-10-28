import React from 'react'

export const TableNewton = ({calculos}) => {
  return (
    <table className="table table-hover">
        <thead className="table-dark">
            <tr>
                <th scope="col">Iteración</th>
                <th scope="col">xi</th>
                <th scope="col">f(Xi)</th>
                <th scope="col">f'(Xi)</th>
                <th scope="col">|Ɛa|%</th>
            </tr>
        </thead>
        <tbody>
            {calculos.map(valores => (
                <tr key={valores.n}>
                    <th scope="row">{valores.n}</th>
                    <th scope="row">{valores.xi}</th>
                    <td>{valores.fx}</td>
                    <td>{valores.fdx}</td>
                    <td>{valores.ea}</td>
                </tr>

            ))}
            
        </tbody>
    </table>
  )
}

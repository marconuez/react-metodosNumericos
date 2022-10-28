import React from 'react'

export const Table = ({calculos}) => {
  return (
    <table className="table text-nowrap table-hover ">
        <thead className="table-dark">
            <tr>
                <th scope="col">Iteración</th>
                <th scope="col">xi</th>
                <th scope="col">g(Xi)</th>
                <th scope="col">|Ɛa|%</th>
            </tr>
        </thead>
        <tbody>
            {calculos.map(valores => (
                <tr key={valores.n}>
                    <th scope="row">{valores.n}</th>
                    <td>{valores.xi}</td>
                    <td>{valores.gx}</td>
                    <td>{valores.ea}</td>
                </tr>

            ))}
            
        </tbody>
    </table>
  )
}

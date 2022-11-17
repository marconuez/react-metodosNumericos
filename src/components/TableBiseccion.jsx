import React from 'react'

export const TableBiseccion = ({ calculos }) => {
    return (
        <>
            <div className='md:11/12 md:ml-5 mt-10 '>
                <div className='overflow-x-auto relative shadow-md rounded-lg mb-20'>
                    <table className='w-full text-sm text-left text-gray-100 dark:bg-indigo-600'>
                        <thead>
                            <tr className='text-md text-bold text-white uppercase bg-indigo-600'>
                                <th scope="col" className='py-3 px-6' >Iteración</th>
                                <th scope="col" className='py-3 px-6'>a</th>
                                <th scope="col" className='py-3 px-6'>b</th>
                                <th scope="col" className='py-3 px-6'>Xr</th>
                                <th scope="col" className='py-3 px-6'>f(a)</th>
                                <th scope="col" className='py-3 px-6'>f(b)</th>
                                <th scope="col" className='py-3 px-6'>f(Xr)</th>
                                <th scope="col" className='py-3 px-6'>f(a)*f(Xr)</th>
                                <th scope="col" className='py-3 px-6'>|Ɛa|%</th>
                            </tr>
                        </thead>
                        <tbody>
                            {calculos.map(valores => (
                                <tr key={valores.n} className='text-md text-gray-800 bg-white border-w dark:bg-white-800 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-300'>
                                    <th scope="row" className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-black' >{valores.n}</th>
                                    <th scope="row" className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-black'>{valores.a}</th>
                                    <th scope="row" className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-black'>{valores.b}</th>
                                    <td className='py-4 px-6'>{valores.xr}</td>
                                    <td className='py-4 px-6'>{valores.fa}</td>
                                    <td className='py-4 px-6'>{valores.fb}</td>
                                    <td className='py-4 px-6'>{valores.fx}</td>
                                    <td className='py-4 px-6'>{valores.ff}</td>
                                    <td className='py-4 px-6'>{valores.ea}</td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

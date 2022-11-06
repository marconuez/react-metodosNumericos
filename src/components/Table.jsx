import React from 'react'

export const Table = ({ calculos }) => {
    return (
        <div className='md:w-11/12 md:ml-5 mt-10'>
            <div className='overflow-x-auto relative shadow-md rounded-lg mb-20 animate__animated animate__fadeInRight'>
                <table className='w-full text-sm text-left text-gray-100 dark:text-gray-400'>
                    <thead>
                        <tr className='text-md text-bold text-white uppercase bg-gray-50 dark:bg-indigo-600 dark:text-white-200'>
                            <th scope="col" className='py-3 px-6'>Iteración</th>
                            <th scope="col" className='py-3 px-6'>xi</th>
                            <th scope="col" className='py-3 px-6'>g(Xi)</th>
                            <th scope="col" className='py-3 px-6'>|Ɛa|%</th>
                        </tr>
                    </thead>
                    <tbody>
                        {calculos.map(valores => (
                            <tr key={valores.n} className='text-md text-gray-800 bg-white border-w dark:bg-white-800 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-300'>
                                <th scope="row" className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-black'>{valores.n}</th>
                                <td className='py-4 px-6'>{valores.xi}</td>
                                <td className='py-4 px-6'>{valores.gx}</td>
                                <td className='py-4 px-6'>{valores.ea}</td>
                            </tr>

                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

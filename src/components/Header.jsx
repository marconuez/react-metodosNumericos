import React from 'react'

export const Header = ({title, number, handleInput, funcion}) => {
  return (
    <>
    <br />
      <div className=' md:w-11/12 lg:w-1/2 mx-5 mx-auto mt-10'  >     
            <form onSubmit={(event) => funcion(event)} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                <h2 className="font-black text-3xl text-center mb-4">{title}</h2>
                <hr />
                <h2 className='text-xl my-2'>Funciones</h2>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className="mb-5">
                            <label htmlFor="funcion" className="block text-gray-700 uppercase font-bold">F(X)=</label>
                            <input id="funcion" type="text" placeholder="Ingrese la funcion" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"  value='e^(-x)-x' disabled />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="funcionG" className="block text-gray-700 uppercase font-bold">G(X)=</label>
                            <input id="funcionG" type="text" placeholder="Ingrese la funcion" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"  value='e^(-x)' disabled />
                        </div>
                    </div>

                <h2 className='text-xl my-2'> N° de Cifras Significativas:</h2>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className="mb-5">
                            <label htmlFor="n" className="block text-gray-700 uppercase font-bold">n=</label>
                            <input id="n" type="number" placeholder="Cifras Significativas" className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={number.numeroIteraciones} onChange={handleInput} name="numeroIteraciones" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="es" className="block text-gray-700 uppercase font-bold">Es=</label>
                            <input id="es" type="number" placeholder="Criterio de tolerancia" className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={number.criterioTolerancia} onChange={handleInput} name="criterioTolerancia" disabled />
                        </div>
                    </div>

                    <div className="mb-5">
                        <input type="submit" className="bg-indigo-600 text-white font-bold uppercase rounded-md w-full p-3 my-2 hover:bg-indigo-700 cursor-pointer transition-colors" value="Calcular" />
                    </div>
            </form>
        </div>
    </>
  )
}

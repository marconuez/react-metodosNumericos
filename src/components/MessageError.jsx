import React, { useState } from 'react'

const MessageError = ({ errorMessage, setIsError }) => {


    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-sm">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="items-center justify-between pt-4 border-slate-200 rounded-t">
                            <h3 className="font-black text-3xl text-center mb-4">
                                Mensaje de Error
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setIsError(false)}
                            >
                                {/* <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span> */}
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                {errorMessage}
                            </p>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-slate-200 rounded-b">
                            <button
                                className="bg-indigo-600 text-white font-bold uppercase rounded-md w-full p-3 my-2 hover:bg-indigo-700 cursor-pointer transition-colors"
                                type="button"
                                onClick={() => setIsError(false)}
                            >
                                Aceptar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default MessageError

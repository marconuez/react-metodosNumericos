import React from 'react'

export const HeaderBis = ({title, number, funcion, handleInput}) => {
    return (
        <>
        <br />
        <h2>{title}</h2>
            <hr />

            <form onSubmit={(event) => funcion(event)}>
            <div className="row g-2 align-items-center">
                <div className="row">
                    <label htmlFor="inputPassword6" className="col-form-label">Funciones:</label>
                </div>
                
                <div className="col-4">
                    <div className="row">
                        <label htmlFor="inputPassword6" className="col-form-label">F(X)=</label>
                    </div>
                </div>
                <div className="col-8">
                    <input type="text" className="form-control mb-2" value={number.funcionString} onChange={handleInput} name="funcionString" required/>
                </div>
            </div>
            <hr />
            <div className="row g-2 align-items-center">
                <div className="row">
                    <label htmlFor="inputPassword6" className="col-form-label">Intervalos iniciales</label>
                </div>
                
                <div className="col-4">
                    <div className="row">
                        <label htmlFor="inputPassword6" className="col-form-label">a:</label>
                        <label htmlFor="inputPassword6" className="col-form-label">b:</label>
                    </div>
                </div>
                <div className="col-8">
                    <input type="text" className="form-control mb-2" value={number.IntervaloA} onChange={handleInput} name="IntervaloA" required/>
                    <input type="text" className="form-control mb-2" value={number.IntervaloB} onChange={handleInput} name="IntervaloB" required/>
                </div>
            </div>
            <hr />

                <div className="row g-2 align-items-center">
                    <div className="row">
                        <label htmlFor="inputPassword6" className="col-form-label">N° de Cifras Significativas:</label>
                    </div>
                    
                    <div className="col-1">
                        <div className="row">
                            <label htmlFor="inputPassword6" className="col-form-label">n=</label>
                        </div>
                    </div>
                    <div className="col-3">
                        <input type="text" className="form-control mb-2" value={number.numeroIteraciones} onChange={handleInput} name="numeroIteraciones" required/>
                        
                    </div>
                    
                    <div className="col-1">
                        <div className="row">
                            <label htmlFor="inputPassword6" className="col-form-label">Es=</label>
                        </div>
                    </div>
                    <div className="col-2">
                    <input type="text" className="form-control mb-2" value={number.criterioTolerancia} onChange={handleInput} name="criterioTolerancia" disabled/>
                    </div>
                    <div className="col-2">
                    
                        <div className="d-grid gap-2 ">
                            <button type='submit' className='btn btn-dark form-control'>Cálculo</button>
                        </div>
                    
                    </div>
                    
                </div>
                    
            </form>
        </>
    )
}

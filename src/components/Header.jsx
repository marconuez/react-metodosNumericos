import React from 'react'

export const Header = ({title, number, iscalculosfull, handleInput, funcion}) => {
  return (
    <>
    <br />
    <h2>{title}</h2>
        <hr />

        <div className="row g-2 align-items-center">
            <div className="row">
                <label htmlFor="inputPassword6" className="col-form-label">Funciones:</label>
            </div>
            
            <div className="col-4">
                <div className="row">
                    <label htmlFor="inputPassword6" className="col-form-label">F(X)=</label>
                    <label htmlFor="inputPassword6" className="col-form-label">G(X)=</label>
                </div>
            </div>
            <div className="col-8">
                <input type="text" className="form-control mb-2" value='e^(-x)-x' disabled/>
                <input type="text" className="form-control" value='e^(-x)' disabled/>
            </div>
        </div>
        <hr />
        <form onSubmit={(event) => funcion(event)}>

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
                {!iscalculosfull &&
                    <div className="d-grid gap-2 ">
                        <button type='submit' className='btn btn-dark form-control'>Cálculo</button>
                   </div>
                }
                </div>
                
            </div>

        
            
        </form>
    </>
  )
}

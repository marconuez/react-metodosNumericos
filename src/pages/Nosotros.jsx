import React, { useState } from 'react'
import "./styles/NosotrosStyle.css";
import marco from '../img/Marco.png'
import  rafa  from '../img/Rafa.png'
import  Mcgregor  from '../img/Mcgregor.png'
import { NavLink } from 'react-router-dom';

const personajes = [
  {
      id: 1,
      name: 'Marco Nunez',
      img: marco
  },
  {
      id: 2,
      name: 'rafa Molina',
      img: rafa
  },
  {
      id: 3,
      name: 'Johan Mcgregor',
      img: Mcgregor
  }
];


export const Nosotros = () => {
  const [selectAvatar, setSelectAvatar] = useState(personajes[0])
  const [isSelectedAvatar, setIsSelectedAvatar] = useState(false);


  const elijePersonaje = obj => {
    setSelectAvatar(obj)
    setIsSelectedAvatar(true)
    // const personajeElejido = personajes.filter(personajeState => personajeState.id === obj.id );
    // console.log(personajeElejido)
  }

  return (
      <div className='contenedorPrimario'>
        {
          selectAvatar && (
            <div className="circle">
              <img className='img' src={selectAvatar.img} alt="icono" />
              {/* <div class="wave"></div> */}
            </div>
          )
        }

        <div className="carta">
          <div className="contenedorWall">
            <h3 className='contenedorTexto'>Hola soy {selectAvatar.name} </h3>
          </div>

          <div className="buttonContenedor">
            <div className="buttonCentro">
              <h1 className='btnCentro'><NavLink  to="/playground">Empezar</NavLink></h1>
            </div>
          </div>


        {
          (!isSelectedAvatar) && (
            <div>
              <div className="headertitle">
                <h1 className='headerTexto'>Selecciona tu personaje</h1>
              </div>

              <div className="contenedorApps">
                <h3 onClick={() => elijePersonaje(personajes[2])} className='contenedorCadaApp'>McGregor</h3>
                <h3 onClick={() => elijePersonaje(personajes[1])} className='contenedorCadaApp'>Rafa</h3>
                <h3 onClick={() => elijePersonaje(personajes[0])} className='contenedorCadaApp'>Marco</h3>
              </div>

            </div>
          )
        }
        </div>
      </div>

     
  )
}

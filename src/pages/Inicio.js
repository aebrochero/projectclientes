import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer';


const Inicio = () => {

  const navigate = useNavigate();

  const handleOnClick = () => {
    alert("Ha finalizado la sesión correctamente - Retornando a login")
    navigate("/")
  }

  const [puerta,setPuerta]=useState(true)

  const handlePuerta = () => {setPuerta(!puerta)}
  
  return (
    
    <section className='w-full h-screen flex flex-col items-center'> 
      <div className='w-[1440px] h-full mt-2 px-2'>
        <div className='w-full h-20 border-input rounded-xl border-2 border-gray-500 flex items-center justify-between'>
          <Link to='/'>
          <img src="https://servitel.co/wp-content/uploads/2019/04/Mesa-de-trabajo-1@280x-8.png" className='h-16' alt="" /></Link>
          <p className='text-[40px] font-semibold italic'>BIENVENIDO USUARIO CLIENTES</p>
          <div className='flex'>
          <button onClick={handleOnClick}><img src="https://static.vecteezy.com/system/resources/previews/004/843/955/original/outline-home-icon-isolated-on-white-background-eps10-free-vector.jpg" className='h-16' alt="" /></button>
          <img src="https://www.clipartkey.com/mpngs/m/155-1554413_pdf-file-icon-png.png" className='h-16' alt="" />
          </div>
        </div>

        <div className='w-full h-80 border-input bg-white rounded-xl border-2 border-gray-500'>
          {puerta?<button onClick={handlePuerta} className=' bg-sky-500 hover:bg-sky-700 w-1/2 h-full text-black rounded-xl border-2 border-gray-500 text-2xl font-semibold'>PANEL PERSONA NATURAL</button>:<button onClick={handlePuerta}>Se activo el State</button>}
          <Link to='/panelempre'><button className=' bg-yellow-400 hover:bg-yellow-700 w-1/2 h-full text-black rounded-xl border-2 border-gray-500 text-2xl font-semibold'>PANEL EMPRESAS</button></Link>

        </div> 


        {/* FOOTER PARA CONTACTENOS */}
                            

     
      </div>
        <Footer/>
    </section>

  )
}

export default Inicio
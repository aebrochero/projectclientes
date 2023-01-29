import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Inicio = () => {

  const navigate = useNavigate();

  const [puerta,setPuerta]=useState(true)

  const handlePuerta = () => {setPuerta(!puerta)}
  
  return (
    <section className='w-full h-screen justify-center flex'> 
      <div className='w-[1440px] h-full mt-2 px-2'>
        <div className='w-full h-20 border-input bg-white rounded-xl border-2 border-gray-500 flex items-center justify-between'>
          <Link to='/'>
          <img src="https://servitel.co/wp-content/uploads/2019/04/Mesa-de-trabajo-1@280x-8.png" className='h-10' alt="" /></Link>
          <p className='text-[40px] font-semibold '>BIENVENIDO USUARIO CLIENTES</p>
          <div className='flex'>
          <img src="https://servitel.co/wp-content/uploads/2019/04/Mesa-de-trabajo-1@280x-8.png" className='h-10' alt="" />
          <img src="https://servitel.co/wp-content/uploads/2019/04/Mesa-de-trabajo-1@280x-8.png" className='h-10' alt="" />
          </div>
        </div>

        <div className='w-full h-80 border-input bg-white rounded-xl border-2 border-gray-500'>
          {puerta?<button onClick={handlePuerta} className=' w-1/2 h-full bg-blue-300 text-black rounded-xl border-2 border-gray-500'>PANEL PERSONA NATURAL</button>:<button onClick={handlePuerta}>Se activo el State</button>}
          <button className=' w-1/2 h-full bg-blue-300 text-black rounded-xl border-2 border-gray-500'>PANEL EMPRESAS</button>

        </div> 

        <div className='w-full h-20 border-input bg-white rounded-xl border-2 border-gray-500 flex items-center justify-center'>

        {/* FOOTER PARA CONTACTENOS */}
                            
        </div>

     
      </div>
    </section>

  )
}

export default Inicio
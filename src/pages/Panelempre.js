import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Panelempre = () => {

  const navigate = useNavigate();

  const handleOnClick = () => {
    alert("Ha finalizado la sesión correctamente - Retornado a Login")
    navigate("/")
  }

  return (
    <section className='w-full h-screen justify-center flex'> 
      <div className='w-[1440px] h-full mt-2 px-2'>
        <div className='w-full h-20 border-input rounded-xl border-2 border-gray-500 flex items-center justify-between'>
          <Link to='/'>
          <img src="https://servitel.co/wp-content/uploads/2019/04/Mesa-de-trabajo-1@280x-8.png" className='h-16' alt="" /></Link>
          <p className='text-[40px] font-semibold italic'>BIENVENIDO USUARIO CLIENTES - EMPRESAS</p>
          <div className='flex'>
          <button onClick={handleOnClick}><img src="https://static.vecteezy.com/system/resources/previews/004/843/955/original/outline-home-icon-isolated-on-white-background-eps10-free-vector.jpg" className='h-16' alt="" /></button>
          <img src="https://www.clipartkey.com/mpngs/m/155-1554413_pdf-file-icon-png.png" className='h-16' alt="" />
          </div>
        </div>

        <div className='w-full h-40 border-input bg-white rounded-xl border-2 border-gray-500'>
          <button className=' bg-sky-500 hover:bg-sky-700 w-1/4 h-full text-black rounded-xl border-2 border-gray-500 text-2xl font-semibold'>EMPRESA 1</button>
          <button className=' bg-yellow-400 hover:bg-yellow-700 w-1/4 h-full text-black rounded-xl border-2 border-gray-500 text-2xl font-semibold'>EMPRESA 2</button>
          <button className=' bg-orange-300 hover:bg-orange-700 w-1/4 h-full text-black rounded-xl border-2 border-gray-500 text-2xl font-semibold'>EMPRESA 3</button>
          <button className=' bg-gray-300 hover:bg-gray-700 w-1/4 h-full text-black rounded-xl border-2 border-gray-500 text-2xl font-semibold'>EMPRESA 4</button>

        </div> 

        <div className='w-full h-20 border-input bg-white rounded-xl border-2 border-gray-500 flex items-center justify-center'>
          <div className='flex  w-full justify-between items-center'>
            <input type="text" className='w-1/2 p-2 border-input bg-white rounded-xl border-2 border-gray-500' placeholder="Ingrese su búsqueda"/>
            <div className='flex w-1/2 justify-center items-center'>
              <form onclick="" className='px-2 text-xl font-semibold'>Elija su categoria de búsqueda</form>
              <select className='border-input bg-white rounded-xl border-2 border-gray-500'>
                <option value="blankOption"></option>
                <option value="someOption">Empresa</option>
                <option value="someOption">Nit</option>
                <option value="someOption">Correo electrónico</option>
                <option value="someOption">Cédula de ciudadania</option>
                <option value="someOption">Últimos Agregados</option>

              </select>
                
            </div>
          </div>


        </div>

        <div className='w-full h-full border-input bg-white rounded-xl border-2 border-gray-500 flex items-center justify-center text-center'>

        <table className='w-full h-full'>
          <tr id='segments'>
            <th>Empresa</th>
            <th>Nit</th>
            <th>Correo electrónico</th>
            <th>Cédula de ciudadania</th>
            <th>Fecha de ingreso</th>
            <th>Opciones</th>

          </tr>
          <tr id='fila1'>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Germany</td>
            <td>Italy</td>
            <td>Germany</td>
          </tr>
          <tr id='fila2'> 
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
            <td>Mexico</td>
            <td>Italy</td>
            <td>Mexico</td>
          </tr>
          <tr id='fila3'>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
            <td>Austria</td>
            <td>Italy</td>
            <td>Austria</td>
          </tr>
          <tr id='fila4'>
            <td>Island Trading</td>
            <td>Helen Bennett</td>
            <td>UK</td>
            <td>UK</td>
            <td>Italy</td>
            <td>UK</td>
          </tr>
          <tr id='fila5'>
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>
            <td>Canada</td>
            <td>Canada</td>
            <td>Italy</td>
            <td>Canada</td>
          </tr>
          <tr id='fila6'>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
            <td>Canada</td>
            <td>Canada</td>
            <td>Italy</td>
            <td>Italy</td>
          </tr>
        </table>

        
                            
        </div>

      {/* FOOTER PARA CONTACTENOS */}    

      </div>
    </section>
  )
}

export default Panelempre
import React from 'react'
import { useNavigate } from 'react-router-dom'
import imagen from "../assets/niña.webp"

const Login = () => {

    const navigate = useNavigate();

  const handleButtonForgot = () => {
    alert("Se ha enviado un link a tu correo")
  }

  const handleOnSubmit = () => {
    alert("Bienvenido a la familia Servitel")
    navigate("/inicio")
  }

  return (
    <section className='w-full h-screen flex justify-center'>
        <div className='max-w-[1100px] h-full flex'>
            <div className='w-1/2 h-full flex flex-col justify-center space-y-4 px-3'>
                <img src="https://servitel.co/wp-content/uploads/2019/04/Mesa-de-trabajo-1@280x-8.png" alt="" />
                <div>
                    <h1 className='text-orange-500 text-2xl font-semibold'>Sign In</h1>
                    <p className='text-gray-400'>Lorem Iptum</p>
                </div>
                <form onSubmit={handleOnSubmit} className='flex flex-col space-y-3' action="">
                    <div className='flex flex-col space-y-2'>
                        <input className='w-full h-10 border-input bg-white rounded-xl border-2 border-gray-500' type="text" placeholder='Username'/>
                        <input className='w-full h-10 border-input bg-white rounded-xl border-2 border-gray-500' type="password" placeholder='Password'/>
                    </div>
                    <div className='w-full flex justify-between text-gray-600'>
                        <div className='flex'>
                            <input className='pr-2' type="checkbox" />
                            Remember me
                        </div>
                        <button onClick={handleButtonForgot}>Forgot my password</button>
                    </div>
                    <button className='w-full h-12 bg-blue-700 text-white rounded-xl'>Log in</button>
                </form>
            </div>
            <div className='h-[500px]'>
                <img className='object-cover' src={imagen} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Login
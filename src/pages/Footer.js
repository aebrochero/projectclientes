import React from 'react'

const footer = () => {
    return(
        <footer className="w-full h-auto bg-backfoot pt-2 space-y-2  dark:bg-blue-900" id="aboutus">
            <div className='flex lg:flex-row flex-col justify-center lg:divide-x mx-2'>
                <div className='pr-5 pb-2 border-white '>
                    <p className="text-lag font-bold text-white">Sobre nosotros</p>
                    <p className="text-sma text-orange-500">Servitelecomunicaciones - BOGOTA COLOMBIA</p>
                    <p className="text-sma text-orange-500">Contactenos:</p>
                    <li className="text-sma text-orange-500">312 5086035</li>
                    <li className="text-sma text-orange-500">315 3713554</li>
                    <p className="text-sma text-orange-500">Ubicados en Cra. 38a #25a-69, Teusaquillo, Bogotá.</p>
                </div>
                <div className='lg:pl-5 lg:pt-0 pt-2'>
                    <p className='text-lag font-bold text-white'>Encuéntranos</p>
                    <li className='text-orange-500'>Instagram</li>
                    <li className='text-orange-500'>Facebook</li>
                    <li className='text-orange-500'>WebPage</li>

                </div>
            </div>
            <div className='bg-blue-400 text-xsm text-white dark:bg-white dark:text-blue-900 pl-3'>
                TODOS LOS DERECHOS RESERVADOS © 2023 SERVITELECOMUNICACIONES.

            </div>
        </footer>
    );
}

export default footer;
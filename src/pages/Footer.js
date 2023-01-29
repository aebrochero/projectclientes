import React from 'react'

const footer = () => {
    return(
        <footer className="w-full h-auto bg-backfoot pt-2 space-y-2  dark:bg-gray-700" id="aboutus">
            <div className='flex lg:flex-row flex-col justify-center lg:divide-x mx-2'>
                <div className='pr-5 pb-2 border-white '>
                    <p className="text-lag font-bold text-white">Sobre nosotros</p>
                    <p className="text-sma text-gray-400">Cruzana Restaurante - Condominios San Fernando</p>
                    <p className="text-sma text-gray-400">Contactenos:</p>
                    <li className="text-sma text-gray-400">315 6272450</li>
                    <li className="text-sma text-gray-400">310 6930466</li>
                    <p className="text-sma text-gray-400">Ubicados en Anserma, Caldas. Vereda Cauyá.</p>
                </div>
                <div className='lg:pl-5 lg:pt-0 pt-2'>
                    <p className='text-lag font-bold text-white'>Encuéntranos</p>
                    <li className='text-gray-400'>Instagram</li>
                </div>
            </div>
            <div className='bg-gray-400 text-xsm text-white dark:bg-white dark:text-gray-900 pl-3'>
                Design and Created by Sergio Alejandro Morales Cuesta - XChecho - Contact: sam94c@gmail.com
            </div>
        </footer>
    );
}

export default footer;
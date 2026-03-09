import { MoveRight } from 'lucide-react'
import React from 'react'

function Card_transaction({ titre, chiffre, icon }) {
    return (
        <>
            <div className="w-68 h-32 gradient rounded-md ">
                <div className='h-2/3  w-full p-2 space-y-2'>
                    <div className='space-x-2 flex '>
                        <span className='w-8 h-8 flex justify-center items-center rounded-sm bg-white p-2'>{icon}</span>
                        <span className='text-sm text-black'>{titre}</span>
                    </div>

                    <h3 className="text-numeric text-white w-full text-center">{chiffre}</h3>

                </div>
                <div className='h-1/3 bg-gris w-full rounded-bl-sm rounded-br-sm flex justify-between items-center p-2'>
                    <span className='text-sm text-gray-600'>Voir plus de details</span>
                    <MoveRight size={16} color='#a89af3' />
                </div>
            </div>
        </>
    )
}

export default Card_transaction

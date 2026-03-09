import React from 'react'

function Statistique_card({titre, chiffre, icon}) {
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
                        </div>
                </>
        )
}

export default Statistique_card
import { LogOut, Moon, Search, Settings } from 'lucide-react'
import React from 'react'

function Header_app() {
        return (
                <>
                        <div className='w-full flex justify-between items-center mb-8'>

                                <div className="flex justify-start items-center gap-4  w-[80%] h-8 bg-gris p-2 rounded-sm">
                                        <span className="">
                                                <Search size={16} className="text-gray-500" />
                                        </span>
                                        <input type="text" name="recherche" id="recherche" placeholder="Rechercher..." className="text-sm outline-none border-none w-full" />
                                </div>

                                <div className='flex items-center gap-4'>
                                        <span className='w-8 h-8 bg-gray-300 text-white flex justify-center items-center rounded-sm bg-accent text-bold p-2'>JG</span>
                                        <button className='flex justify-center items-center bg-gray-100 rounded-md hover:bg-gray-100 w-8 h-8'><Moon size={16} color='#6B7280' /></button>
                                        <button className='flex justify-center items-center bg-gray-100 rounded-md hover:bg-gray-100 w-8 h-8'> <Settings size={16} color='#6B7280' /></button>
                                        <button className='flex justify-center items-center bg-gray-100 rounded-md hover:bg-gray-100 w-8 h-8'> <LogOut size={16} color='#6B7280' /></button>
                                </div>

                        </div>

                </>
        )
}

export default Header_app

import { Bell, BookAIcon, ChartNoAxesColumnDecreasing, ChevronLeft, Coins, HandCoins, Info, LogOut, PanelsLeftBottom, Settings, UserPlus, UserRoundPen } from 'lucide-react'
import { Link } from 'react-router-dom'
function Navbar() {
        return (
                
                        <div className='w-full h-full space-y-16'>
                                <div className='flex items-center justify-between '>
                                        <Link to="/kolekta" className='flex items-center space-x-2'>                                
                                                <span className='w-6 h-6 bg-gray-300 text-white flex justify-center items-center rounded-sm bg-accent text-bold'>K</span>
                                                <h1 className='text-bold'>Kolekta</h1>
                                        </Link>
                                        <div className='w-6 h-6 bg-gray-100 flex justify-center items-center rounded-sm'>
                                                <ChevronLeft size={16} color='#6B7280' />
                                        </div>
                                </div>

                                <div className='flex flex-col justify-between h-[80vh] '>
                                        <ul className='w-full  space-y-4'>
                                                <Link to="/kolekta"><li className='text-sm text-gray-600 border-b border-gray-100 mb-4 gap-2 flex justify-start items-center'> <PanelsLeftBottom size={16} color='currentColor'/> Dashboard</li></Link>
                                                <Link to="cotisations"><li className='text-sm text-gray-600 border-b border-gray-100 mb-4 gap-2 flex justify-start items-center'><HandCoins size={16} color='currentColor'/> Cotisations</li></Link>
                                                <Link to="membres"><li className='text-sm text-gray-600 border-b border-gray-100 mb-4 gap-2 flex justify-start items-center'> <UserPlus size={16} color='currentColor'/> Membres</li></Link>
                                                <Link to="suivis"><li className='text-sm text-gray-600 border-b border-gray-100 mb-4 gap-2 flex justify-start items-center'> <BookAIcon size={16} color='currentColor' />Suivis</li></Link>
                                                <Link to="comissions"><li className='text-sm text-gray-600 border-b border-gray-100 mb-4 gap-2 flex justify-start items-center'> <Coins size={16} color='currentColor' />Comissions</li></Link>
                                                <Link to="statistiques"><li className='text-sm text-gray-600 border-b border-gray-100 mb-4 gap-2 flex justify-start items-center'> <ChartNoAxesColumnDecreasing size={16} color='currentColor' />Statistiques</li></Link>
                                                <Link to="notifications"><li className='text-sm text-gray-600 border-b border-gray-100 mb-4 gap-2 flex justify-start items-center'> <Bell size={16} color='currentColor' />Notifications</li></Link>
                                        </ul>
                                        <ul className='w-full  space-y-4'>
                                                <Link to="parametres"><li className='text-sm text-gray-600 border-b border-gray-100 mb-4 gap-2 flex justify-start items-center'> <Settings size={16} color='currentColor' />Parametre</li></Link>
                                                <Link to="profil"><li className='text-sm text-gray-600 border-b border-gray-100 mb-4 gap-2 flex justify-start items-center'> <UserRoundPen size={16} color='currentColor' />Profil</li></Link>
                                                <Link to="aide"><li className='text-sm text-gray-600 border-b border-gray-100 mb-4 gap-2 flex justify-start items-center'> <Info size={16} color='currentColor' />Aide</li></Link>
                                                <Link to="deconnexion"><li className='text-sm text-gray-600 border-b border-gray-100 mb-4 gap-2 flex justify-start items-center'> <LogOut size={16} color='currentColor' />Déconnexion</li></Link>
                                                <li className='w-full  flex justify-start items-center gap-2 mt-8'>
                                                        <span className='w-6 h-6 bg-gray-300 text-white flex justify-center items-center rounded-sm bg-accent text-bold p-2'>JG</span>
                                                        <h1 className='text-bold text-gray-500'>Jean Gaston</h1>
                                                </li>
                                        </ul>


                                </div>
                                
                        </div>
        )
}

export default Navbar

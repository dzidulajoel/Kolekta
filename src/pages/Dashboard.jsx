
import { ChartNoAxesColumnDecreasing,  PanelsLeftBottom, Route, UserPlus } from 'lucide-react'
import Membre_card from '../components/Membre_card'
import { Link } from 'react-router-dom'
import Card_transaction from '../components/Card_transaction'

function Dashboard() {
    return (

        <>
            <div className='space-y-8  h-full overflow-y-auto scroll-hidden'>

                <div className='space-y-2'>
                    <div>
                        <div className="flex justify-between items-center">
                            <h1 className='text-2xl text-highlight text-black gap-2 flex justify-start items-center'> <PanelsLeftBottom size={16} color='#a89af3' />Tableau de bord</h1>
                            <span to="/membres" className='text-sm text-gray-600'>Date du jour : <span className='font-bold'>12/03/2023</span></span>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-start item-center gap-5'>

                        <Card_transaction/>
                        <Card_transaction/>
                        <Card_transaction/>
                        <Card_transaction/>

                    </div>
                </div>

                <div className='space-y-2 '>
                    <div className="flex justify-between items-center">
                        <h1 className='text-2xl text-highlight text-black gap-2 flex justify-start items-center'> <UserPlus size={16} color='#a89af3' />Membres</h1>
                        <Link to="/membres" className='text-sm text-gray-600 underline'>Voir tous les membres</Link>
                    </div>
                    <div className='flex flex-wrap justify-between items-center '>
                        {/* nombre a afficher 10 */}
                        <Membre_card />
                        <Membre_card />
                        <Membre_card />
                        <Membre_card />
                        <Membre_card />
                        <Membre_card />
                        <Membre_card />
                        <Membre_card />
                        <Membre_card />
                        <Membre_card />
                    </div>
                </div>

                <div className='space-y-2 '>
                    <div className="flex justify-between items-center">
                        <h1 className='text-2xl text-highlight text-black gap-2 flex justify-start items-center'> <ChartNoAxesColumnDecreasing size={16} color='#a89af3' /> Statistiques</h1>
                    </div>
                    <div className='flex flex-wrap justify-between items-center  '>
                        <div className='w-[60%] h-50 bg-gray-100 rounded-sm'></div>
                        <div className='w-[38%] h-50 bg-gray-100 rounded-sm'></div>
                    </div>
                </div>

                <div className='space-y-2  mb-16'>
                    <div className="flex justify-between items-center">
                        <h1 className='text-2xl text-highlight text-black gap-2 flex justify-start items-center'> <Route size={16} color='#a89af3' /> Recent</h1>
                        <Link to="/membres" className='text-sm text-gray-600 underline'>Voir tous les actions recentes</Link>
                    </div>
                    <div className='space-y-4'>
                        <div className='flex justify-between items-center w-full h-16 rounded-sm bg-black'></div>
                        <div className='flex justify-between items-center w-full h-16 rounded-sm bg-black'></div>
                        <div className='flex justify-between items-center w-full h-16 rounded-sm bg-black'></div>
                        <div className='flex justify-between items-center w-full h-16 rounded-sm bg-black'></div>
                        <div className='flex justify-between items-center w-full h-16 rounded-sm bg-black'></div>
                        <div className='flex justify-between items-center w-full h-16 rounded-sm bg-black'></div>
                        <div className='flex justify-between items-center w-full h-16 rounded-sm bg-black'></div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Dashboard

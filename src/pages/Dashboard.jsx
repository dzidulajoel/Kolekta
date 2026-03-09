
import { ChartNoAxesColumnDecreasing, ChevronRight, PanelsLeftBottom, Route, UserPlus } from 'lucide-react'
import Membre_card from '../components/Membre_card'
import { Link } from 'react-router-dom'
import Card_transaction from '../components/Card_transaction'
import Body_page from '../layouts/Body_page';
import Table from '../components/Table';

function Dashboard() {

    const membres = [
        { id: 1, nom: "Jean Kossi" },
        { id: 2, nom: "Ama Lawson" },
        { id: 3, nom: "David Mensah" },
        { id: 4, nom: "Sarah Johnson" },
        { id: 5, nom: "Koffi Agbodan" },
        { id: 6, nom: "Maria Gomez" },
        { id: 7, nom: "Samuel Adjaho" },
        { id: 8, nom: "Linda Brown" },
    ];
    const linkStyle_pending = "px-4 py-1 bg-orange-400/90 rounded-md w-auto h-6 text-white text-xs"
    const linkStyle_accept = "px-4 py-1 bg-green-400/90 rounded-md w-auto h-6 text-white text-xs"
    const linkStyle_red = "px-4 py-1 bg-red-400/90 rounded-md w-auto h-6 text-white text-xs"
    const linkStyle = "flex justify-center items-center bg-gray-100 rounded-md hover:bg-gray-200 w-8 h-6 cursor-pointer"
    const cotisations = [
        {
            nom: "Jean Gaston",
            montant: "1000",
            echeance: "10 / 90",
            statut: <span className={linkStyle_accept}>Payé</span>,
            action: <button className={linkStyle}><ChevronRight size={16} color="currentColor" /></button>
        },
        {
            nom: "Marie Lawson",
            montant: "1000",
            echeance: "12 / 120",
            statut: <span className={linkStyle_pending}>En cours</span>,
            action: <button className={linkStyle}><ChevronRight size={16} color="currentColor" /></button>
        },
        {
            nom: "Kossi Mensah",
            montant: "1000",
            echeance: "14 / 90",
            statut: <span className={linkStyle_accept}>Payé</span>,
            action: <button className={linkStyle}><ChevronRight size={16} color="currentColor" /></button>
        },
        {
            nom: "Kossi Mensah",
            montant: "1000",
            echeance: "14 / 30",
            statut: <span className={linkStyle_red}>Impayé</span>,
            action: <button className={linkStyle}><ChevronRight size={16} color="currentColor" /></button>
        }
    ]

    const columns = [
        { header: "Nom", accessor: "nom" },
        { header: "Montant (FCFA)", accessor: "montant" },
        { header: "Echeance", accessor: "echeance" },
        { header: "Statut", accessor: "statut" },
        { header: "Action", accessor: "action" }
    ]

    return (

        <>
            <Body_page>

                <div className='space-y-2'>
                    <div>
                        <div className="flex justify-between items-center">
                            <h1 className='text-2xl text-highlight text-black gap-2 flex justify-start items-center'> <PanelsLeftBottom size={16} color='#a89af3' />Tableau de bord</h1>
                            <span to="/membres" className='text-sm text-gray-600'>Date du jour : <span className='font-bold'>12/03/2023</span></span>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-start item-center gap-5'>

                        <Card_transaction />
                        <Card_transaction />
                        <Card_transaction />
                        <Card_transaction />

                    </div>
                </div>

                <div className='space-y-2 '>
                    <div className="flex justify-between items-center">
                        <h1 className='text-2xl text-highlight text-black gap-2 flex justify-start items-center'> <UserPlus size={16} color='#a89af3' />Membres</h1>
                        <Link to="/membres" className='text-sm text-gray-600 underline'>Voir tous les membres</Link>
                    </div>
                    <div className='flex flex-wrap justify-start items-center gap-6 '>
                        {/* nombre a afficher 10 */}
                        {membres.map((membre) => (
                            <Membre_card key={membre.id} nom={membre.nom} />
                        ))}
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

                <div className='space-y-2  mb-4'>
                    <div className="flex justify-between items-center">
                        <h1 className='text-2xl text-highlight text-black gap-2 flex justify-start items-center'> <Route size={16} color='#a89af3' /> Recent</h1>
                        <Link to="/membres" className='text-sm text-gray-600 underline'>Voir tous les actions recentes</Link>
                    </div>
                    <Table columns={columns} data={cotisations} />
                </div>

            </Body_page>
        </>
    )
}

export default Dashboard

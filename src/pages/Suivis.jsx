import Body_page from '../layouts/Body_page'
import { ArrowDownWideNarrow, ChevronRight, HandCoins } from 'lucide-react'
import { motion } from "framer-motion"
import Table from '../components/Table'
function Suivis() {

    const linkStyle = "flex justify-center items-center bg-gray-100 rounded-md hover:bg-gray-200 w-8 h-6 cursor-pointer"
    const linkStyle_red = "px-4 py-1 bg-red-400/90 rounded-md w-auto h-6 text-white text-xs"
    const cotisations = [
        {
            nom: "Marie Lawson",
            echeance: "10",
            statut: <span className={linkStyle_red}>En retard</span>,
            action: <button className={linkStyle}><ChevronRight  size={16} color="currentColor" /></button>
        },
        {
            nom: "Kossi Mensah",
            echeance: "4",
            statut: <span className={linkStyle_red}>En retard</span>,
            action: <button className={linkStyle}><ChevronRight  size={16} color="currentColor" /></button>
        }
    ]

    const columns = [
        { header: "Nom", accessor: "nom" },
        { header: "Echeance", accessor: "echeance" },
        { header: "Statut", accessor: "statut" },
        { header: "Action", accessor: "action" }
    ]
    return (
        <>
            <Body_page>
                <div>
                    <div className="flex justify-between items-center">
                        <div className="flex justify-start items-center gap-2">
                            <h1 className='text-2xl text-highlight text-black gap-2 flex justify-start items-center'><HandCoins size={16} color='#a89af3' />Suivis des membres</h1>
                            <span className='w-auto h-auto rounded-sm bg-accent text-white px-1 text-sm'>12</span>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                            <button className='flex justify-center items-center bg-gray-100 rounded-md hover:bg-gray-100 w-8 h-8'><ArrowDownWideNarrow size={18} color='#6B7280' /></button>
                        </div>
                        
                    </div>
                    <span className="text-sm text-muted-foreground">Gérer les membres avec un retard de payement.</span>
                    <div className="h-[88%] overflow-y-auto scroll-hidden">
                        <Table columns={columns} data={cotisations} />
                    </div>
                </div>
            </Body_page>
        </>
    )
}

export default Suivis

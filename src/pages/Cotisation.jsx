import Body_page from '../layouts/Body_page'
import { ArrowDownWideNarrow, ChevronRight, HandCoins } from 'lucide-react'
import { motion } from "framer-motion"
import { useState } from 'react'
import Table from '../components/Table'
function Cotisation() {

    const [active, setActive] = useState("Tout")

    const items = ["Tout", "Payer", "En cours"]
    const linkStyle_pending = "px-4 py-1 bg-orange-400/90 rounded-md w-auto h-6 text-white text-xs"
    const linkStyle_accept = "px-4 py-1 bg-green-400/90 rounded-md w-auto h-6 text-white text-xs"
    const linkStyle_red = "px-4 py-1 bg-red-400/90 rounded-md w-auto h-6 text-white text-xs"
    const linkStyle = "flex justify-center items-center bg-gray-100 rounded-md hover:bg-gray-200 w-8 h-6 cursor-pointer"
    const cotisations = [
        {
            nom: "Jean Gaston",
            cotisation: "1000 FCFA",
            echeance: "10 / 90",
            statut: <span className={linkStyle_accept}>Payé</span>,
            action: <button className={linkStyle}><ChevronRight  size={16} color="currentColor" /></button>
        },
        {
            nom: "Marie Lawson",
            cotisation: "1000 FCFA",
            echeance: "12 / 120",
            statut: <span className={linkStyle_pending}>En cours</span>,
            action: <button className={linkStyle}><ChevronRight  size={16} color="currentColor" /></button>
        },
        {
            nom: "Kossi Mensah",
            cotisation: "1000 FCFA",
            echeance: "14 / 90",
            statut: <span className={linkStyle_accept}>Payé</span>,
            action: <button className={linkStyle}><ChevronRight  size={16} color="currentColor" /></button>
        } ,
        {
            nom: "Kossi Mensah",
            cotisation: "1000 FCFA",
            echeance: "14 / 30",
            statut: <span className={linkStyle_red}>Impayé</span>,
            action: <button className={linkStyle}><ChevronRight  size={16} color="currentColor" /></button>
        }
    ]

    const columns = [
        { header: "Nom", accessor: "nom" },
        { header: "Cotisation", accessor: "cotisation" },
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
                            <h1 className='text-2xl text-highlight text-black gap-2 flex justify-start items-center'><HandCoins size={16} color='#a89af3' />Cotisations</h1>
                            <span className='w-auto h-auto rounded-sm bg-accent text-white px-1 text-sm'>120</span>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                            {items.map((item) => (
                                <motion.button
                                    key={item}
                                    onClick={() => setActive(item)}
                                    whileTap={{ scale: 0.95 }}
                                    animate={{
                                        backgroundColor: active === item ? "#a89af3" : "#F3F4F6",
                                        color: active === item ? "#ffffff" : "#000000"
                                    }}
                                    transition={{ duration: 0.2 }}
                                    className="flex justify-start items-center gap-2 text-sm p-2 rounded-sm h-8"
                                >
                                    {item}
                                </motion.button>
                            ))}
                            <button className='flex justify-center items-center bg-gray-100 rounded-md hover:bg-gray-100 w-8 h-8'><ArrowDownWideNarrow size={18} color='#6B7280' /></button>
                        </div>
                    </div>
                    <span className="text-sm text-muted-foreground">Gérer les cotisations quotidiennes de vos membres.</span>
                    <div className="h-[88%] overflow-y-auto scroll-hidden">
                            <Table columns={columns} data={cotisations} />
                    </div>
                </div>
            </Body_page>
        </>
    )
}

export default Cotisation

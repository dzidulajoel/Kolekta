import { ArrowDownWideNarrow, Calendar, ChevronRight, Coins, List, Percent, Sheet, User } from "lucide-react"
import Body_page from "../layouts/Body_page"
import Commission_card from "../components/Commission_card"
import Table from "../components/Table"
import Pagination from "../components/Pagination"


function Comission() {
    const linkStyle = "flex justify-center items-center bg-gray-100 rounded-md hover:bg-gray-200 w-8 h-6 cursor-pointer"
    const linked_green = "px-4 py-1 bg-green-400/90 rounded-md w-auto h-6 text-white text-xs"
    const linkStyle_pending = "px-4 py-1 bg-orange-400/90 rounded-md w-auto h-6 text-white text-xs"
    const commissions = [
        {
            membre: "Marie Lawson",
            cotisation: "10 000 FCFA",
            taux: "5%",
            statut: <span className={linked_green}>Payé</span>,
            commission: "500 FCFA",
            date: "10/03/2026",
            action: (
                <button className={linkStyle}>
                    <ChevronRight size={16} color="currentColor" />
                </button>
            )
        },
        {
            membre: "Kossi Mensah",
            cotisation: "10 000 FCFA",
            taux: "5%",
            statut: <span className={linkStyle_pending}>En attente</span>,
            commission: "500 FCFA",
            date: "09/03/2026",
            action: (
                <button className={linkStyle}>
                    <ChevronRight size={16} color="currentColor" />
                </button>
            )
        },
        {
            membre: "Ama Kouassi",
            cotisation: "15 000 FCFA",
            taux: "5%",
            statut: <span className={linkStyle_pending}>En attente</span>,
            commission: "750 FCFA",
            date: "08/03/2026",
            action: (
                <button className={linkStyle}>
                    <ChevronRight size={16} color="currentColor" />
                </button>
            )
        },
        {
            membre: "Yao Adjovi",
            cotisation: "20 000 FCFA",
            taux: "5%",
            statut: <span className={linked_green}>Payé</span>,
            commission: "1 000 FCFA",
            date: "07/03/2026",
            action: (
                <button className={linkStyle}>
                    <ChevronRight size={16} color="currentColor" />
                </button>
            )
        },
        {
            membre: "Akossiwa Mensah",
            cotisation: "10 000 FCFA",
            taux: "5%",
            statut: <span className={linked_green}>Payé</span>,
            commission: "500 FCFA",
            date: "06/03/2026",
            action: (
                <button className={linkStyle}>
                    <ChevronRight size={16} color="currentColor" />
                </button>
            )
        },
        {
            membre: "Kodjo Amedome",
            cotisation: "12 000 FCFA",
            taux: "5%",
            statut: <span className={linkStyle_pending}>En attente</span>,
            commission: "600 FCFA",
            date: "05/03/2026",
            action: (
                <button className={linkStyle}>
                    <ChevronRight size={16} color="currentColor" />
                </button>
            )
        },
        {
            membre: "Sena Lawson",
            cotisation: "18 000 FCFA",
            taux: "5%",
            statut: <span className={linkStyle_pending}>En attente</span>,
            commission: "900 FCFA",
            date: "04/03/2026",
            action: (
                <button className={linkStyle}>
                    <ChevronRight size={16} color="currentColor" />
                </button>
            )
        },
        {
            membre: "Fiifi Agbo",
            cotisation: "10 000 FCFA",
            taux: "5%",
            statut: <span className={linked_green}>Payé</span>,
            commission: "500 FCFA",
            date: "03/03/2026",
            action: (
                <button className={linkStyle}>
                    <ChevronRight size={16} color="currentColor" />
                </button>
            )
        },
        {
            membre: "Abena Tetteh",
            cotisation: "25 000 FCFA",
            taux: "5%",
            statut: <span className={linked_green}>Payé</span>,
            commission: "1 250 FCFA",
            date: "02/03/2026",
            action: (
                <button className={linkStyle}>
                    <ChevronRight size={16} color="currentColor" />
                </button>
            )
        },
        {
            membre: "Kwame Asante",
            cotisation: "30 000 FCFA",
            taux: "5%",
            statut: <span className={linked_green}>Payé</span>,
            commission: "1 500 FCFA",
            date: "01/03/2026",
            action: (
                <button className={linkStyle}>
                    <ChevronRight size={16} color="currentColor" />
                </button>
            )
        }
    ]

    const columns = [
        { header: "Membre", accessor: "membre" },
        { header: "Cotisation", accessor: "cotisation" },
        { header: "Taux", accessor: "taux" },
        { header: "Commission", accessor: "commission" },
        { header: "Date", accessor: "date" },
        { header: "Statut", accessor: "statut" },
        { header: "Action", accessor: "action" }
    ]

    const commission = [
        { titre: "Commission totale", chiffre: "300 000", icon: <Coins size={16} color='#a89af3' /> },
        { titre: "Commission du mois", chiffre: "250 000", icon: <Calendar size={16} color='#a89af3' /> },
        { titre: "Cotisations collectées", chiffre: "23", icon: <User size={16} color='#a89af3' /> },
        { titre: "Taux commission", chiffre: "5%", icon: <Percent size={16} color='#a89af3' /> },
    ]
    return (
        <>
            <Body_page>
                <div>
                    <div className="flex justify-between items-center">
                        <div className="flex justify-start items-center gap-2">
                            <h1 className='text-2xl text-highlight text-black gap-2 flex justify-start items-center'><Coins size={16} color='#a89af3' />Commission</h1>
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap justify-start item-center gap-5'>
                    {commission.map((item, index) => (
                        <Commission_card key={index} titre={item.titre} chiffre={item.chiffre} icon={item.icon} />
                    ))
                    }
                    <div className="w-full flex justify-between items-center">
                        <h1 className='text-2xl text-highlight text-black gap-2 flex justify-start items-center'><List size={16} color='#a89af3' />Tableau détaillé des gains</h1>
                        <div className="flex justify-start items-center gap-2">
                            <button className="flex justify-start items-center gap-2 text-sm text-white bg-accent p-2 rounded-sm h-8"> <Sheet size={16} color='#fff' /> Exporter</button>
                        </div>
                    </div>
                </div>
                <div className="h-[60%] overflow-y-auto scroll-hidden pb-4">
                    <Table columns={columns} data={commissions} />
                    <Pagination />
                </div>
            </Body_page>
        </>
    )
}

export default Comission

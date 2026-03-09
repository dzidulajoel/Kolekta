import { ChartNoAxesColumnDecreasing, Calendar, Coins, Percent, User, TriangleAlert, CircleCheckBig } from "lucide-react"

import Body_page from "../layouts/Body_page";
import Statistique_card from "../components/Statistiques_card";
import Chart_coti_pnp from "../charts/Chart_coti_pnp";
import MembresParMoisChart from "../charts/MembresParMoisChart ";
import MontantPieChart from "../charts/MontantPieChart";
function Statistique() {

    const commission = [
        { titre: "Cotisations totales", chiffre: "1 300 000", icon: <Coins size={16} color='#a89af3' /> },
        { titre: "Nombre de membres", chiffre: "89", icon: <User size={16} color='#a89af3' /> },
        { titre: "Cotisations payées", chiffre: "250 000", icon: <CircleCheckBig size={16} color='#a89af3' /> },
        { titre: "Cotisations en retard", chiffre: "5%", icon: <TriangleAlert size={16} color='#a89af3' /> },
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
                        <Statistique_card key={index} titre={item.titre} chiffre={item.chiffre} icon={item.icon} />
                    ))
                    }
                </div>
                <div className="h-[60vh] overflow-y-auto scroll-hidden pb-4 flex flex-wrap justify-between items-start space-y-12">

                    <div className='w-full h-auto '>
                        <h3 className='text-md text-black gap-2 flex justify-start items-center mb-4'>1- Graphique des cotisations par mois</h3>
                        <div className='h-full bg-gray-100 rounded-sm p-2'>
                            <Chart_coti_pnp />
                        </div>
                    </div>

                    <div className='w-full h-auto '>
                        <h3 className='text-md text-black gap-2 flex justify-start items-center mb-4'>2- Vue sur le nombre de membre par mois</h3>
                        <div className="w-full h-full bg-gray-100 rounded-sm p-2">
                            <MembresParMoisChart />
                        </div>
                    </div>

                     <div className='w-[50%] h-auto '>
                        <h3 className='text-md text-black gap-2 flex justify-start items-center mb-4'>3- Répartition des cotisations par type</h3>
                        <div className='h-full bg-gray-100 rounded-sm p-2'>
                            <MontantPieChart />
                        </div>
                    </div>

                </div>
            </Body_page>
        </>
    )
}

export default Statistique

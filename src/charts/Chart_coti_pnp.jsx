import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

function Chart_coti_pnp() {

        const data = [
                { mois: "Jan", paye: 200000, nonPaye: 50000 },
                { mois: "Fev", paye: 250000, nonPaye: 30000 },
                { mois: "Mar", paye: 300000, nonPaye: 80000 },
                { mois: "Avr", paye: 280000, nonPaye: 40000 },
                { mois: "Mai", paye: 320000, nonPaye: 20000 },
                { mois: "Juin", paye: 350000, nonPaye: 60000 },
                { mois: "Juil", paye: 400000, nonPaye: 10000 },
                { mois: "Aout", paye: 380000, nonPaye: 20000 },
                { mois: "Sept", paye: 420000, nonPaye: 5000 },
                { mois: "Oct", paye: 450000, nonPaye: 3000 },
                { mois: "Nov", paye: 430000, nonPaye: 7000 },
                { mois: "Dec", paye: 480000, nonPaye: 2000 },
        ]
        return (
                <>
                        <BarChart
                                className="text-sm w-full w-max-width-100vh aspect-[1.6] max-h-[50vh] p-4"
                                data={data}
                                responsive={true}
                                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                        >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="mois" />
                                <YAxis />
                                <Tooltip cursor={{ fill: "#a89af3" }} />
                                <Legend />

                                {/* payé */}
                                <Bar dataKey="paye" stackId="a" fill="#22c58f"  />

                                {/* non payé */}
                                <Bar dataKey="nonPaye" stackId="a" fill="#ef4444" />
                        </BarChart>
                        
                </>
        )
}

export default Chart_coti_pnp

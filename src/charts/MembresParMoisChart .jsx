import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

// #region Sample data
// 12 mois, nombre de membres (5 par défaut mais avec variations)
const data = [
        { mois: "Jan", membres: 5 },
        { mois: "Fév", membres: 8 },
        { mois: "Mar", membres: 6 },
        { mois: "Avr", membres: 7 },
        { mois: "Mai", membres: 5 },
        { mois: "Juin", membres: 9 },
        { mois: "Juil", membres: 5 },
        { mois: "Août", membres: 6 },
        { mois: "Sep", membres: 5 },
        { mois: "Oct", membres: 7 },
        { mois: "Nov", membres: 5 },
        { mois: "Déc", membres: 8 }
]
// #endregion

const MembresParMoisChart = () => {
        return (
                <>
                        <div className="w-[100%]">
                                <AreaChart
                                        className="text-sm w-full max-h-[50vh] p-2"
                                        width="100%"
                                        height="50vh"
                                        data={data}
                                        margin={{ top: 0, right: 20, left: -40, bottom: 0 }}
                                >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="mois" />
                                        <YAxis allowDecimals={false} />
                                        <Tooltip />
                                        <Area
                                                type="monotone"
                                                dataKey="membres"
                                                stroke="#000"       // bleu Tailwind (blue-500)
                                                fill="#a89af3"         // bleu clair Tailwind (blue-200)
                                        />
                                </AreaChart>
                        </div>

                </>
        )
}

export default MembresParMoisChart
import { PieChart, Pie, Sector, Tooltip } from "recharts";

export default function MontantPieChart({ isAnimationActive = true }) {

        const data = [
                { name: "Montant payé", value: 800000, fill: "#22c58f" },     // vert
                { name: "Montant restant", value: 200000, fill: "#ef4444" },   // rouge
                { name: "Commission", value: 50000, fill: "#a78bfa" }          // violet
        ];
        const renderActiveShape = ({ cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value }) => {
                const RADIAN = Math.PI / 180;
                const sin = Math.sin(-RADIAN * (midAngle ?? 1));
                const cos = Math.cos(-RADIAN * (midAngle ?? 1));
                const sx = (cx ?? 0) + ((outerRadius ?? 0) + 10) * cos;
                const sy = (cy ?? 0) + ((outerRadius ?? 0) + 10) * sin;
                const mx = (cx ?? 0) + ((outerRadius ?? 0) + 30) * cos;
                const my = (cy ?? 0) + ((outerRadius ?? 0) + 30) * sin;
                const ex = mx + (cos >= 0 ? 1 : -1) * 22;
                const ey = my;
                const textAnchor = cos >= 0 ? "start" : "end";

                return (
                        <g>
                                <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                                        {payload.name}
                                </text>
                                <Sector
                                        cx={cx}
                                        cy={cy}
                                        innerRadius={innerRadius}
                                        outerRadius={outerRadius}
                                        startAngle={startAngle}
                                        endAngle={endAngle}
                                        fill={payload.fill} // <- prend la couleur spécifique de l’élément
                                        stroke="none"    
                                />

                                <Sector
                                        cx={cx}
                                        cy={cy}
                                        startAngle={startAngle}
                                        endAngle={endAngle}
                                        innerRadius={(outerRadius ?? 0) + 6}
                                        outerRadius={(outerRadius ?? 0) + 10}
                                        fill={payload.fill} // <- idem pour le “highlight”
                                        stroke="none"    
                                />
                                <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={payload.fill} fill="none" />
                                <circle cx={ex} cy={ey} r={2} fill={payload.fill} stroke="none" />
                                <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
                                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`FCFA ${value.toLocaleString()}`}</text>
                                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">{`(${((percent ?? 1) * 100).toFixed(2)}%)`}</text>
                        </g>
                );
        };


        return (
                <PieChart
                        className="text-sm w-full w-max-width-100vh aspect-[1] max-h-[50vh] p-4"
                        responsive
                >
                        <Pie
                                activeShape={renderActiveShape}
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius="60%"
                                outerRadius="80%"
                                fill="#a89af3"
                                dataKey="value"
                                isAnimationActive={isAnimationActive}
                                stroke="none"
                        />
                        <Tooltip content={() => null} />
                </PieChart>
        );
}
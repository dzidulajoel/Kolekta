import React, { useState } from "react"
import { motion } from "framer-motion"

function MonthCalendar({ monthDays = 30 }) {
        const [cotises, setCotises] = useState(Array(monthDays).fill(false))

        const handleClick = (index) => {
                setCotises((prev) => {
                        if (prev[index]) return prev // si déjà cotisé, on ne change pas
                        const newArr = [...prev]
                        newArr[index] = true
                        return newArr
                })
        }

        return (
                <div className="flex justify-start items-center gap-4 flex-wrap">
                        {cotises.map((active, idx) => (
                                <motion.div
                                        key={idx}
                                        onClick={() => handleClick(idx)}
                                        className={`text-lg  w-20 h-20 flex items-center justify-center border border-gray-200 rounded cursor-pointer  ${active ? "bg-green-500 text-white" : "bg-gray-100"
                                                }`}
                                        whileTap={{ scale: 0.95 }}
                                >
                                        {idx + 1}
                                </motion.div>
                        ))}
                </div>
        )
}

export default MonthCalendar
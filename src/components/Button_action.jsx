import React, { useState } from "react"
import { motion } from "framer-motion"

function Button_action({ antIcon, postIcon, antAction, postAction, antColor, postColor }) {
        const [action, setAction] = useState(false)
        const [pending, setPending] = useState(false)
        const [temp, setTemp] = useState(false) // pour le retour automatique

        const handleAction = () => {
                setPending(true)

                setTimeout(() => {
                        setAction(true)   // passe au postAction / vert
                        setPending(false)
                        setTemp(true)    // déclenche le retour
                        setTimeout(() => {
                                setAction(false) // revient à antAction / accent
                                setTemp(false)
                        }, 1000) // délai avant de revenir
                }, 2000) // pending
        }

        const Icon = action && temp ? postIcon : antIcon
        const color = action && temp ? postColor : antColor
        const text = action && temp ? postAction : antAction

        return (
                <motion.button
                        className={`flex justify-center items-center gap-2 text-sm text-white p-2 rounded-sm h-8 min-w-[140px] cursor-pointer transition-all ${color}`}
                        onClick={handleAction}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        disabled={pending}
                >
                        {pending ? (
                                <motion.div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                                <>
                                        {Icon && <Icon size={16} color="#fff" />}
                                        {text}
                                </>
                        )}
                </motion.button>
        )
}

export default Button_action
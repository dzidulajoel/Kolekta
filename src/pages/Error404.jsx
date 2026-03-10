import React from 'react'
import Body_page from '../layouts/Body_page'

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Error404() {
    return (
        <>
            <Body_page>
                <div className="w-full h-screen flex flex-col justify-center items-center bg-background text-center p-4">

                    <motion.h1
                        className="text-7xl font-bold text-accent"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        404
                    </motion.h1>

                    <h2 className="text-xl font-semibold mt-2">
                        Page introuvable
                    </h2>

                    <p className="text-sm text-gray-500 mt-2 max-w-md">
                        La page que vous recherchez n'existe pas ou a été déplacée.
                    </p>

                    <Link
                        to="/kolekta"
                        className="mt-6 px-4 py-2 bg-accent text-white rounded-sm text-sm hover:opacity-90 transition"
                    >
                        Retour à l'accueil
                    </Link>

                </div>
            </Body_page>
        </>
    )
}

export default Error404

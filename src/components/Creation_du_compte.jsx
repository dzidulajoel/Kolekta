import React, { useState } from "react";
import Body_page from '../layouts/Body_page'
import { motion } from "framer-motion"
import UploadCarte from "../utils/UploadCarte";
import { Check, Plus, X } from "lucide-react";
import Button_action from "./Button_action";


function Creation_du_compte({ close }) {

    const inputs = [
        { name: "nom", type: "text", placeholder: "Nom complet" },
        { name: "telephone", type: "tel", placeholder: "Numéro téléphone" },
        { name: "adresse", type: "text", placeholder: "Adresse / Quartier" },
        { name: "profession", type: "text", placeholder: "Profession" },
        { name: "id_card", type: "text", placeholder: "Numéro pièce d'identité" },
    ];


    const durees = [1, 2, 3, 6, 12];


    const [formData, setFormData] = useState({
        duree: "",
        montant: "",
        conditions: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    const joursCotisation = [
        { name: "lundi", label: "Lundi" },
        { name: "mardi", label: "Mardi" },
        { name: "mercredi", label: "Mercredi" },
        { name: "jeudi", label: "Jeudi" },
        { name: "vendredi", label: "Vendredi" },
        { name: "samedi", label: "Samedi" },
        { name: "dimanche", label: "Dimanche" },
    ];

    const [formData_day, setFormData_day] = useState({
        joursCotisation: []
    });

    const handleChange_day = (e) => {
        const { value, checked } = e.target;

        setFormData_day((prev) => {
            const jours = prev.joursCotisation;

            return {
                ...prev,
                joursCotisation: checked
                    ? [...jours, value]
                    : jours.filter((j) => j !== value),
            };
        });
    };

    return (
        <>
            <Body_page>
                <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ duration: 0.4, ease: "easeInOut" }} className="fixed bottom-0 left-0 w-full h-full bg-white z-50 shadow-xl">
                    <div className="p-6">
                        <button onClick={close} className="mb-4 text-sm text-gray-500 hover:underline bg-gris px-2 py-1 flex items-center rounded-sm gap-2"> <X size={16} color="currentColor" /> Fermer</button>

                        <div className="flex justify-center w-full">

                            <form onSubmit={handleSubmit} className="w-[500px] overflow-y-auto scroll-hidden h-[90vh] bg-white p-6 rounded-sm shadow-sm flex flex-col gap-2" >
                                <h1 className="text-xl font-semibold text-center">
                                    Création compte membre
                                </h1>
                                {/* infos personnelles */}

                                {inputs.map((input, index) => (
                                    <input key={index} type={input.type} name={input.name} placeholder={input.placeholder} onChange={handleChange} className="border border-gray-200 p-2 text-sm rounded-sm outline-none focus:border-accent" />
                                ))}

                                <UploadCarte label="Photo carte identité" name="carte" onChange={handleChange} />
                                <UploadCarte label="Photo du membre" name="photo" onChange={handleChange} />


                                {/* montant */}

                                <div className="flex flex-col gap-2">
                                    <input type="text" placeholder="Montant cotisation" onChange={handleChange} name="montant" className="border border-gray-200 p-2 text-sm rounded-sm outline-none focus:border-accent" />
                                </div>


                                {/* duree */}

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium"> Durée tontine <span className="text-red-500">*</span></label>
                                    <div className="flex flex-col gap-2">
                                        {durees.map((d, index) => (
                                            <motion.label key={index} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} className="flex items-center gap-1 text-sm border border-gray-200 px-3 py-1 rounded-sm cursor-pointer">
                                                <input type="radio" name="duree" value={d} onChange={handleChange} className="accent-[#a89af3]" />
                                                {d} mois
                                            </motion.label>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium">Jours de cotisation <span className="text-red-500">*</span></label>
                                    <div className="flex flex-col gap-2">
                                        {joursCotisation.map((jour) => (
                                            <motion.label key={jour.name} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }} className="w-full flex items-center gap-2 border border-gray-200 rounded-sm px-3 py-1 text-sm cursor-pointer hover:bg-gray-50">
                                                <input type="checkbox" name="joursCotisation" value={jour.name} onChange={handleChange_day} className="accent-[#a89af3]" />
                                                {jour.label}
                                            </motion.label>
                                        ))}
                                    </div>
                                </div>


                                {/* conditions */}

                                <label className="flex items-center gap-2 text-sm mt-4">
                                    <input type="checkbox" className="accent-[#a89af3]" name="conditions" onChange={handleChange} />J'accepte les conditions de la tontine
                                </label>
                                {/* bouton */}


                                <Button_action
                                    antIcon={Plus}
                                    postIcon={Check}
                                    antAction="Créer le compte"
                                    postAction="Succès"
                                    antColor="bg-accent"
                                    postColor="bg-green-500"
                                />
                            </form>
                        </div>
                    </div>
                </motion.div>
            </Body_page>
        </>
    )
}




export default Creation_du_compte

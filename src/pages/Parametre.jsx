import { useState } from 'react'
import Body_page from '../layouts/Body_page';
import { Activity, BookUp, Check, Info, Lock, MonitorSmartphone, Scale, ScreenShare, Settings, Trash, UserCheck, UserPen } from 'lucide-react';
import { motion } from "framer-motion";
import NotificationsSettings from '../components/NotificationsSettings';
import { Link } from 'react-router-dom';
import Button_action from '../components/Button_action';
function Parametre() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        remember: false,
    });

    const inputs = [
        {
            type: "text",
            name: "nom",
            placeholder: "Nom complet",
        },
        {
            type: "email",
            name: "email",
            placeholder: "Adresse email",
        },
        {
            type: "text",
            name: "telephone",
            placeholder: "Numéro de téléphone",
        },
        {
            type: "text",
            name: "region",
            placeholder: "Région / Ville",
        },
        {
            type: "text",
            name: "id_collecteur",
            placeholder: "Identifiant collecteur",
        },
        {
            type: "text",
            name: "agence",
            placeholder: "Agence / Point de collecte",
        },
    ];




    return (
        <Body_page>
            <div>
                <div className="flex justify-between items-center">
                    <div className="w-full flex justify-between items-center gap-2">
                        <h1 className='text-2xl text-highlight text-black gap-2 flex justify-start items-center'><Settings size={16} color='#a89af3' />Paramètres</h1>
                        <Button_action
                            antIcon={UserPen}
                            postIcon={Check}
                            antAction="Modifier"
                            postAction="Succès"
                            antColor="bg-accent"
                            postColor="bg-green-500"
                        />
                    </div>
                </div>
                <p className="text-sm text-muted-foreground">Gérer vos paramètres et préférences.</p>

            </div>

            <div className="h-[88%] overflow-y-auto scroll-hidden w-full space-y-12">

                <div>
                    <div className="w-full flex justify-between items-center">
                        <h1 className='w-full text-2xl text-highlight text-black gap-2 flex justify-start items-center border-b border-gray-100'>Profil</h1>
                    </div>
                    <div className='gap-1 flex flex-wrap justify-start items-start mt-4'>
                        {inputs.map((input, index) => (
                            <input
                                key={index}
                                type={input.type}
                                name={input.name}
                                placeholder={input.placeholder}
                                value={formData[input.name]}
                                onChange={(e) => setFormData({ ...formData, [input.name]: e.target.value })}
                                required
                                minLength={input.type === "password" ? 8 : undefined}
                                className="w-[33%] border p-3 rounded h-8 text-gris  text-sm border-gray-300 
                        focus:invalid:border-red-500 focus:invalid:outline-red-500
                    "
                            />
                        ))}
                    </div>
                </div>


                <div>
                    <h1 className='w-auto text-2xl text-highlight text-black gap-2 flex justify-start items-center border-b border-gray-100'>Notifications</h1>
                    <NotificationsSettings />
                </div>

                <div>
                    <h1 className='w-auto text-2xl text-highlight text-black gap-2 flex justify-start items-center border-b border-gray-100'>Sécurité</h1>
                    <div className="mt-4 space-y-3 flex flex-col ">
                        <Link className="text-sm text-gris flex justify-between w-full bg-gris px-4 h-8 rounded-sm items-center">  Changer de mot de passe <Lock size={16} color="#a89af3" /></Link>
                        <Link className="text-sm text-gris flex justify-between w-full bg-gris px-4 h-8 rounded-sm items-center">Déconnexion de tous les appareils <MonitorSmartphone size={16} color="#a89af3" /></Link>
                    </div>
                </div>

                <div>
                    <h1 className='w-auto text-2xl text-highlight text-black gap-2 flex justify-start items-center border-b border-gray-100'>Confidentialité</h1>
                    <div className="mt-4 space-y-3 flex flex-col ">
                        <Link className="text-sm text-gris flex justify-between w-full bg-gris px-4 h-8 rounded-sm items-center">  Partage des données <ScreenShare size={16} color="#a89af3" /></Link>
                        <Link className="text-sm text-gris flex justify-between w-full bg-gris px-4 h-8 rounded-sm items-center">Historique des activités <Activity size={16} color="#a89af3" /></Link>
                        <Link className="text-sm text-gris flex justify-between w-full bg-gris px-4 h-8 rounded-sm items-center">Suppression du compte <Trash size={16} color="#a89af3" /></Link>
                    </div>
                </div>

                <div>
                    <h1 className='w-auto text-2xl text-highlight text-black gap-2 flex justify-start items-center border-b border-gray-100'>À propos / Infos</h1>
                    <div className="mt-4 space-y-3 flex flex-col ">
                        <Link className="text-sm text-gris flex justify-between w-full bg-gris px-4 h-8 rounded-sm items-center"> Version de l’app <BookUp size={16} color="#a89af3" /></Link>
                        <Link className="text-sm text-gris flex justify-between w-full bg-gris px-4 h-8 rounded-sm items-center">Mentions légales / CGU <Scale size={16} color="#a89af3" /></Link>
                        <Link className="text-sm text-gris flex justify-between w-full bg-gris px-4 h-8 rounded-sm items-center">Support / Contact <Info size={16} color="#a89af3" /></Link>
                    </div>
                </div>






            </div>

        </Body_page>
    );
}

export default Parametre
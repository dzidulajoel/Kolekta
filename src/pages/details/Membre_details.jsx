import React from 'react'
import Body_page from '../../layouts/Body_page'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import MonthCalendar from '../../utils/MonthCalendar'

function Membre_details() {
    const member = {
        nom: "Gamatho Kossi",
        email: "gamatho@example.com",
        telephone: "+228 900 00 00",
        dateNaissance: "2005-03-11",
        adresse: "Lomé, Togo",
        carteId: "ID123456",
        photo: "https://i.pravatar.cc/150?img=20",
        dureeCotisation: "1 an",
        montant: "1 000 F CFA",
        montantTotal: "100 000 F CFA",
        debut: "2023-01-01",
        fin: "2024-01-01"
    }
    return (
        <>
            <div>
                <ul className='py-1 px-2 bg-gris rounded-sm flex text-sm gap-2'>
                    <Link to="/kolekta/membres" className='flex items-center gap-1 text-gray-600'><li>Membres</li> <ChevronRight size={16} color="currentColor" /></Link> |
                    <Link to="./" className='flex items-center gap-1 accent'><li>Détails du membre</li> <ChevronRight size={16} color="currentColor" /></Link>
                </ul>
            </div>
            <div className='mt-4 flex gap-4'>
                <div className='w-full'>
                    <h2 className='text-2xl text-highlight text-black mb-4'>Détails du membre</h2>
                    <div className="w-full bg-white rounded-md ">
                        <div className="flex items-center gap-4 mb-4">
                            <img src={member.photo} alt="Photo du membre" className="w-30 h-30 rounded-sm object-cover" />

                        </div>

                        <div className="flex flex-col gap-4 text-sm">
                            <h2 className="text-2xl font-semibold text-gray-800">
                                {member.nom}
                            </h2>
                            <div>
                                <span className="font-medium text-gray-600">Email :</span> {member.email}
                            </div>
                            <div>
                                <span className="font-medium text-gray-600">Téléphone :</span> {member.telephone}
                            </div>
                            <div>
                                <span className="font-medium text-gray-600">Date de naissance :</span> {member.dateNaissance}
                            </div>
                            <div>
                                <span className="font-medium text-gray-600">Adresse :</span> {member.adresse}
                            </div>
                            <div>
                                <span className="font-medium text-gray-600">Carte d'identité :</span> {member.carteId}
                            </div>
                            <div>
                                <span className="font-medium text-gray-600">Durée de cotisation :</span> {member.dureeCotisation}
                            </div>
                            <div>
                                <span className="font-medium text-gray-600">Montant total :</span> {member.montantTotal}
                            </div>
                            <div>
                                <span className="font-medium text-gray-600">Debut :</span> {member.debut}
                            </div>
                            <div>
                                <span className="font-medium text-gray-600">Fin :</span> {member.fin}
                            </div>

                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <h2 className='text-2xl text-highlight text-black mb-4'>Détails sur la cotisation</h2>
                    <MonthCalendar />
                </div>
            </div>
        </>
    )
}

export default Membre_details

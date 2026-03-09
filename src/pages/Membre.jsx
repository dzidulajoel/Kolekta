import { ArrowDownWideNarrow, UserPlus } from "lucide-react"
import Membre_card from "../components/Membre_card"
import Body_page from "../layouts/Body_page";

function Membre() {
    const membres = [
        { id: 1, nom: "Jean Kossi" },
        { id: 2, nom: "Ama Lawson" },
        { id: 3, nom: "David Mensah" },
        { id: 4, nom: "Sarah Johnson" },
        { id: 5, nom: "Koffi Agbodan" },
        { id: 6, nom: "Maria Gomez" },
        { id: 7, nom: "Samuel Adjaho" },
        { id: 8, nom: "Linda Brown" },
        { id: 9, nom: "Patrick Yao" },
        { id: 10, nom: "Esther Mensimah" },
        { id: 11, nom: "Michael Smith" },
        { id: 12, nom: "Akouvi Dossou" },
        { id: 13, nom: "Kevin Lawson" },
        { id: 14, nom: "Jessica Taylor" },
        { id: 15, nom: "Yaw Boateng" },
        { id: 16, nom: "Daniel Kouassi" },
        { id: 17, nom: "Sandra Williams" },
        { id: 18, nom: "Kossi Amegan" },
        { id: 19, nom: "Paul Johnson" },
        { id: 20, nom: "Akossiwa Mensah" },
        { id: 21, nom: "George Anderson" },
        { id: 22, nom: "Mawuli Kpeglo" },
        { id: 23, nom: "Nadia Laurent" },
        { id: 24, nom: "Richard Gomez" },
        { id: 25, nom: "Viviane Lawson" },
        { id: 26, nom: "Kokou Agbleze" },
        { id: 27, nom: "Fatima Diallo" },
        { id: 28, nom: "Lucas Martin" },
        { id: 29, nom: "Nathalie Mensah" },
        { id: 30, nom: "Eric Johnson" },
        { id: 31, nom: "Afi Dede" },
        { id: 32, nom: "Sophie Laurent" },
    ];
    return (
        <>
            <Body_page>
                <div>
                    <div className="flex justify-between items-center">
                        <h1 className='text-2xl text-highlight text-black gap-2 flex justify-start items-center'> <UserPlus size={16} color='#a89af3' />Membres</h1>
                        <div className="flex justify-start items-center gap-2">
                            <button className='flex justify-center items-center bg-gray-100 rounded-md hover:bg-gray-100 w-8 h-8'><ArrowDownWideNarrow size={18} color='#6B7280' /></button>
                            <button className="flex justify-start items-center gap-2 text-sm text-white bg-accent p-2 rounded-sm h-8"> <UserPlus size={16} color='#fff' /> Ajouter un membre</button>
                        </div>
                    </div>
                    <span className="text-sm text-muted-foreground">Gérer les membres de votre groupe, ajouter de nouveaux membres, supprimer des membres existants et mettre à jour les informations des membres.</span>
                </div>

                <div className="h-[88%] overflow-y-auto scroll-hidden">
                    <div className='flex flex-wrap justify-start items-center gap-6 '>
                        {membres.map((membre) => (
                            <Membre_card key={membre.id} nom={membre.nom} />
                        ))}
                    </div>
                    <div className="py-4 flex justify-end items-center">
                        <button className="flex justify-start items-center gap-2 text-sm text-white bg-accent p-2 rounded-sm h-8"> Charger plus de membres</button>
                    </div>
                </div>

            </Body_page>
        </>
    )
}

export default Membre

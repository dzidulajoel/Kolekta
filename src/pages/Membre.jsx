import { ArrowDownWideNarrow, UserPlus } from "lucide-react"
import Membre_card from "../components/Membre_card"
import Body_page from "../layouts/Body_page";

function Membre() {
    const membres = [
        { id: 1, nom: "Jean Kossi", image: "https://i.pravatar.cc/150?img=1" },
        { id: 2, nom: "Ama Lawson", image: "https://i.pravatar.cc/150?img=2" },
        { id: 3, nom: "David Mensah", image: "https://i.pravatar.cc/150?img=3" },
        { id: 4, nom: "Sarah Johnson", image: "https://i.pravatar.cc/150?img=4" },
        { id: 5, nom: "Koffi Agbodan", image: "https://i.pravatar.cc/150?img=5" },
        { id: 6, nom: "Maria Gomez", image: "https://i.pravatar.cc/150?img=6" },
        { id: 7, nom: "Samuel Adjaho", image: "https://i.pravatar.cc/150?img=7" },
        { id: 8, nom: "Linda Brown", image: "https://i.pravatar.cc/150?img=8" },
        { id: 9, nom: "Patrick Yao", image: "https://i.pravatar.cc/150?img=9" },
        { id: 10, nom: "Esther Mensimah", image: "https://i.pravatar.cc/150?img=10" },
        { id: 11, nom: "Michael Smith", image: "https://i.pravatar.cc/150?img=11" },
        { id: 12, nom: "Akouvi Dossou", image: "https://i.pravatar.cc/150?img=12" },
        { id: 13, nom: "Kevin Lawson", image: "https://i.pravatar.cc/150?img=13" },
        { id: 14, nom: "Jessica Taylor", image: "https://i.pravatar.cc/150?img=14" },
        { id: 15, nom: "Yaw Boateng", image: "https://i.pravatar.cc/150?img=15" },
        { id: 16, nom: "Daniel Kouassi", image: "https://i.pravatar.cc/150?img=16" },
        { id: 17, nom: "Sandra Williams", image: "https://i.pravatar.cc/150?img=17" },
        { id: 18, nom: "Kossi Amegan", image: "https://i.pravatar.cc/150?img=18" },
        { id: 19, nom: "Paul Johnson", image: "https://i.pravatar.cc/150?img=19" },
        { id: 20, nom: "Akossiwa Mensah", image: "https://i.pravatar.cc/150?img=20" },
        { id: 21, nom: "George Anderson", image: "https://i.pravatar.cc/150?img=21" },
        { id: 22, nom: "Mawuli Kpeglo", image: "https://i.pravatar.cc/150?img=22" },
        { id: 23, nom: "Nadia Laurent", image: "https://i.pravatar.cc/150?img=23" },
        { id: 24, nom: "Richard Gomez", image: "https://i.pravatar.cc/150?img=24" },
        { id: 25, nom: "Viviane Lawson", image: "https://i.pravatar.cc/150?img=25" },
        { id: 26, nom: "Kokou Agbleze", image: "https://i.pravatar.cc/150?img=26" },
        { id: 27, nom: "Fatima Diallo", image: "https://i.pravatar.cc/150?img=27" },
        { id: 28, nom: "Lucas Martin", image: "https://i.pravatar.cc/150?img=28" },
        { id: 29, nom: "Nathalie Mensah", image: "https://i.pravatar.cc/150?img=29" },
        { id: 30, nom: "Eric Johnson", image: "https://i.pravatar.cc/150?img=30" },
        { id: 31, nom: "Afi Dede", image: "https://i.pravatar.cc/150?img=31" },
        { id: 32, nom: "Sophie Laurent", image: "https://i.pravatar.cc/150?img=32" },
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
                            <Membre_card key={membre.id} nom={membre.nom} image={membre.image} />
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

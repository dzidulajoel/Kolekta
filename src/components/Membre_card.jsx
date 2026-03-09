import { Eye } from "lucide-react"

function Membre_card({ nom, image }) {
    return (
        <div>
            <div className="w-30 h-30 bg-black rounded-md relative">
                <button className="flex justify-center items-center bg-white/20 rounded-md hover:bg-gray-100 w-6 h-6 absolute top-1 right-1"><Eye size={12} color='#a89af3' /></button>
                <img src={image} alt={nom} className="w-full h-full object-cover"/>
            </div>
            <div>
                <h4 className="text-sm text-gray-600">{nom}</h4>
            </div>
        </div>
    )
}

export default Membre_card

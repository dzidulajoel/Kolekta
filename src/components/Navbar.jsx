import {
        Bell,
        BookAIcon,
        ChartNoAxesColumnDecreasing,
        ChevronLeft,
        Coins,
        FolderClock,
        HandCoins,
        Info,
        LogOut,
        PanelsLeftBottom,
        Settings,
        UserPlus,
        UserRoundPen
} from "lucide-react"

import { Link, useLocation } from "react-router-dom"

function Navbar() {

        const location = useLocation()

        const menuTop = [
                { name: "Dashboard", path: "/kolekta", icon: PanelsLeftBottom },
                { name: "Cotisations", path: "/kolekta/cotisations", icon: HandCoins },
                { name: "Membres", path: "/kolekta/membres", icon: UserPlus },
                { name: "Suivis", path: "/kolekta/suivis", icon: BookAIcon },
                { name: "Comissions", path: "/kolekta/comissions", icon: Coins },
                { name: "Statistiques", path: "/kolekta/statistiques", icon: ChartNoAxesColumnDecreasing },
                { name: "Notifications", path: "/kolekta/notifications", icon: Bell },
                { name: "Historique", path: "/kolekta/historique", icon: FolderClock }
                
        ]

        const menuBottom = [
                { name: "Parametre", path: "/kolekta/parametres", icon: Settings },
                { name: "Profil", path: "/kolekta/profil", icon: UserRoundPen },
                { name: "Aide", path: "/kolekta/aide", icon: Info },
                { name: "Déconnexion", path: "/kolekta/deconnexion", icon: LogOut }
        ]

        const linkStyle = (path) => `text-sm border-b border-gray-100 mb-4 gap-2 flex items-center ${location.pathname === path ? "accent" : "text-gray-600"}`

        return (
                <div className="w-full h-full space-y-16">
                        <div className="flex items-center justify-between">
                                <Link to="/kolekta" className="flex items-center space-x-2">
                                        <span className="w-6 h-6 bg-accent text-white flex justify-center items-center rounded-sm">K</span>
                                        <h1 className="font-bold">Kolekta</h1>
                                </Link>
                                <div className="w-6 h-6 bg-gray-100 flex justify-center items-center rounded-sm">
                                        <ChevronLeft size={16} color="#6B7280" />
                                </div>
                        </div>

                        <div className="flex flex-col justify-between h-[80vh]">
                                <ul className="w-full space-y-4">
                                        {menuTop.map((item) => {
                                                const Icon = item.icon
                                                return (
                                                        <Link key={item.path} to={item.path}>
                                                                <li className={linkStyle(item.path)}>
                                                                        <Icon size={16} color="currentColor" />
                                                                        {item.name}
                                                                </li>
                                                        </Link>
                                                )
                                        })}
                                </ul>
                                <ul className="w-full space-y-4">
                                        {menuBottom.map((item) => {
                                                const Icon = item.icon
                                                return (
                                                        <Link key={item.path} to={item.path}>
                                                                <li className={linkStyle(item.path)}>
                                                                        <Icon size={16} color="currentColor" />
                                                                        {item.name}
                                                                </li>
                                                        </Link>
                                                )
                                        })}

                                        <li className="w-full flex items-center gap-2 mt-8">
                                                <span className="w-6 h-6 bg-accent text-white flex justify-center items-center rounded-sm p-2">
                                                        JG
                                                </span>
                                                <h1 className="font-bold text-gray-500">Jean Gaston</h1>
                                        </li>

                                </ul>
                        </div>
                </div>
        )
}
export default Navbar
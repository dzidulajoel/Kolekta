import { Calendar } from "lucide-react";

function Notification_card() {

    const notifications = [
        {
            id: 1,
            type: "Cotisation",
            from: "Marie Lawson",
            message: "Cotisation de 10 000 FCFA en retard",
            date: "10/03/2026",
            read: false
        },
        {
            id: 2,
            type: "Commission",
            from: "Kossi Mensah",
            message: "Commission de 500 FCFA versée",
            date: "09/03/2026",
            read: true
        },
        {
            id: 3,
            type: "Message",
            from: "Admin",
            message: "Nouvelle mise à jour disponible",
            date: "08/03/2026",
            read: false
        },
    ];

    return (
        <div className="w-full mx-auto">
            <ul className="space-y-3">
                {notifications.map((notif) => (
                    <li
                        key={notif.id}
                        className="p-2 rounded-md flex justify-between items-center bg-gray-100" 
                    >
                        <div>
                            <p className="text-sm font-semibold">{notif.from} - {notif.type}</p>
                            <p className="text-sm text-gray-600">{notif.message}</p>
                            <p className="text-xs text-gray-400 flex gap-1 justify-start items-center mt-2"> <Calendar size={12} color='#6B7280' /> {notif.date}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            {!notif.read && <span className="w-2 h-2 rounded-full bg-red-500"></span>}
                            <button className="text-gray-500 hover:text-gray-700 text-sm">Voir</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Notification_card;
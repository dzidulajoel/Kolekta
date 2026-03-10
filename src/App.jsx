import Comission from './pages/Comission'
import LayoutApp from './layouts/LayoutApp'
import Dashboard from './pages/Dashboard'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Parametre from './pages/Parametre'
import Notification from './pages/Notification'
import Cotisation from './pages/Cotisation'
import Membre from './pages/Membre'
import Suivis from './pages/Suivis'
import Statistique from './pages/Statistique'
import Aide from './pages/Aide'
import Profil from './pages/Profil'
import Error404 from './pages/Error404'
import Historique from './pages/Historique'
import Membre_details from './pages/details/Membre_details'


function App() {
    return (
        <>
             <div className="p-[1vh] min-h-screen box-border overflow-hidden bg-background">
                <BrowserRouter>
                    <Routes>
                        <Route path="/kolekta" element={<LayoutApp />}>
                            <Route index element={<Dashboard />} />
                            <Route path="commissions" element={<Comission />} />
                            <Route path="notifications" element={<Notification />} />
                            <Route path="parametres" element={<Parametre />} />
                            <Route path="cotisations" element={<Cotisation />} />
                            <Route path="membres" element={<Membre />} />
                            <Route path="membres/details" element={<Membre_details />} />
                            <Route path="suivis" element={<Suivis />} />
                            <Route path="statistiques" element={<Statistique />} />
                            <Route path="profil" element={<Profil />} />
                            <Route path="aide" element={<Aide />} />
                            <Route path="historique" element={<Historique />} />
                        </Route>
                        <Route path="*" element={<Error404 />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App

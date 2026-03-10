import Header_app from '../components/Header_app'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { useState } from "react"
import Creation_du_compte from '../components/Creation_du_compte'
function LayoutApp() {
    const [open,setOpen] = useState(false)

    return (
        <div className='w-full h-[98vh] flex justify-center items-center bg-background space-x-2'>
            <div className='w-2/12 h-full bg-white rounded-md p-4'>
                <Navbar />
            </div>

            <main className='w-10/12 h-full rounded-md p-4 bg-white relative'>
                {/* Header avec bouton + */}
                <Header_app setOpen={setOpen}/>

                {/* Overlay Création compte membre */}
                {open && (
                    <Creation_du_compte close={() => setOpen(false)} />
                )}

                {/* Contenu principal */}
                <div className='h-full overflow-y-auto'>
                    <Outlet  context={{ open, setOpen }}/>
                </div>
            </main>
        </div>
    )
}

export default LayoutApp
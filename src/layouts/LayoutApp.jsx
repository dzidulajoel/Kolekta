import Header_app from '../components/Header_app'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function LayoutApp() {
    return (
        <>
            <div className='w-full h-[98vh] flex justify-center items-center bg-background space-x-2'>
                <div className='w-2/12 h-full bg-white rounded-md p-4'><Navbar /></div>
                <main className='w-10/12 h-full bg-white rounded-md p-4 '>
                    <Header_app/>
                    <div className='h-full overflow-y-auto'>
                        <Outlet />
                    </div>
                </main>
            </div>
        </>
    )
}

export default LayoutApp 

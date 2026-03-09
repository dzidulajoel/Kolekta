import { ArrowDownWideNarrow, Bell } from 'lucide-react'
import React from 'react'
import Body_page from '../layouts/Body_page'
import Notification_card from '../components/Notification_card'

function Notification() {
    return (
        <>
            <Body_page>
                <div>
                    <div className="flex justify-between items-center">
                        <div className="flex justify-start items-center gap-2">
                            <h1 className='text-2xl text-highlight text-black gap-2 flex justify-start items-center'><Bell size={16} color='#a89af3' />Vos notifications</h1>
                            <span className='w-auto h-auto rounded-sm bg-accent text-white px-1 text-sm'>12</span>
                        </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Gérer vos notifications et alertes.</p>
                    
                </div>

                <div className="h-[89%] overflow-y-auto scroll-hidden w-full">
                        <Notification_card/>
                </div>
            </Body_page>
        </>
    )
}

export default Notification

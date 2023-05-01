import { useState } from 'react';


export default function NavDrawer({ children }) {
    const [isOpen, setIsOpen] = useState(false);  
    return (
        <div className='flex '>
            <button className='fixed' onClick={() => setIsOpen(true)}>💎hinhhj</button>
            <div  className={`${isOpen ? 'max-w-[500px]' : 'max-w-[0px]'}
            overflow-auto transition-all duration-500 ease-in-out h-screen bg-tea-green z-20 fixed`}>
                <div className='border border-black rounded-lg p-2 w-fit h-full'>
                    <div className='w-fit p-1' onClick={() => setIsOpen(false)}>
                        <button>APN</button>
                    </div>
                    <div

                        className={`${isOpen ? 'max-w-[500px] max-h-[400px] pt-20' : 'max-w-[0px] max-h-[0px]]'}
            overflow-auto transition-all duration-500 ease-in-out`}
                    >
                        <div className="px-4 pb-4">
                            <div className="grid grid-rows-4 gap-4">
                                <div>
                                    <button> usuarios</button>
                                </div>
                                <div>
                                    <button>Mis recetas</button>
                                </div>
                                <div>
                                    <button>Agenda</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='w-full p-2'>
                <div className=''>
                {children}
                </div>
           
            </div>

        </div>

    )
}

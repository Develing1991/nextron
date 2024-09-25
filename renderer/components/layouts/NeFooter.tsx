import React from 'react'

const NeFooter = () => {
    return (
        <footer className="h-[15dvh] bg-gray-200 ">
            <nav className="h-full">
                <ul className="flex justify-around p-2 gap-2 h-full">
                    <li className="border-red-100 bg-gray-950 flex-1 cursor-pointer flex items-center justify-center">
                        icon1
                    </li>
                    <li className="border-red-100 bg-gray-950 flex-1 cursor-pointer flex items-center justify-center">
                        icon2
                    </li>
                    <li className="border-red-100 bg-gray-950 flex-1 cursor-pointer flex items-center justify-center">
                        icon3
                    </li>
                    <li className="border-red-100 bg-gray-950 flex-1 cursor-pointer flex items-center justify-center">
                        icon4
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default NeFooter

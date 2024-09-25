import React from 'react'

const NeHeader = () => {
    return (
        <header className="h-[15dvh] bg-blue-300">
            <nav className="h-full">
                <ul className="flex justify-between p-2 gap-2 h-full items-center">
                    <li className="bg-blue-300 pl-2">home</li>
                    <li className="bg-blue-300 p-2 w-full">title / username</li>
                    <li className="bg-blue-300 p-2 cursor-pointer">menu</li>
                </ul>
            </nav>
        </header>
    )
}

export default NeHeader

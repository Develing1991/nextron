import React from 'react'
import NeHeader from '../../components/layouts/NeHeader'
import NeFooter from '../../components/layouts/NeFooter'

const Layout = ({ children }) => {
    return (
        <div className="bg-white w-full">
            <div className="flex justify-between flex-col max-w-[1080px] h-[1920px] m-auto">
                <NeHeader />
                <main className="bg-gray-500 h-full">
                    {/* aaa */}
                    {children}
                </main>
                <NeFooter />
            </div>
        </div>
    )
}

export default Layout

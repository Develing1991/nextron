import React, { useState } from 'react'

const Page = () => {
    const [deviceName, setDeviceName] = useState(null)
    const testIt = async () => {
        const filters = [
            { usbVendorId: 0x2341, usbProductId: 0x0043 },
            { usbVendorId: 0x2341, usbProductId: 0x0001 },
        ]
        try {
            const port = await navigator.serial.requestPort({ filters })
            const portInfo = port.getInfo()
            setDeviceName(`vendorId: ${portInfo.usbVendorId} | productId: ${portInfo.usbProductId}`)
        } catch (ex) {
            if (ex.name === 'NotFoundError') {
                setDeviceName('Device NOT found')
            } else {
                setDeviceName(ex)
            }
        }
    }
    return (
        <div>
            <button onClick={testIt}>button</button>
            <p>device name: {deviceName}</p>
        </div>
    )
}

export default Page

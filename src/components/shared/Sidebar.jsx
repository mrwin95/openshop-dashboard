import React from 'react'
import { FcBullish } from 'react-icons/fc'
import { DASHBOARD_SIDEBAR_LINKS } from '../../libs/consts/nagivation'
export default function Sidebar() {
    return (
        <div className="bg-neutral-900 w-60 p-3 flex flex-col text-white">
            <div className="flex items-center gap-2 px-1 py-3">
                <FcBullish fontSize={24} />
                <span className="text-neutral-100 text-lg">OpenShop</span>
            </div>
            <div className="flex-1">
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <div key={item.key}>{item.label}</div>
                ))}
            </div>
            <div>bottom part</div>
        </div>
    )
}

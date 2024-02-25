import { Outlet } from 'react-router-dom'
export default function Layout() {
    return (
        <div>
            <div className="bg-sky-200">siderbar</div>
            <div className="bg-teal-300">header</div>
            <div>{<Outlet />}</div>
        </div>
    )
}

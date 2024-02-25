import { Outlet } from 'react-router-dom'
export default function LoginLayout() {
    return (
        <div>
            <div className="bg-teal-300">header</div>
            <div>{<Outlet />}</div>
            <div className="bg-sky-200">footer</div>
        </div>
    )
}

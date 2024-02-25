import {
    HiOutlineCog,
    HiOutlineViewGrid,
    HiOutlineUsers,
    HiOutlineShoppingCart,
    HiOutlineCube,
    HiOutlineQuestionMarkCircle,
    HiOutlineDocumentText,
    HiOutlineAnnotation,
    HiOutlineLogout
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'DashBoard',
        path: '/',
        icon: <HiOutlineViewGrid />
    },
    {
        key: 'products',
        label: 'Products',
        path: '/products',
        icon: <HiOutlineCube />
    },
    {
        key: 'orders',
        label: 'Orders',
        path: '/orders',
        icon: <HiOutlineShoppingCart />
    },
    {
        key: 'customers',
        label: 'Customers',
        path: '/customers',
        icon: <HiOutlineUsers />
    },
    {
        key: 'transactions',
        label: 'Transactions',
        path: '/transactions',
        icon: <HiOutlineDocumentText />
    },
    {
        key: 'messages',
        label: 'Messages',
        path: '/messages',
        icon: <HiOutlineAnnotation />
    }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'settings',
        label: 'Settings',
        path: '/settings',
        icon: <HiOutlineCog />
    },
    {
        key: 'help',
        label: 'Help & Support',
        path: '/help',
        icon: <HiOutlineQuestionMarkCircle />
    },
    {
        key: 'logout',
        label: 'Logout',
        path: '/logout',
        icon: <HiOutlineLogout />
    }
]

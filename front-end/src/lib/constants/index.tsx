import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

import { 
	FaTimes, 
	FaHome, 
	FaEnvelope, 
	FaRegSun, 
	FaUserAlt, 
	FaIdCardAlt, 
	FaRegFileAlt,
	FaRegCalendarAlt,
	FaChartBar
} from 'react-icons/fa'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <FaHome />
	},
	{
		key: 'products',
		label: 'Dashboard Y',
		path: '/dashboardY',
		icon: <HiOutlineCube />
	},
	{
		key: 'orders',
		label: 'Dashboard X',
		path: '/dashboardX',
		icon: <HiOutlineShoppingCart />
	},
	// {
	// 	key: 'customers',
	// 	label: 'Customers',
	// 	path: '/customers',
	// 	icon: <HiOutlineUsers />
	// },
	// {
	// 	key: 'transactions',
	// 	label: 'Transactions',
	// 	path: '/transactions',
	// 	icon: <HiOutlineDocumentText />
	// },
	// {
	// 	key: 'messages',
	// 	label: 'Messages',
	// 	path: '/messages',
	// 	icon: <HiOutlineAnnotation />
	// }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
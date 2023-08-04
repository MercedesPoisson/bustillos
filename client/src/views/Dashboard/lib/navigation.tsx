import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderAll, faBuilding, faCity, faBook, faBookOpen, faCog, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

interface SidebarItem {
    key: string;
    label: string;
    path: string;
    icon: JSX.Element;
}

export const DASHBOARD_SIDEBAR_LINKS: SidebarItem[] = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/dashboard',
		icon: <FontAwesomeIcon icon={faBorderAll} />
	},
	{
		key: 'apartments',
		label: 'Alta Departamento',
		path: '/dashboard/formapartment',
		icon: <FontAwesomeIcon icon={faBuilding} />
	},
    {
		key: 'allapartments',
		label: 'Departamentos',
		path: '/dashboard/allapartments',
		icon: <FontAwesomeIcon icon={faCity} />
	},

	{
		key: 'rents',
		label: 'Alta Reservas',
		path: '/dashboard/formrents',
		icon: <FontAwesomeIcon icon={faBook} />
	},
	{
		key: 'allrents',
		label: 'Reservas',
		path: '/dashboard/allrents',
		icon: <FontAwesomeIcon icon={faBookOpen} />
	},
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS: SidebarItem[] = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <FontAwesomeIcon icon={faCog} />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <FontAwesomeIcon icon={faQuestionCircle} />
	}
]
import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: 'Sample',
        items: ['Rice'],
    },
    {
        text: 'CORE',
        items: ['dashboards'],
    },
    {
        text: 'INTERFACE',
        items: ['layout', 'components', 'utilities', 'pages', 'flows'],
    },
    {
        text: 'ADDONS',
        items: ['charts', 'tables'],
    },
];

export const sideNavItems: SideNavItems = {
    charts: {
        icon: 'bar-chart',
        link: '/charts',
        text: 'Charts',
    },
    components: {
        icon: 'package',
        submenu: [
            {
                link: '/dashboard/components/alerts',
                text: 'Alerts',
            },
            {
                link: '/dashboard/components/avatars',
                text: 'Avatars',
                new: true,
            },
            {
                link: '/dashboard/components/badges',
                text: 'Badges',
            },
            {
                link: '/dashboard/components/buttons',
                text: 'Buttons',
            },
            {
                link: '/dashboard/components/cards',
                text: 'Cards',
            },
            {
                link: '/dashboard/components/dropdowns',
                text: 'Dropdowns',
            },
            {
                link: '/dashboard/components/forms',
                text: 'Forms',
            },
            {
                link: '/dashboard/components/modal',
                text: 'Modal',
            },
            {
                link: '/dashboard/components/navigation',
                text: 'Navigation',
            },
            {
                link: '/dashboard/components/progress',
                text: 'Progress',
            },
            {
                link: '/dashboard/components/toasts',
                text: 'Toasts',
            },
            {
                link: '/dashboard/components/tooltips',
                text: 'Tooltips',
            },
        ],
        text: 'Components',
    },
    // self-designed
    Rice: {
        icon: 'activity',
        submenu: [
            // add new subtitle
            {
                link: '/dashboard/blank',
                text: 'Blank',
                new: true,
            },
            {
                link: '/dashboard/search',
                text: 'Search',
                new: false,
            },
            {
                link: '/dashboard/account',
                text: 'Account',
                new: false,
            },
        ],
        text: 'Rice',
    },
    dashboards: {
        icon: 'activity',
        submenu: [
            {
                link: '/dashboard',
                text: 'Default',
            },
            {
                link: '/dashboard/multipurpose',
                text: 'Multipurpose',
                new: true,
            },
            {
                link: '/dashboard/affiliate',
                text: 'Affiliate',
                new: true,
            },
            // // add new subtitle
            // {
            //     link: '/dashboard/blank',
            //     text: 'Blank',
            //     new: true,
            // },
        ],
        text: 'Dashboards',
    },
    flows: {
        icon: 'repeat',
        submenu: [
            {
                link: '/auth/multi-tenant-select',
                text: 'Multi-Tenant Registration',
            },
        ],
        text: 'Flows',
    },
    layout: {
        icon: 'layout',
        submenu: [
            {
                link: '/dashboard/static',
                text: 'Static Navigation',
            },
            {
                link: '/dashboard/dark',
                text: 'Dark Sidenav',
            },
            {
                link: '/dashboard/rtl',
                text: 'RTL Layout',
            },
            {
                text: 'Page Headers',
                submenu: [
                    {
                        link: '/dashboard/page-headers/simplified',
                        text: 'Simplified',
                    },
                    {
                        link: '/dashboard/page-headers/content-overlap',
                        text: 'Content Overlap',
                    },
                    {
                        link: '/dashboard/page-headers/breadcrumbs',
                        text: 'Breadcrumbs',
                    },
                    {
                        link: '/dashboard/page-headers/light',
                        text: 'Light',
                    },
                ],
            },
        ],
        text: 'Layout',
    },
    pages: {
        icon: 'book-open',
        submenu: [
            {
                submenu: [
                    {
                        submenu: [
                            {
                                link: '/auth/login',
                                text: 'Login',
                            },
                            {
                                link: '/auth/register',
                                text: 'Register',
                            },
                            {
                                link: '/auth/forgot-password',
                                text: 'Forgot Password',
                            },
                        ],
                        text: 'Basic',
                    },
                    {
                        submenu: [
                            {
                                link: '/auth/login-social',
                                text: 'Login',
                            },
                            {
                                link: '/auth/register-social',
                                text: 'Register',
                            },
                            {
                                link: '/auth/forgot-password-social',
                                text: 'Forgot Password',
                            },
                        ],
                        text: 'Social',
                    },
                ],
                text: 'Authentication',
            },
            {
                link: '/dashboard/pages/blank',
                text: 'Blank',
            },
            {
                submenu: [
                    {
                        link: '/error/401',
                        text: '401 Page',
                    },
                    {
                        link: '/error/404',
                        text: '404 Page',
                    },
                    {
                        link: '/error/404-glitch',
                        text: '404 Page (Glitch Effect)',
                    },
                    {
                        link: '/error/500',
                        text: '500 Page',
                    },
                ],
                text: 'Error',
            },
        ],
        text: 'Pages',
    },
    tables: {
        icon: 'filter',
        link: '/tables',
        text: 'Tables',
    },
    utilities: {
        icon: 'tool',
        submenu: [
            {
                link: '/dashboard/utilities/animations',
                text: 'Animations',
            },
            {
                link: '/dashboard/utilities/background',
                text: 'Background',
                new: true,
            },
            {
                link: '/dashboard/utilities/borders',
                text: 'Borders',
            },
            {
                link: '/dashboard/utilities/lift',
                text: 'Lift',
                new: true,
            },
            {
                link: '/dashboard/utilities/shadows',
                text: 'Shadows',
            },
            {
                link: '/dashboard/utilities/typography',
                text: 'Typography',
            },
        ],
        text: 'Utilities',
    },
};

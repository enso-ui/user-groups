import routeImporter from '@enso-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter.fromGlob(import.meta.glob('./userGroups/*.js', { eager: true }));
const Router = () => import('@enso-ui/ui/src/bulma/pages/Router.vue');

export default {
    path: 'userGroups/',
    component: Router,
    meta: {
        breadcrumb: 'user groups',
        route: 'administration.userGroups.index',
    },
    children: routes,
};

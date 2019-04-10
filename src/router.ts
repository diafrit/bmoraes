import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function generateRouteFromPath(path: string) {
	path = path.replace(/^src\\pages\\/, '')
	return {
		path:
			'/' +
			path
				.replace(/Index\.vue|\.vue$/, '')
				.replace(/([a-z0-9])([A-Z])/g, '$1-$2') // Convert to kebab-case
				.toLowerCase(),
		name: path.replace(/\.vue/, ''),
		component: () => import('@/pages/' + path),
		props: (route: any) => route.query,
	}
}

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		...process.env.VUE_APP_PAGES.split(',').map(generateRouteFromPath),
		{ path: '*', redirect: '/oops' }, // Default route for 404 page
	],
	scrollBehavior(to, from, savedPosition) {
		return { x: 0, y: 0 }
	},
})

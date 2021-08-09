import Vue, { VueConstructor } from 'vue';
import VueRouter from 'vue-router';
import HomeScreen from '../components/screen/home.screen.vue';
import DashboardScreen from '../components/screen/dashboard.screen.vue';

Vue.use(VueRouter);

type RouteName = 'home' | 'dashboard';
type RoutePath = '/' | '/dashboard';
interface Routes {
  name: RouteName;
  path: RoutePath;
  component: VueConstructor<Vue>;
}

const routes: Routes[] = [
  {
    name: 'home',
    path: '/',
    component: HomeScreen,
  },
  {
    name: 'dashboard',
    path: '/dashboard',
    component: DashboardScreen,
  },
];

const router = new VueRouter({ routes });

export default router;

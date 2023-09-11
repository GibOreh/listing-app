import Home from '~/pages/Home';
import GameCategory from '~/pages/GameCategory';
import AppCategory from '~/pages/AppCategory';
import ProductDetail from '~/pages/ProductDetail';
import Articles from '~/pages/Articles';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/game-category', component: GameCategory },
    { path: '/app-category', component: AppCategory },
    { path: '/articles', component: Articles },
    { path: '/product-detail', component: ProductDetail },
];
export { publicRoutes };

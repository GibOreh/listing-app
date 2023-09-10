import Home from '~/pages/Home';
import Category from '~/pages/Category';
import ProductDetail from '~/pages/ProductDetail';
import Articles from '~/pages/Articles';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/game-category', component: Category },
    { path: '/app-category', component: Category },
    { path: '/articles', component: Articles },
    { path: '/product-detail', component: ProductDetail },
];
export { publicRoutes };

import Home from '~/pages/Home';
import ProductDetail from '~/pages/ProductDetail';
import Articles from '~/pages/Articles';
import GameAllCategory from '~/pages/GameCategory/GameAllCategory';
import GamePopular from '~/pages/GameCategory/GamePopular';
import GameNewReleases from '~/pages/GameCategory/GameNewReleases';
import GameUpdate from '~/pages/GameCategory/GameUpdate';
import AppAllCategory from '~/pages/AppCategory/AppAllCategory';
import AppUpdate from '~/pages/AppCategory/AppUpdate';
import AppNewReleases from '~/pages/AppCategory/AppNewReleases';
import AppPopular from '~/pages/AppCategory/AppPopular';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/game-category', component: GameUpdate },
    { path: '/app-category', component: AppUpdate },
    { path: '/articles', component: Articles },
    { path: '/product-detail', component: ProductDetail },
    { path: '/game-category/update', component: GameUpdate },
    { path: '/game-category/new-releases', component: GameNewReleases },
    { path: '/game-category/popular', component: GamePopular },
    { path: '/game-category/all-category', component: GameAllCategory },
    { path: '/app-category/update', component: AppUpdate },
    { path: '/app-category/new-releases', component: AppNewReleases },
    { path: '/app-category/popular', component: AppPopular },
    { path: '/app-category/all-category', component: AppAllCategory },
];
export { publicRoutes };

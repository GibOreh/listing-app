import Home from '~/pages/Home';
import ProductDetail from '~/pages/ItemDetail';
import Articles from '~/pages/Articles';
import GameCategory from '~/pages/GameCategory/GameCategory.js';
import GameUpdate from '~/pages/GameCategory/GameUpdate'
import GamePopular from '~/pages/GameCategory/GamePopular'
import GameReleases from '~/pages/GameCategory/GameNewReleases'
import GameAllCategory from '~/pages/GameCategory/GameAllCategory'


const publicRoutes = [
    { path: '/', component: Home },
    { path: '/game-category', component: GameCategory },
    // { path: '/app-category', component: AppUpdate },
    { path: '/articles', component: Articles },
    { path: '/game-category/update', component: GameUpdate},
    { path: '/game-category/popular', component: GamePopular},
    { path: '/game-category/new-releases', component: GameReleases},
    { path: '/game-category/all-category', component: GameAllCategory},
    { path: '/product-detail', component: ProductDetail },

];
export { publicRoutes };

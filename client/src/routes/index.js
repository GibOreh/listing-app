import Home from '~/pages/Home/Home';
import ProductDetail from '~/pages/ItemDetail';
import Articles from '~/pages/Articles';
import GameCategory from '~/pages/GameCategory/GameCategory.js';
import AppCategory from '~/pages/AppCategory/AppCategory.js';
import GameUpdate from '~/pages/GameCategory/GameUpdate'
import GamePopular from '~/pages/GameCategory/GamePopular'
import GameReleases from '~/pages/GameCategory/GameNewReleases'
import GameAllCategory from '~/pages/GameCategory/GameAllCategory';
import AppUpdate from '~/pages/AppCategory/AppUpdate/AppUpdate'
import AppPopular from '~/pages/AppCategory/AppPopular/AppPopular'
import AppReleases from '~/pages/AppCategory/AppNewReleases/AppNewReleases'
import AppAllCategory from '~/pages/AppCategory/AppAllCategory/AppAllCategory'
import GameDetail from '~/pages/ItemDetail'
import AppDetail from '~/pages/AppDetail'
import Result from '~/pages/Result'
import GameCategoryDetail from '~/pages/GameCategoryDetail'


const publicRoutes = [
    { path: '/', component: Home },
    { path: '/game-category', component: GameCategory },
    { path: '/app-category', component:  AppCategory },
    { path: '/articles', component: Articles },
    { path: '/game-category/update', component: GameUpdate},
    { path: '/game-category/popular', component: GamePopular},
    { path: '/game-category/new-releases', component: GameReleases},
    { path: '/game-category/all-category', component: GameAllCategory},
    { path: '/product-detail', component: ProductDetail },
    { path: '/results/:searchTerm', component: Result},
    { path: '/app-category/update', component: AppUpdate},
    { path: '/app-category/popular', component: AppPopular},
    { path: '/app-category/new-releases', component: AppReleases},
    { path: '/app-category/all-category', component: AppAllCategory},
    { path: "/item/:slug/:_id", component: GameDetail},
    { path: "/item/:slug/:_id", component: AppDetail},
    { path: "/category/:categoryName", component: GameCategoryDetail},

];
export { publicRoutes };

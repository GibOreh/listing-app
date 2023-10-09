import Home from '~/pages/Home/Home';
import ProductDetail from '~/pages/GameDetail/GameDetail';
import Articles from '~/pages/Articles/Articles';
import GameCategory from '~/pages/GameCategory/GameCategory.js';
import AppCategory from '~/pages/AppCategory/AppCategory.js';
import GameUpdate from '~/pages/GameCategory/GameUpdate/GameUpdate'
import GamePopular from '~/pages/GameCategory/GamePopular/GamePopular'
import GameReleases from '~/pages/GameCategory/GameNewReleases/GameNewReleases'
import GameAllCategory from '~/pages/GameCategory/GameAllCategory/GameAllCategory';
import AppUpdate from '~/pages/AppCategory/AppUpdate/AppUpdate'
import AppPopular from '~/pages/AppCategory/AppPopular/AppPopular'
import AppReleases from '~/pages/AppCategory/AppNewReleases/AppNewReleases'
import AppAllCategory from '~/pages/AppCategory/AppAllCategory/AppAllCategory'
import GameDetail from '~/pages/GameDetail/GameDetail'
import AppDetail from '~/pages/AppDetail/AppDetail'
import ArticleDetail from '~/pages/ArticleDetail/ArticleDetail'
import Result from '~/pages/Result/Result'
import GameCategoryDetail from '~/pages/GameCategoryDetail/GameCategoryDetail'
import AppCategoryDetail from '~/pages/AppCategoryDetail/AppCategoryDetail'
import About from '~/components/Layout/DefaultLayout/Footer/About'
import Policy from '~/components/Layout/DefaultLayout/Footer/Policy'
import DCMA from '~/components/Layout/DefaultLayout/Footer/DMCA'


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
    { path: "/games/:slug/:_id", component: GameDetail},
    { path: "/apps/:slug/:_id", component: AppDetail},
    { path: "/articles/:slug/:_id", component: ArticleDetail},
    { path: "/game-category/:categoryName", component: GameCategoryDetail},
    { path: "/app-category/:categoryName", component: AppCategoryDetail},
    { path: "/about", component: About},
    { path: "/policy", component: Policy},
    { path: "/dmca", component: DCMA},

];
export { publicRoutes };

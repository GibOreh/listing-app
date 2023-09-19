import { Routes, Route, Link } from 'react-router-dom';
import Update from './AppUpdate';
import NewReleases from './AppNewReleases';
import Popular from './AppPopular';
import AllCategory from './AppAllCategory';
import '~/pages/AppCategory/';
import './style.css';

function AppCategory() {
    return (
        <div>
            <h2>Game Category</h2>
            <p>
                For us, enthusiasts, the love for games never changes. And to keep that love burning, we created this
                category to store the best MOD APK, Paid APK & Original APK games, as a premise to build a “so deep”
                playground for gamers. When participating in this journey, you will discover a new game world, a new
                land that you have never known. There are countless attractive, unique, and worth-playing titles shared
                every day. And a part of them are MOD APK games that serve the growing needs of many players. Especially
                we don’t charge anything!
            </p>
            <nav>
                <ul className="list-inline">
                    <li className="list-inline-item px-2 col-2 d-inline">
                        <Link to="/app-category/update">Update</Link>
                    </li>
                    <li className="list-inline-item px-2 col-2 d-inline">
                        <Link to="/app-category/new-releases">New Releases</Link>
                    </li>
                    <li className="list-inline-item px-2 col-2 d-inline">
                        <Link to="/app-category/popular">Popular</Link>
                    </li>
                    <li className="list-inline-item px-2 col-2 d-inline">
                        <Link to="/app-category/all-category">All Category</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                {/* Route for Update */}
                <Route path="/app-category/update" element={<Update />} />

                {/* Route for New Releases */}
                <Route path="/app-category/new-releases" element={<NewReleases />} />

                {/* Route for Popular */}
                <Route path="/app-category/popular" element={<Popular />} />

                {/* Route for All Category */}
                <Route path="/app-category/all-category" element={<AllCategory />} />
            </Routes>
        </div>
    );
}

export default AppCategory;

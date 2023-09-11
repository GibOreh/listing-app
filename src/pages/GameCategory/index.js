import { Outlet, Link } from 'react-router-dom';

function GameCategory() {
    return (
        <div>
            <h2>Game Category</h2>
            <nav>
                <ul className="list-inline">
                    <li className="list-inline-item px-2 col-2 d-inline">
                        <Link to="update">Update</Link>
                    </li>
                    <li className="list-inline-item px-2 col-2 d-inline">
                        <Link to="new-releases">New Releases</Link>
                    </li>
                    <li className="list-inline-item px-2 col-2 d-inline">
                        <Link to="popular">Popular</Link>
                    </li>
                    <li className="list-inline-item px-2 col-2 d-inline">
                        <Link to="all-category">All Category</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default GameCategory;

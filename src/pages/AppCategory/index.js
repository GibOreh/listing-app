import { Outlet } from 'react-router-dom';

function AppCategory() {
    return (
        <div>
            <h2>App Category</h2>
            <Outlet />
        </div>
    );
}

export default AppCategory;

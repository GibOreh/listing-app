import React from 'react';
import { Link } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

function Breadcrumbs({title, category}) {
    const routes = [
        { path: "/:category", breadcrumb: category },
        { path: "/", breadcrumb: "Home"},
        { path: "/:category/:pid/:title ", breadcrumb: title },
    ];
    const breadcrumbs = useBreadcrumbs(routes); 

    return ( 
        <div>
            {breadcrumbs?.filter(el => !el.match.route === false).map(({match, breadcrumb})=>(
                <Link key={match.pathname} to={match.pathname}>
                    <span>{breadcrumb}</span>
                </Link>
            ))}
        </div>
    );
}

export default Breadcrumbs;

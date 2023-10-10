import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
import { HiChevronRight } from "react-icons/hi2";
import useBreadcrumbs from 'use-react-router-breadcrumbs';

const Breadcrumb = ({ title, category }) => {
  const routes = [
    { path: "/:category", breadcrumb: category },
    { path: "/", breadcrumb: "Home" },
    { path: "/:category/:pid/:title", breadcrumb: title },
  ];
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <div className ='pb-2'>
      {breadcrumbs?.filter(el => !el.match.route === false).map(({ match, breadcrumb },index,self) => (
        <Link key={match.pathname} className="breadcrumb-link">
          <span>{breadcrumb}</span>
          {index !== self.length -1 && <HiChevronRight />}
        </Link>
      ))}
    </div>
  );
};

export default Breadcrumb;

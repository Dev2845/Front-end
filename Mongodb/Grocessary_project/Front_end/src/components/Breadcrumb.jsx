import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumb({ customPaths = [] }) {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="container breadcrumb-container">
      <Link to="/" className="flex-center gap-8">
        <Home size={14} />
        <span>Home</span>
      </Link>

      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        const name = value.charAt(0).toUpperCase() + value.slice(1);

        // If custom name is passed (e.g. for dynamic product IDs)
        const displayName = (customPaths[index] && customPaths[index].name) || name;

        return (
          <React.Fragment key={to}>
            <ChevronRight size={12} className="breadcrumb-separator" />
            {isLast ? (
              <span className="breadcrumb-active">{displayName}</span>
            ) : (
              <Link to={to}>{displayName}</Link>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

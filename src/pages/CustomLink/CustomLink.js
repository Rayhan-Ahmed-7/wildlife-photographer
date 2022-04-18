import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({children,to,...props}) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({path:resolved.pathname,end:true});
    return (
        <Link className={`nav-link ${match?'text-danger':''}`}
        to={to}
        >
        {children}
        </Link>
    );
};

export default CustomLink;
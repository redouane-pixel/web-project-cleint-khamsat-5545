import React from 'react';
// this is for link to the first page
import { Link } from 'react-router-dom';
const Header = () => {
    return(
        <div className="header">
            <div className="link">
                <Link to="/">
                    <a>العودة إلى المتجر</a>
                </Link>
            </div>
        </div>
    );
}
export default Header;
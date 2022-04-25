import React from 'react';
import {Link} from 'react-router-dom';

const header = (props) => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark navbar-fixed bg-dark">
                <div className="navbar-brand"  >Library Application</div>
                <a className="navbar-brand" href="/books" >Home</a>
                <a className="navbar-brand" href="/categories" >Categories</a>

            </nav>
        </header>
    )
}

export default header;

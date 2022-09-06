import React, { useState, useEffect } from "react";

function Header({setpage}) {
    
    function activeNav(e, page) {
        // console.log(e.target);
        var link = document.querySelectorAll('.navActive');
        for ( let i = 0; i < link.length; i++) {
            link[i].classList.toggle('navActive')
        }
        e.target.classList.add('navActive');
        setpage(page)
    }

    return (
        <header className="row d-flex flex-row justify-content-around">
        <h1 className="angel col-12 col-md-6">
            Angel Van de Feniks
        </h1>
            <nav className="col-12 col-md-6">
                <ul className="nav-list row d-flex flex-row">
                    <li className="col" onClick={(e) => activeNav(e, 'about')}>About Me</li>
                    <li className="col" onClick={(e) => activeNav(e, 'projects')}>Portfolio</li>
                    <li className="col" onClick={(e) => activeNav(e, 'contact')}>Contact</li>
                    <li className="col" onClick={(e) => activeNav(e, 'resume')}>Resume</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
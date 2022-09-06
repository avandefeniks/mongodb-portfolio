import React from 'react';

function Footer() {

    return (
        <div className='row div-contact-me footer d-flex flex-row'>
            <nav className="col-12">
                <ul className="contact-list d-flex flex-row justify-content-around">
                    <li className='col'>
                        831-531-8387
                    </li>
                    <li className='col'>
                        <a href="mailto:angelj.vandefeniks@gmail.com">
                            angelj.vandefeniks@gmail.com</a>
                    </li>
                    <li className='col'>
                        <a href="https://github.com/avandefeniks">GitHub</a>
                    </li>
                    <li className='col'>
                        <a href="https://www.linkedin.com/in/angel-van-de-feniks-90916613/">Linkedin</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Footer;
import React from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css?inline";
import instagramLogo from '../assets/images/IG.png';

export default function Footer() {
    return(
        <footer className="py-3 fixed-bottom" style={{ borderTop: '1px solid black', width: '75%', margin: 'auto', backgroundColor: 'beige' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <p>
                            <a
                                href="https://www.instagram.com/nellieandscarlet/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-link"
                                style={{ marginRight: '50px' }}
                            >
                                <img src={instagramLogo} alt='instagram' style={{ width: '20px', height: '20px' }}></img>
                            </a>{" | "}
                            <a
                                href="mailto:youremail@example.com"
                                className="footer-link"
                                style={{ marginLeft: '50px' }}
                            >
                                Email
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
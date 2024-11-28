import React from 'react';
import './Address.css';

function Address() {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <footer className="footer bg-dark text-light py-5">
                <div className="container my-2" id="contact">
                    <div className="row">
                        {/* Logo Section */}
                        <div className="col-lg-4 col-md-6 mb-4 text-center text-lg-left" style={{ marginTop: '-60px' }}>
                            <img src="logo123.png" alt="Laundryes" className="img-fluid logo" />
                            <p className="justified-text" style={{ marginTop: '-70px' }}>
                                This platform has been crafted to provide you with a seamless experience. Designed with the latest tools, it allows for easy navigation, effortless service booking, and hassle-free updates, making your car maintenance journey smooth and convenient.
                            </p>
                            <div className="social-icons">
                                <button onClick={() => window.open('https://facebook.com', '_blank')} className="btn btn-link">
                                    <i className="fab fa-facebook"></i>
                                </button>
                                <button onClick={() => window.open('https://instagram.com', '_blank')} className="btn btn-link">
                                <i class="fa-brands fa-instagram"></i>
                                </button>
                                <button onClick={() => window.open('https://twitter.com', '_blank')} className="btn btn-link">
                                    <i className="fab fa-square-x-twitter"></i>
                                </button>
                            </div>
                        </div>
                        {/* Quick Links Section */}
                        <div className="col-lg-4 col-md-6 mb-4 text-center">
                            <h2>Quick Links</h2>
                            <ul>
                                <li><a href="#home" className="text-light">Home</a></li>
                                <li><a href="#about" className="text-light">About</a></li>
                                <li><a href="#services" className="text-light">Services</a></li>
                            </ul>
                        </div>
                        {/* Contact Section */}
                        <div className="col-lg-4 col-md-12 mb-4 text-center text-lg-left">
                            <h2>Contact</h2>
                            <ul>
                                <li><i className="fa-solid fa-location-dot"></i> N.R.K.R Road, near Reg. Office, Sivakasi - 626124.</li>
                                <li><i className="fa-solid fa-phone"></i> +91 12345 67890</li>
                                <li><i className="fa-solid fa-envelope"></i> <a href="mailto:laundryes@gmail.com" className="text-light">carcares@gmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="bottom bg-dark py-3 text-center">
                <p>&copy; {currentYear} Botcode. All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Address;

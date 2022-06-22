import React from 'react'

function About() {
    return (
        <div>
            <section id="hero" className="d-flex align-items-center">
                <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-9 text-center">
                            <h1>One Page Bootstrap Website Template</h1>
                            <h2>We are team of talented designers</h2>
                        </div>
                    </div>
                    <div className="text-center">
                        <a href="#about" className="btn-get-started scrollto">Get Started</a>
                    </div>

                    <div className="row icon-boxes">
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className="icon"><i className="ri-stack-line"></i></div>
                                <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className="icon"><i className="ri-palette-line"></i></div>
                                <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                                <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="400">
                            <div className="icon-box">
                                <div className="icon"><i className="ri-command-line"></i></div>
                                <h4 className="title"><a href="">Magni Dolores</a></h4>
                                <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="500">
                            <div className="icon-box">
                                <div className="icon"><i className="ri-fingerprint-line"></i></div>
                                <h4 className="title"><a href="">Nemo Enim</a></h4>
                                <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* <!-- End Hero --> */}

            <main id="main">

                {/* <!-- ======= About Section ======= --> */}
                <section id="about" className="about">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>About Us</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. </p>
                        </div>

                        <div className="row content">
                            <div className="col-lg-6">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <ul>
                                    <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                                    <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                                    <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                                </ul>
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0">
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <a href="#" className="btn-learn-more">Learn More</a>
                            </div>
                        </div>

                    </div>
                </section>
                {/* <!-- End About Section --> */}

                {/* <!-- ======= Counts Section ======= --> */}
                <section id="counts" className="counts section-bg">
                    <div className="container">

                        <div className="row justify-content-end">

                            <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                                <div className="count-box">
                                    <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="2" className="purecounter"></span>
                                    <p>Happy Clients</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                                <div className="count-box">
                                    <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="2" className="purecounter"></span>
                                    <p>Projects</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                                <div className="count-box">
                                    <span data-purecounter-start="0" data-purecounter-end="30" data-purecounter-duration="2" className="purecounter"></span>
                                    <p>Years of experience</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                                <div className="count-box">
                                    <span data-purecounter-start="0" data-purecounter-end="20" data-purecounter-duration="2" className="purecounter"></span>
                                    <p>Awards</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                {/* <!-- End Counts Section --> */}
                
                </main>
        </div>
    )
}

export default About
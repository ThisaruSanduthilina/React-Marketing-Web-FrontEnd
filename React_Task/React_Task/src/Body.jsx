import './index.css';

function Body() {
    return (
        <>
            {/* Main marketing section */}
            <div className="marketing">
                {/* Main title */}
                <div className="textOne">
                    MARKETING MAKING <br /> WITH XMM.
                </div>

                {/* Subtitle */}
                <div className="sub-title">
                    XMM empowers businesses to create dynamic content, target <br /> specific demographics, and optimize their presence.
                </div>

                {/* Call-to-action button */}
                <div className="cta-buttons">
                    <button className="btnTelegram">Join Telegram</button>

                </div>
                
                <div className="hp">
                    <h2>Our Happy Customers</h2>
                    <p>Our Happy Customers  are at the heart<br/> of everything we do</p>
                </div>

                {/* Hero image */}
                <div className="img2">
                    <img src="src/assets/Images/xmm-hero.png" alt="Hero" />
                </div>

                {/* Divider section with arrow-down button */}
                <div className="divider">
                    <div className="arrow-down">
                        <button className="btn3">
                            <div className="img3">
                                <img src="src/assets/Images/arrow.png" alt="Arrow Down" />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Second page image */}
                <div className="2ndpage">
                    <div className="img4">
                        <img src="src/assets/Images/xmm-img1.png" alt="Second Page" />
                    </div>
                </div>

                {/* About Us section */}
                <div className="aboutus">
                    <h5>About us</h5>
                    <h1>Best Ever Token Designed <br /> For Remarkable Success</h1>
                    <h4>
                        The main advantage of supporting SXMM is that the project is focused<br />
                        on creating volume and marking through. XMM empowers<br />
                        businesses to create dynamic content targeting specific demographics.
                    </h4>

                    {/* List of advantages with tick icons */}
                    <div className="tick">
                        <div className="box">
                            <img src="src/assets/Images/xmm-tick.png" alt="Market" />
                            <span>Market</span>
                        </div>
                        <div className="box">
                            <img src="src/assets/Images/xmm-tick.png" alt="Volume" />
                            <span>Volume</span>
                        </div>
                        <div className="box">
                            <img src="src/assets/Images/xmm-tick.png" alt="Trend" />
                            <span>Trend</span>
                        </div>
                    </div>

                    {/* Read Whitepaper button */}
                    <div className="btn">
                        <button type="button" className="btn">Read Whitepaper</button>
                    </div>
                </div>

                {/* Features section */}
                <div className="features">
                    <div className="featuress"><span>Features</span></div>
                    <div className="FOX"><h1>Features Of X <br /> MARKET MAKER</h1></div>
                    <div className="xmarket">
                        X Market Maker offers a <br /> comprehensive set of features <br />
                        tailored for market participants.<br />
                        Its core functionalities include<br /> real-time pricing and liquidity.
                    </div>

                    {/* Cards showcasing different features */}
                    <div className="cards">
                        <div className="card">
                            <div className='o1'>01</div>
                            <div className='t1'>Benefits For Holders</div>
                            <div className='imgt1'><img src="src/assets/Images/xmm-icon1.png" alt="Icon 1" /></div>
                            <div className='t2'>
                                We aim to increase the value of our currency to benefit our<br />
                                community. Market Making will <br /> be a key focus. We aim to increase the value of our currency to<br />
                                benefit our community.
                            </div>
                        </div>

                        <div className="card">
                            <div className='01'>02</div>
                            <div className='t1'>Biggest Community</div>
                            <div className='imgt2'><img src="src/assets/Images/xmm-icon2.png" alt="Icon 2" /></div>
                            <div className='t2'>
                                We aim to increase the value of our currency to benefit our<br />
                                community. Market Making will <br /> be a key focus. We aim to increase the value of our currency to<br />
                                benefit our community.
                            </div>
                        </div>

                        <div className="card">
                            <div className='01'>03</div>
                            <div className='t1'>Ecosystem-Redefined</div>
                            <div className='imgt3'><img src="src/assets/Images/xmm-icon3.png" alt="Icon 3" /></div>
                            <div className='t2'>
                                We aim to increase the value of our currency to benefit our<br />
                                community. Market Making will <br /> be a key focus. We aim to increase the value of our currency to<br />
                                benefit our community.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Body;

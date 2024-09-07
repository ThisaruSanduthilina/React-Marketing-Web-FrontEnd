function Header(){
    return(
        <header>
            <div className="Header-container">
                
           
            <nav className="nav">
                <ul>
                <a href className="logo">
                <img className="logo" src="src/assets/Images/xmm-logo.png"></img>
                </a>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Tokenomics</a></li>
                    <li><a href="#">Road Map</a></li>
                    <li><a href="#">FAQ</a></li>
                    <button>Buy Token</button>
                </ul>
               
            </nav>
            
            </div>
        </header>
    )

}
export default Header
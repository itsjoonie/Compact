import "./Splash.css"

function SplashPage() {
    return (
        <div className="Splash-Page">

            {/* banner */}
                <div className="banner1">
                    <div className="banner1-content">
                        <div className="banner1-content-h1">
                            <h1>Tiny and Cozy Travels</h1>
                        </div>
                        <div className="banner1-content-h2">
                            <h2>Stay Compact</h2>
                        </div>
                        <div className="banner1-content-btn">
                            <button className="banner1-btn"><span>Explore Now!</span></button>
                        </div>
                    </div>
                </div>
            {/* Anywhere */}
                <div className="anywhere-container">
                    <div className="explore-content">
                        <div className="explore-h1">
                            <h1>Explore anywhere</h1>
                        </div>
                        <div className="explore-icons-container">
                            <div className="explore-icon explore-icon1">
                                <img className=" explore-icon"src="https://i.guim.co.uk/img/media/62c0826a1b6d7d7f390f9fd2ac4b1b7f7ff4c241/0_150_3024_1815/master/3024.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=e5885aba888050e88b4392f5eded1d8b" alt="img" />
                                <h2>Joshua tree</h2>
                            </div>
                            <div className="explore-icon explore-icon2">
                                <img className="explore-icon" src="https://www.travelyosemite.com/media/822625/merced-river-yosemite-hald-dome-view-252168645-1000x667.jpg?anchor=center&mode=crop&width=363&height=346&rnd=132424897380000000" alt="img" />
                                <h2>Yosemite</h2>
                            </div>
                                <div className="explore-icon explore-icon3">
                                <img className="explore-icon" src="https://media.istockphoto.com/photos/tropical-beach-background-picture-id1145474071?k=20&m=1145474071&s=612x612&w=0&h=toGQ0gUXiWY_80bra65p56ZMLJty17qMdwcFnenQKEk=" alt="img" />
                                <h2>Beach</h2>
                            </div>
                                                       
                            <div className="explore-icon explore-icon4 icon4-img">
                                <img className="explore-icon" src="https://www.treehugger.com/thmb/QolJfOYFmxwIH6Sxv5SBqY8Kq-M=/1885x1414/smart/filters:no_upscale()/GettyImages-1273584292-cbcd5f85f4c646d58f7a7fa158dcaaeb.jpg" alt="img" />
                                <h2>Forest</h2>
                            </div>
                            <div className="explore-icon  explore-icon5">
                                <img className="explore-icon icon5-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wiki_training_0226.jpg/1200px-Wiki_training_0226.jpg" alt="img" />
                                <h2>Los Angeles</h2>
                            </div>
                            <div className="explore-icon explore-icon6">
                                <img className="explore-icon icon6-img" src="https://s7d2.scene7.com/is/image/ritzcarlton/50535022-shutterstock_273724124-1" alt="img" />
                                <h2>New York</h2>
                            </div>
                            <div className="explore-icon explore-icon7">
                                <img className="explore-icon icon7-img" src="https://live-production.wcms.abc-cdn.net.au/11bea9410703c89775ed98d4d32c6321?impolicy=wcms_crop_resize&cropH=1680&cropW=2983&xPos=17&yPos=137&width=862&height=485" alt="img" />
                                <h2>Ocean</h2>
                            </div>  
                            <div className="explore-icon explore-icon8">
                                <img className="explore-icon icon8-img" src="https://www.state.gov/wp-content/uploads/2018/11/France-1980x1406.jpg" alt="img" />
                                <h2>France</h2>
                            </div>                                                       
                        </div>
                    </div>
                    <div className="stayAnywhere-content">
                        <h1>Stay anywhere</h1>

                    </div>
                </div>
        
        </div>
    )
}

export default SplashPage
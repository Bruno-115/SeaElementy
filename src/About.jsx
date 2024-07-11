function About () {
    return(
        <div id="About" className="About">
            <h1 className="About__Title">Sobre</h1>
            <div className="About__Display">

                <div className="About__Block About__Block-Sea ">
                    <h2 className="About__Block-Title">Mar dos caribes</h2>
                    <img src="./img/ship.svg" alt="" className="About__Block-Img" />
                        <p className="About__Block-Des">Atividades:</p>

                        <p className="About__Block-Des">Pesca  
                        <img src="./img/fishing.svg" alt="" className="About__Block-Des-Img" /></p>

                        <p className="About__Block-Des">Caça ao tesouro  
                        <img src="./img/map.svg" alt="" className="About__Block-Des-Img" /></p>

                        <p className="About__Block-Des">Visitas a ilhas  
                        <img src="./img/island.svg" alt="" className="About__Block-Des-Img" /></p>

                        <p className="About__Block-Des">Exploração aquatica 
                        <img src="./img/dive.svg" alt="" className="About__Block-Des-Img" /></p>
                </div>

                <div className="About__Block About__Block-Ice">
                    <h2 className="About__Block-Title">Geleiras</h2>
                    <img src="./img/glacier-svgrepo-com.svg" alt="" className="About__Block-Img" />
                    <p className="About__Block-Des">Atividades:</p>

                    <p className="About__Block-Des">Pesca no gelo
                    <img src="./img/fishing.svg" alt="" className="About__Block-Des-Img" /></p>

                    <p className="About__Block-Des">Explorar vida   
                    <img src="./img/penguin.svg" alt="" className="About__Block-Des-Img" /></p>

                    <p className="About__Block-Des">Visitas ao gelo 
                    <img src="./img/polar.svg" alt="" className="About__Block-Des-Img" /></p>

                    <p className="About__Block-Des">Ski 
                    <img src="./img/ski.svg" alt="" className="About__Block-Des-Img" /></p>

                </div>

                <div className="About__Block About__Block-Amz ">
                    <h2 className="About__Block-Title">Amazonas</h2>
                    <img src="./img/macaw.svg" alt="" className="About__Block-Img" />
                    <p className="About__Block-Des">Atividades:</p>

                    <p className="About__Block-Des">Pesca em rios 
                    <img src="./img/fishing.svg" alt="" className="About__Block-Des-Img" /></p>

                    <p className="About__Block-Des">Observar a vida
                    <img src="./img/capybara.svg" alt="" className="About__Block-Des-Img" /></p>

                    <p className="About__Block-Des">Visitas a vila indígenas
                    <img src="./img/tent.svg" alt="" className="About__Block-Des-Img" /></p>

                    <p className="About__Block-Des">Artesanado local
                    <img src="./img/wool.svg" alt="" className="About__Block-Des-Img" /></p>

                </div>
            </div>
        </div>
    );
}


export default About

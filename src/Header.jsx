
function Header() {
   
    return(
        <div className="Header__Container">  
        <img src="./img/Logo.png" alt="" className="Header__Logo" />      
                    <div className="Header__Btn">
                        <a  href="#About" className="Header__Btn-Info Header__Btn-Animation"><img src="./img/location-pin-alt-svgrepo-com.svg" alt="" className="Header__Btn-Img"/>local</a>
                        <a href="#Info" className="Header__Btn-Doubt Header__Btn-Animation"><img src="./img/question-mark-svgrepo-com.svg" alt="" className="Header__Btn-Img"/>Sobre</a>
                    </div>
                    <div className="Header__Background"/>
        </div>
    )
}
export default Header
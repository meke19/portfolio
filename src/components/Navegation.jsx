import "../styles/components/Navegation.sass"
import logo from '../img/logo.png'

const Navegation = () => {
    const toggleHamburger = () => {
        let linksArea = document.querySelector(".linksArea")
        linksArea.classList.toggle("active")
    }
    return(
        <header className="header">
            <div className="logoArea">
                <img src={logo} alt='logomarca'></img>
            </div>
            <div className="hamburger" onClick={toggleHamburger}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="linksArea">
                <ul>
                    <li><a href="#scrollTecnology">Tecnologias</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#scrollFooter">Contato</a></li>
                </ul>
            </div>
        </header>  
    )
}

export default Navegation;
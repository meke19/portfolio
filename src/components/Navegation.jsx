import "../styles/components/Navegation.sass"
import logo from '../img/logo.png'

const Navegation = () => {
    return(
        <header className="header">
            <div className="logoArea">
                <img src={logo} alt='logomarca'></img>
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
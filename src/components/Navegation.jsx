import "../styles/components/Navegation.sass"
import logo from '../img/logo.png'

const Navegation = () => {
    let show = true;
    const toggleHamburger = () => {
        const menuSection = document.querySelector(".menu-section");
        document.body.style.overflow = show ? "hidden" : "initial";
        menuSection.classList.toggle("on", show);
        show = !show;
    }
    return(
        <header className="header">
            <div className="logoArea">
                <img src={logo} alt='logomarca'></img>
            </div>
            <div className="menu-section">
                <div className="hamburger" onClick={toggleHamburger}>
                    <div className="line-one"></div>
                    <div className="line-two"></div>
                    <div className="line-three"></div>
                </div>
                <div className="linksArea">
                    <ul>
                        <li><a href="#scrollTecnology">Tecnologias</a></li>
                        <li><a href="#projects">Projetos</a></li>
                        <li><a href="#scrollFooter">Contato</a></li>
                    </ul>
                </div>
            </div>
        </header>  
    )
}

export default Navegation;
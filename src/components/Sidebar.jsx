import "../styles/components/sidebar.sass"
import {AiFillCode} from 'react-icons/ai'
import ImagemCode from '../img/coding_img.png'
import Curriculo from '../pdf/curriculo_23.pdf'

const Sidebar = () => {
    return(
        <div id="row">
            <div className="cardText"> 
                <p className="title">Marcos <span>Vinicius</span></p>
                <p className="aboutMe">Desenvoldedor Front-End</p>
                <a href={Curriculo} target="_blank" className="btn download">Download CV</a>
            </div>
            <div className="cardIcon">
                <img src={ImagemCode} />
            </div>
        </div>
    )
}

export default Sidebar
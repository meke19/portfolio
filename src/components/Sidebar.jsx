import "../styles/components/sidebar.sass"
import {AiFillCode} from 'react-icons/ai'
import Curriculo from '../pdf/curriculo.pdf'

const Sidebar = () => {
    return(
        <div id="row">
            <div className="cardText"> 
                <p className="title">Marcos <span>Vinicius</span></p>
                <p className="aboutMe">Desenvoldedor Front-End</p>
                <a href={Curriculo} target="_blank" className="btn download">Download CV</a>
            </div>
            <div className="cardIcon">
                <AiFillCode size={350} className="icon"/>
            </div>
        </div>
    )
}

export default Sidebar
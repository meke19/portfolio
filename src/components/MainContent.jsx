import '../styles/components/mainContent.sass'
import Navegation from './Navegation'

import {DiJavascript1} from 'react-icons/di'
import {DiReact} from 'react-icons/di'
import {DiSass} from 'react-icons/di'
import {DiHtml5} from 'react-icons/di'
import {DiCss3} from 'react-icons/di'
import {FaGitAlt} from 'react-icons/fa'
import {DiNodejs} from 'react-icons/di'
import {FaDocker} from 'react-icons/fa'
import {SiTypescript} from 'react-icons/si'

const MainContent = () => {
    return(
        <section id='scrollTecnology'>
         <div className='titleName'>
            <div className='titleTec'>
                <span>T</span>
                <span>e</span>
                <span>c</span>
                <span>n</span>
                <span>o</span>
                <span>l</span>
                <span>o</span>
                <span>g</span>
                <span>i</span>
                <span>a</span>
            </div>
         </div>     
         <section className="tecnology">
            <div className="card script">
                <h2>JavaScript</h2>
                <DiJavascript1 className='icons script'/>
            </div>
            <div className="card react">
                <h2>ReactJS</h2>
                <DiReact className='icons react'/>
            </div>
            <div className="card sass">
                <h2>Sass</h2>
                <DiSass className='icons sass'/>
            </div>
            <div className="card html">
                <h2>HTML</h2>
                <DiHtml5 className='icons html'/>
            </div>
            <div className="card css">
                <h2>Css</h2>
                <DiCss3 className='icons css'/>
            </div>
            <div className="card git">
                <h2>Git</h2>
                <FaGitAlt className='icons git'/>
            </div>

         </section>
         <div className='titleName-2'>
            <p> Tecnologias que eu quero aprender</p>
         </div> 
         <section className="tecnology-2">
            <div className="card node">
                <h2>NodeJS</h2>
                <DiNodejs className='icons node'/>
            </div>
            <div className="card docker">
                <h2>Docker</h2>
                <FaDocker className='icons docker'/>
            </div>
            <div className="card typescript">
                <h2>Typescript</h2>
                <SiTypescript className='icons typescript'/>
            </div>

         </section>
        </section>
    )   
}

export default MainContent;
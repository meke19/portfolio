import '../styles/components/mainContent.sass'


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
                <DiJavascript1 className='icons script'/>
            </div>
            <div className="card react">
                <DiReact className='icons react'/>
            </div>
            <div className="card sass">
                <DiSass className='icons sass'/>
            </div>
            <div className="card html">
                <DiHtml5 className='icons html'/>
            </div>
            <div className="card css">
                <DiCss3 className='icons css'/>
            </div>
            <div className="card git">
                <FaGitAlt className='icons git'/>
            </div>

         </section>
         <div className='titleName-2'>
            <p> Tecnologias que eu quero aprender</p>
         </div> 
         <section className="tecnology-2">
            <div className="card docker">
                <FaDocker className='icons docker'/>
            </div>
            <div className="card typescript">
                <SiTypescript className='icons typescript'/>
            </div>
         </section>
        </section>
    )   
}

export default MainContent;
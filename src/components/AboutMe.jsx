import ImgAbout from '../img/ImgAbout.jpeg'
import Navegation from './Navegation'
import "../styles/components/aboutMe.sass"

export default function AboutMe(){
    return(
        <section className="scrollAbout">
            <div id='container'>
                <div className="describe">
                    <h2>Olá meu nome é <span>Marcos</span></h2>
                    <p>Sou uma pessoa que sempre gostou de tecnologia e 
                        tudo que engloba esse mundo, o estudo nessa área é algo prazeroso que 
                        pratico todos dias se deixar e nesse momento busco uma oportunidade no mercado.
                    </p>
                </div>
                <div className="MyPicture">
                    <img src={ImgAbout}></img>
                </div>
            </div>
        </section>
    )
}
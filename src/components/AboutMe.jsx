import ImgAbout from '../img/imgAbout2.jpeg'
import "../styles/components/aboutMe.sass"

export default function AboutMe(){
    return(
        <section id="scrollAbout">
            <div className='container'>
                <div className="describe">
                    <h2>Olá meu nome é <span>Marcos</span></h2>
                    <p>Sou formado em técnico de informática e atualmente estou cursando Análise e desenvolvimento
                        de sistemas, estou em busca de uma oportunidade de trabalho. Tecnologia é algo que sempre
                        me atraiu, o estudo dessa área e tudo que engloba esse mundo, 
                        mesmo em excesso é sempre prazeroso.
                    </p>
                </div>
                <div className="MyPicture">
                    <img src={ImgAbout}></img>
                </div>
            </div>
        </section>
    )
}
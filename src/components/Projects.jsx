import "../styles/components/projects.sass";
import ProjectImg from "../img/projetoimg.png";

export default function Projects() {
  return (
    <section id="projects">
      <div>
        <div className="titleProject">
          <span>P</span>
          <span>r</span>
          <span>o</span>
          <span>j</span>
          <span>e</span>
          <span>t</span>
          <span>o</span>
          <span>s</span>
        </div>
      </div>
      <div className="card-project">
        <div className="card">
         <a href="https://movie-star-iota.vercel.app/" className="movie"></a>
         <a href="https://clima-steel-alpha.vercel.app/" className="clima"></a>
          <div className="pro">
            <div className="breve">
              <p>EM BREVE</p>
            </div>
          </div>
          <div className="pro">
            <div className="breve">
              <p>EM BREVE</p>
            </div>
          </div>
          <div className="pro">
            <div className="breve">
              <p>EM BREVE</p>
            </div>
          </div>
          <div className="pro">
            <div className="breve">
              <p>EM BREVE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

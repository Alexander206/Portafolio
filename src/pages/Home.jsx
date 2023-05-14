// Dependences
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Componets
import Header from "../components/Header";

// Estyles
import "../styles/pages/home.scss";

// Resources
import img from "../assets/me.svg";
import imgHtml from "../assets/icon/HTML.svg";
import imgCss from "../assets/icon/CSS.svg";
import imgJavaScript from "../assets/icon/javaScript.svg";
import imgReact from "../assets/icon/react.svg";
import imgNode from "../assets/icon/node.svg";
import headerImg from "../assets/icon/header-img.svg";

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [" Web Developer", " Front-End Developer", " Back-End Developer", " Web Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <>
      <Header />
      <main>
        <section className="banner">
          <article className="container">
            <article className="text">
              <span>Biemvenido a mi portafolio</span>

              <h1>
                Hola! Soy Alexander
                <span
                  className="txt-rotate"
                  dataperiod="1000"
                  data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                >
                  <span className="wrap">{text}</span>
                </span>
              </h1>

              <p>
                Tengo experiencia en proyectos de programación y diseño web. He trabajado en diversos proyectos con
                instituciones de renombre como la Universidad Pedagógica Nacional. Me apasiona enfrentar desafíos en
                situaciones nuevas y complejas, lo que me impulsa a estar Siempre buscar nuevas formas de mejorar y
                ampliar mis habilidades.
              </p>

              <Link to="/#contact">
                Contácta conmigo <img src={headerImg} />
              </Link>
            </article>

            <figure className="img">
              <img className="principal_img" src={img} alt="Programing image" />

              <img className="html_img animate__animated animate__zoomIn" src={imgHtml} alt="Programing image" />
              <img className="css_img animate__animated animate__zoomIn" src={imgCss} alt="Programing image" />
              <img
                className="javaScript_img animate__animated animate__zoomIn"
                src={imgJavaScript}
                alt="Programing image"
              />
              <img className="react_img animate__animated animate__zoomIn" src={imgReact} alt="Programing image" />
              <img className="node_img animate__animated animate__zoomIn" src={imgNode} alt="Programing image" />
            </figure>
          </article>
        </section>
      </main>
    </>
  );
};

export default Home;

import './home.styles.css';
import Carousel from 'react-bootstrap/Carousel';
import NavbarComponent from '../../components/navbar/navbar.component';

import React, { useState, useEffect } from 'react';



function Home() {

    const phrases = ['¿Qué nos mueve?', 'Propósito'];
    const [phraseIndex, setPhraseIndex] = useState(0);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }, 5000); // Change text every 5 seconds
  
      return () => clearTimeout(timer);
    }, [phraseIndex]);
    return (
        
        <div>
            <NavbarComponent/>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1611416517780-eff3a13b0359?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="First slide"
                    />
                    <Carousel.Caption className="custom-carousel-caption"> 
                        <h1>LA COMUNICACIÓN CONSTRUYE PUENTES</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1499174549139-68d3f37243b4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Second slide"
                    />
                    <Carousel.Caption className="custom-carousel-caption">
                        <h1>ABORDAMOS LOS DESAFIOS LIBRES DE PREJUICIOS</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/842339/pexels-photo-842339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Third slide"
                    />
                    <Carousel.Caption className="custom-carousel-caption">
                        <h1>EN UN MUNDO NUEVO Y DIGITAL CONECTAR HACE LA DIFERENCIA</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


            <div className="typewritter">
                <div className="typewritter-text">{phrases[phraseIndex]}</div>
            </div>
        </div>

        
    );
}

export default Home;

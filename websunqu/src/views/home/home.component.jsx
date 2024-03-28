import './home.styles.css';
import Carousel from 'react-bootstrap/Carousel';

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
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1611416517780-eff3a13b0359?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>LA COMUNICACIÓN CONSTRUYE PUENTES</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1536308037887-165852797016?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>ABORDAMOS LOS DESAFIOS LIBRES DE PREJUICIOS</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1575936444724-1cd7baee8ec2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>EN UN MUNDO NUEVO Y DIGITAL CONECTAR HACE LA DIFERENCIA</h3>
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

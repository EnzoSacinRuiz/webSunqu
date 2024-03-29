import React from 'react';
import angloImage from '../../../assets/images/anglo.png';
import chisacImage from '../../../assets/images/chisac.png';
import firstQuantumImage from '../../../assets/images/firstQuantum.png';
import fortunaImage from '../../../assets/images/fortuna.png';
import midisImage from '../../../assets/images/midis.png';
import minagriImage from '../../../assets/images/minagri.png';
import minsurImage from '../../../assets/images/minsur.png';
import tgpImage from '../../../assets/images/tgp.png'; // The variable name was missing 'Image'

function ClientsHome(){
    return(
        <section className="bg-light py-5 py-xl-6">
            <div className="container mb-5 mb-md-6">
                <div className="row justify-content-md-center">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
                        <h2 className="mb-4 display-5">Clients</h2>
                        <p className="text-secondary mb-4 mb-md-5">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque et neque id ligula mattis commodo.</p>
                    </div>
                </div>
            </div>
            <div className="container overflow-hidden">
                <div className="row gy-5 gy-md-6">
                    <div className="col-6 col-md-3 align-self-center text-center">
                        <img src={angloImage} width="125" height="100" alt="Anglo American" className="text-dark"/>
                    </div>
                    <div className="col-6 col-md-3 align-self-center text-center">
                        <img src={chisacImage} width="125" height="100" alt="Chisac" className="text-dark"/>
                    </div>

                    <div className="col-6 col-md-3 align-self-center text-center">
                        <img src={firstQuantumImage} width="125" height="100" alt="Chisac" className="text-dark"/>
                    </div>
                    <div className="col-6 col-md-3 align-self-center text-center">
                        <img src={fortunaImage} width="125" height="100" alt="Chisac" className="text-dark"/>
                    </div>
                  
                </div>

                <div className="row gy-5 gy-md-6">
                <div className="col-6 col-md-3 align-self-center text-center">
                        <img src={midisImage} width="125" height="100" alt="Anglo American" className="text-dark"/>
                    </div>
                    <div className="col-6 col-md-3 align-self-center text-center">
                        <img src={minagriImage} width="125" height="100" alt="Chisac" className="text-dark"/>
                    </div>

                    <div className="col-6 col-md-3 align-self-center text-center">
                        <img src={minsurImage} width="125" height="100" alt="Chisac" className="text-dark"/>
                    </div>
                    <div className="col-6 col-md-3 align-self-center text-center">
                        <img src={tgpImage} width="125" height="100" alt="Chisac" className="text-dark"/>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default ClientsHome;

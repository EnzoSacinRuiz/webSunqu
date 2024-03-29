
function CardsHome(){
    return(
        <div className="container my-5">
            <h2 className="mb-4">INSIGHTS</h2>
            <div className="row g-4">
                <div className="col-md-6">
                    <div className="card">
                        <img src="https://plus.unsplash.com/premium_photo-1661963004511-dfef3e05b8de?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <div className="card-body">
                            <h5 className="card-title">DESVELOS MUNDIALES DE 2024</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p className="card-text"><small className="text-muted">27 enero 2024</small></p>
                            <a href="#" className="btn btn-primary">VER MÁS</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                    <img src="https://plus.unsplash.com/premium_photo-1661963004511-dfef3e05b8de?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <div className="card-body">
                            <h5 className="card-title">LA SEPHORA GENERATION</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p className="card-text"><small className="text-muted">ACTUALIDAD</small></p>
                        </div>
                    </div>
                </div>
                {/* ... more code ... */}
            </div>
            <div className="row">
                <div className="col text-center">
                    <a href="#" className="btn btn-link">VER TODAS</a>
                </div>
            </div>
        </div>
    );
}

export default CardsHome;
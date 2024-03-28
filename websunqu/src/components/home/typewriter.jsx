import "./typewriter.styles.css"

function TypewritterComponent({ phrases, phraseIndex }){
    return(

        <div className="container text-center">
      <div className="row align-items-center">
        <div className="col">
        <div className="typewritter">
                <div className="typewritter-text">{phrases[phraseIndex]}</div>
            </div>        </div>
        <div className="col-auto">
          <div className="h-100" style={{ width: '1px', backgroundColor: '#FF0000' }}></div>
        </div>
        <div className="col col-lg-8">
          <p className="lead">Crear caminos comunicacionales para abordar los complejos desafíos que enfrentan las organizaciones de hoy.</p>
        </div>
      </div>
    </div>
    )
}

export default TypewritterComponent;

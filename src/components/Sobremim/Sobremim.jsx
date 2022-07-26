function Sobremim(props) {
    return(
        <>
            <img 
                className="photo" src={props.link} 
                alt={props.alt}
            />
            <h2 className="nome">{props.title}</h2>
            <p className="p">{props.p}</p>
            <hr className="line" />
        </>
        
    )
}

export default Sobremim
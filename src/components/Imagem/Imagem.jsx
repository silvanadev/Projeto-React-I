function Imagem(props) {
    return(
        <img 
            className="image" 
            src={props.link} 
            alt={props.alt}
        />
    )
}

export default Imagem
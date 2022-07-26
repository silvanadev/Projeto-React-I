function Paragrafo(props) {
    return(
        <div className="text-container">
            <p className='texto'>{props.children}</p>
        </div>
    )
}

export default Paragrafo
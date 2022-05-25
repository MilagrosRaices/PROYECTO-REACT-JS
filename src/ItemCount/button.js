const Button = (props) => {
    return <button style={{ color: props.color}} onClick={props.handleClick}>Agregar al carrito{props.label}</button>
}

export default Button
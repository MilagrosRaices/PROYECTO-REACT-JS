import './NavBar.css'

const NavBar = ()  => {
    return(
        <nav className='box'>
            <h1>Antoniette's Boutique</h1>
            <div>
                <button className='button'>Vestidos Formales</button>
                <button className='button'>Outifits Casuales</button>
                <button className='button'>Calzado</button>
                <button className='button'>Novedades</button>

            </div>
        </nav>
    )
}
export default NavBar

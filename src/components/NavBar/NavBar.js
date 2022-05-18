import './NavBar.css'
import CardWidget from '../../CardWidget/CardWidget'

const NavBar = ()  => {
    return(
        <nav className='box'>
            <div>
                <button className='button'>Vestidos Formales</button>
                <button className='button'>Outifits Casuales</button>
                <button className='button'>Calzado</button>
                <button className='button'>Novedades</button>
                <CardWidget />
            </div>
        
        </nav>
    )
}
export default NavBar

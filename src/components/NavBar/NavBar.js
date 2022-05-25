import './NavBar.css'
import CardWidget from '../../CardWidget/CardWidget'

const NavBar = ()  => {
    return(
        <nav className='box'>
            <div>
                <button className='button'>SmarPhones</button>
                <button className='button'>Notebooks</button>
                <button className='button'>VideoJuegos</button>
                <button className='button'>Merch</button>
                <CardWidget />
            </div>  
        
        </nav>
    )
}
export default NavBar


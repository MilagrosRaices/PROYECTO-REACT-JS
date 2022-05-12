import './NavBar.css'

const NavBar = () => {
    return (
        <nav>
            <h1 className="Title">Antoniette's Boutique</h1>
            <div className="Box">
                <button>Vestidos Formales</button>
                <button>Outfits Casuales</button>
                <button>Calzado</button>
                <button>Novedades</button>
            </div>
        </nav>
    )
}
export default NavBar
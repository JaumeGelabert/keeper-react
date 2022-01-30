import PillPerfil from "./pillPerfil";

function Header() {
    return(
        <div className="header">
            {/** En este div va el BrandName */}
            <div>
                <h1>Keeper</h1>
            </div>
            {/** En este div va el menu y el perfil del usuario */}
            <div>
                <PillPerfil />
            </div>

        </div>
    );
}

export default Header;
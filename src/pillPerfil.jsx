import FotoPerfil from './fotoPerfil';

let userName = 'Unmetus'

function PillPerfil() {
    return(
        <div className="username-pill">
            <div class="dropdown">
            <a class="" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                {userName}
                <i class="bi bi-chevron-down arrow" />
            </a>

            {/* Buena opcion para eliminar codigo duplicado */}
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a class="dropdown-item" href="#">Perfil</a></li>
                <li><a class="dropdown-item" href="#">Configuracion</a></li>
                <li><a class="dropdown-item" href="#">Salir</a></li>
            </ul>
            </div>
            
            <div>
                <FotoPerfil />
            </div>
            
        </div>
    );
};

export default PillPerfil;
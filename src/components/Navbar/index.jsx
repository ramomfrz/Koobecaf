import style from './navbar.module.css'

function Navbar() {
    return (
        <header className={style.container}>
            <div className={style.logo}>
                <img src='./logo.png' alt="Letra 'K' que simboliza o logo" />
                <p>Koobecaf</p>
            </div>
            <div>
                <input placeholder="Pesquisar no Koobcaf" />
            </div>
            <div className={style.rightActions}>
                <p>Entrar</p>
                <img src='./perfil.png' alt="ícone de perfil" />

            </div>
        </header>
    )
}

export default Navbar
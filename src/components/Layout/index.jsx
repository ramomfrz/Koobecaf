import Navbar from '../Navbar'
import style from './layout.module.css'

function Layout() {
    return (
        <div className={style.layout}>
            <main className={style.main}>
                <div className={style.navbar}>
                    <Navbar />
                </div>
            </main>
        </div>
    )
}

export default Layout
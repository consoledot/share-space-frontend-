import style from './navigation.module.scss'
import logo from '../../assets/share space.svg'
const Navigation = ()=>(
    <div className={style.navigation}>
        <div className="logo">
            <img src={logo} alt=""/>
        </div>
        <nav>
            <ul>
                <li>Browse Spaces</li>
                <li>List your Space</li>
                <li>Login</li>
                <li>Get Started</li>
            </ul>
        </nav>
    </div>
)

export default Navigation
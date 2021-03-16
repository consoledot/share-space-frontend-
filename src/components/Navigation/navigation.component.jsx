import './navigation.style.scss'
import logo from '../../assets/share space.svg'
import Button from '../Button/button.component'
const Navigation = ()=>(
    <div className="navigation">
        <div className="logo">
            <img src={logo} alt=""/>
        </div>
        <nav>
            <ul>
                <li>Browse Spaces</li>
                <li>List your Space</li>
                <li className="login">Login</li>
                <Button name="Get Started"/>
            </ul>
        </nav>
    </div>
)

export default Navigation
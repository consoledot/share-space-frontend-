import './navigation.style.scss'
import logo from '../../assets/share space.svg'
import Button from '../Button/button.component'
import {Link,withRouter} from 'react-router-dom'
const Navigation = ({match,history})=>(
    <div className="navigation">
        <div className="logo" onClick={()=>{ history.push("/")}}>
            <img src={logo} alt=""/>
        </div>
        <nav>
            <ul>
                <Link to="/spaces"><li>Browse Spaces</li></Link>
                <li>List your Space</li>
                <Link to="/about-us"><li>About Us</li></Link>
               <Link to='/login'><li className="login">Login</li></Link> 
                <Link to="/sign-up"><Button name="Get Started"/></Link>
            </ul>
        </nav>
    </div>
)

export default withRouter(Navigation)
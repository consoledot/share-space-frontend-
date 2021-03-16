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
                <li>Browse Spaces</li>
                <li>List your Space</li>
               <Link to='/login'><li className="login">Login</li></Link> 
                <Button name="Get Started"/>
            </ul>
        </nav>
    </div>
)

export default withRouter(Navigation)
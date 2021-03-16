import './login.style.scss'
import FormInput from '../../components/FormInput/forminput.component'
import Button from '../../components/Button/button.component'
import {Link} from 'react-router-dom'
const LoginPage = ()=>(
    <div className='loginpage'>
        <div className="form__group">
            <div className="login__text">
                <h3>Log In</h3>
                <p>Log in to continue</p>
            </div>
            <form action="">
                <FormInput type="email" placeholder="Email"/>
                <FormInput type="password" placeholder="Password"/>
                <Button name="Login" type="submit"/>
                <Link to="/forget-password" className="forget__password">Forget Password?</Link>
                <p className="register">Don't have  an account? <Link to='/register'>Sign Up</Link></p>
            </form>
        </div>
    </div>
)

export default LoginPage
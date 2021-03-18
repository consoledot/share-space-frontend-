import './register.style.scss'
import FormInput from '../../components/FormInput/forminput.component'
import Button from '../../components/Button/button.component'
const Register = ()=>(
    <div className="registerpage">
        <div className="register__group">
            <div className="register__text">
                    <h3>Sign Up</h3>
                    <p>Log in to continue</p>
            </div>
            <form action="">
                <FormInput type="text" placeholder="First Name"/>
                <FormInput type="text" placeholder="Last Name"/>
                <FormInput type="email" placeholder="Email"/>
                <FormInput type="tell" placeholder="Phone Number"/>
                <FormInput type="password" placeholder="Password"/>
                <FormInput type="password" placeholder="Confirm Password"/>
                <Button name="Sign Up" type="submit"/>
            </form>
        </div>
    </div>
)
export default Register
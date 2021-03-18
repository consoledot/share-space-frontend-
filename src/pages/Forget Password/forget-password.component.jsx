import './forget-password.style.scss'
import FormInput from '../../components/FormInput/forminput.component'
import Button from '../../components/Button/button.component'
import {Link} from 'react-router-dom'

const ForgetPassword =()=>(
    <div className="forgetpage">
        <div className="forget__group">
            <div className="forget__text">
                <h3>Request password reset</h3>
                <p>Enter email address to request for password change.</p>
            </div>
            <form>
                <FormInput type="email" placeholder="Email"/>
                <Button name="Confirm" type="submit"/>
                <Link to="/login">Back to login</Link>
            </form>
        </div>
    </div>
)

export default ForgetPassword
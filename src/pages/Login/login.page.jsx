import {useState} from 'react'
import './login.style.scss'
import FormInput from '../../components/FormInput/forminput.component'
import Button from '../../components/Button/button.component'
import {Link} from 'react-router-dom'
import axios from 'axios'
const LoginPage = ()=>{
    const [user, setUser] = useState({
        email:"",
        password:""
    })
    const handleInput = (event)=>{
        const {name, value} = event.target
        setUser({...user,[name]:value})
    }
    const Submit = (event)=>{
        event.preventDefault()
        axios.post("https://75b933f329f3.ngrok.io/api/auth/login",user)
            .then(res=>{
                console.log(res)
                console.log(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }
    return(
    <div className='loginpage'>
        <div className="form__group">
            <div className="login__text">
                <h3>Log In</h3>
                <p>Log in to continue</p>
            </div>
            <form action="" onSubmit={Submit}>
                <FormInput type="email" placeholder="Email" name="email" onchange={handleInput}/>
                <FormInput type="password" placeholder="Password"name="password" onchange={handleInput}/>
                <Button name="Login" type="submit"/>
                <Link to="/forgot-password" className="forget__password">Forget Password?</Link>
                <p className="register">Don't have  an account? <Link to='/sign-up'>Sign Up</Link></p>
            </form>
        </div>
    </div>
)
    }

export default LoginPage
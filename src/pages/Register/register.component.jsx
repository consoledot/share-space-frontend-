import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import './register.style.scss'
import {Link} from 'react-router-dom'
import FormInput from '../../components/FormInput/forminput.component'
import Button from '../../components/Button/button.component'
import Authentication from '../../auth/auth'

const Register = ()=>{
    const {signup} = Authentication()
    const history = useHistory()
    const [user, setUser ] = useState({
        name:"",
        email:"",
        password:"",
        number:""
    })
    const handleInput =(event)=>{
        const {value,name} = event.target
        setUser({...user,[name]:value})
    }
    const Submit = async(event)=>{
        event.preventDefault()
        const data = await signup(user)
        if(data.successful){
            history.push("/spaces")
        }
        console.log(data)
    }
        return(
            <div className="registerpage">
                <div className="register__group">
                    <div className="register__text">
                            <h3>Sign Up</h3>
                            <p>Log in to continue</p>
                    </div>
                    <form action="" onSubmit={Submit}> 
                        <FormInput type="text" placeholder="First Name" name="name" onchange={handleInput} />
                        <FormInput type="text" placeholder="Last Name" />
                        <FormInput type="email" placeholder="Email" name="email" onchange={handleInput} />
                        <FormInput type="tel" placeholder="Phone Number" name="number"onchange={handleInput} />
                        <FormInput type="password" placeholder="Password" name="password"onchange={handleInput} />
                        <FormInput type="password" placeholder="Confirm Password"/>
                        <Button name="Sign Up" type="submit"/>
                        <p className="login">Already a User? <Link to='/login'>Sign In</Link></p>
                    </form>
                </div>
            </div>
        )
    }

export default Register
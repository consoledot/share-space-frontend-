import {useState} from 'react'
import './register.style.scss'
import FormInput from '../../components/FormInput/forminput.component'
import Button from '../../components/Button/button.component'
 
const Register = ()=>{
    const [user, setUser ] = useState({
        name:"",
        email:"",
        password:"",
        number:""
    })
    const handleInput =async(event)=>{
        const {value,name} = event.target
        let newUser ={...user,[name]:value}
        await setUser(newUser)
        console.log(user)
    }
        return(
            <div className="registerpage">
                <div className="register__group">
                    <div className="register__text">
                            <h3>Sign Up</h3>
                            <p>Log in to continue</p>
                    </div>
                    <form action="">
                        <FormInput type="text" placeholder="First Name" name="name" onchange={handleInput} />
                        <FormInput type="text" placeholder="Last Name" />
                        <FormInput type="email" placeholder="Email" name="email" onchange={handleInput} />
                        <FormInput type="tel" placeholder="Phone Number" name="number"onchange={handleInput} />
                        <FormInput type="password" placeholder="Password" name="password"onchange={handleInput} />
                        <FormInput type="password" placeholder="Confirm Password"/>
                        <Button name="Sign Up" type="submit"/>
                    </form>
                </div>
            </div>
        )
    }

export default Register
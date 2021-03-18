import {useState} from 'react'
import './register.style.scss'
import FormInput from '../../components/FormInput/forminput.component'
import Button from '../../components/Button/button.component'
import axios from 'axios'
 
const Register = ()=>{
    let data = {}
    const [user, setUser ] = useState({
        name:"",
        email:"",
        password:"",
        number:""
    })
    const handleInput =async(event)=>{
        const {value,name} = event.target
        data ={...user,[name]:value}
        await setUser({...user,[name]:value})
        console.log(user)
        console.log(data)
    }
    const Submit = (event)=>{
        event.preventDefault()
        console.log({...user,number:parseInt(user.number)})
        axios.post("https://75b933f329f3.ngrok.io/api/auth/register",user)
            .then(res=>{
                console.log(res)
                console.log(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
        // axios({
        //     method:"post",
        //     url:"https://cors.bridged.cc/http://localhost:8080/api/auth/register",
        //     data:data
        // })
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
                    </form>
                </div>
            </div>
        )
    }

export default Register
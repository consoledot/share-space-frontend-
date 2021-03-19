import axios from "axios"

const Authentication =()=>{
    const signup = async(data)=>{
        try {
            const response = await axios.post("https://20ccf7c0f715.ngrok.io/api/auth/register",data)
            const message = response.data
            return message

        } catch (error) {
            return error
        }
    }
    const login =async(data)=>{
            try{
                const response = await axios.post("https://20ccf7c0f715.ngrok.io/api/auth/login",data)
                const  message = response.data
                return message
            }catch(err){
                return err
            }

    }
    const logout = {}
 return {login,logout,signup}
}

 


export default Authentication
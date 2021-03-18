import './forminput.style.scss'

const FormInput =({type, placeholder, onchange,name})=>(
    <input type={type} placeholder={placeholder} required onChange={onchange} name={name}/>
)

export default FormInput
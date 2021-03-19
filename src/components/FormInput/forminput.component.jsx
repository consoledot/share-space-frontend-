import './forminput.style.scss'

const FormInput =({type, placeholder, onchange,name,inputRef})=>(
    <input type={type} placeholder={placeholder} required onChange={onchange} name={name}ref={inputRef}/>
)

export default FormInput
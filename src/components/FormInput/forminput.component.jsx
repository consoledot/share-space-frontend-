import './forminput.style.scss'

const FormInput =({type, placeholder, onchange,name,inputRef,multiple})=>{
    if(type !== "textarea"){
        return <input type={type} placeholder={placeholder} required onChange={onchange} name={name}ref={inputRef} multiple={multiple}/>
    }
   return <textarea placeholder={placeholder} onChange={onchange} name={name}></textarea>
    
    }

export default FormInput 
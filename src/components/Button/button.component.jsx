import './button.style.scss'

const Button = ({name,invert})=>(
    <button style={{
        backgroundColor:`${invert ? "black":"rgb(133, 133, 228)"}`
    }}>
        {name}
    </button>
)

export default Button
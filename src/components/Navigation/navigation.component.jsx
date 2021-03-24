import './navigation.style.scss'
import {useRef,useState,useEffect} from 'react'
import logo from '../../assets/share space.svg'
import Button from '../Button/button.component'
import {Link,withRouter} from 'react-router-dom'
const Navigation = ({history})=>{
    const navigation = useRef()
    const menu = useRef()
    const navigationBody = useRef()
    const [showMenu, setShowMenu] = useState(false)
    const removeMenu = ()=>{
        setShowMenu(false) 
        navigation.current.classList.remove("show")
        menu.current.classList.remove("show")
    }
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 40){
                navigationBody.current.classList.add("scroll")
            }else{
                navigationBody.current.classList.remove("scroll")
            }
        })
    },[])
    return(
        <div className="navigation" ref={navigationBody}>
            <div className="logo" onClick={()=>{ 
                history.push("/")
                removeMenu()
                }}>
                <img src={logo} alt=""/>
            </div>
            <div className="menu" ref ={menu}onClick={()=>{
                navigation.current.classList.toggle("show")
                menu.current.classList.toggle("show")
               setShowMenu(!showMenu)
            //    showMenu ? navigation.current.classList.remove("show") : navigation.current.classList.add("show")
                
            }}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <nav ref={navigation}>
                <ul>
                    <Link to="/spaces" onClick={removeMenu}><li>Browse Spaces</li></Link>
                   <Link to="/list-your-space"onClick={removeMenu}><li>List your Space</li></Link> 
                    <Link to="/about-us" onClick={removeMenu}><li>About Us</li></Link>
                    <Link to='/login' onClick={removeMenu}><li className="login">Login</li></Link> 
                    <Link to="/sign-up" onClick={removeMenu}><Button name="Get Started" invert={showMenu}/></Link>
                </ul>
            </nav>
        </div>
    )
    }

export default withRouter(Navigation)
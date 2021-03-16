import  './home.style.scss'
import headerlogo from '../../assets/space-logo.svg'
import Button from '../../components/Button/button.component'
const Home = ()=>(
    <div>
        <header>
            <div className="header-text">
                <h1>Your Last Stop In Getting Your Desired Space</h1>
                <p>Search for Apartments, Shop, Event Centres and other spaces that are affordable and </p>
                <Button name='Browse Spaces'/>
            </div>
            <div className="header__image">
                <img src={headerlogo} alt=""/>
            </div>
        </header>
        <section></section>
    </div>
)
export default Home
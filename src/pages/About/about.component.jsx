import './about.style.scss'
import stroke from '../../assets/stroke.svg'
import about from '../../assets/about.jpg'
import Loading from '../../components/Loading/loading.component'

const About = ()=>(
    <div className="about">
        <div className="header-text">
            <h1>Who we are</h1>
            <img src={stroke}/>
        </div>
        <div className="details">
            <h2>Bringing your needs closer to you</h2>
            <p>We are building the most convenient way for you to get a desired space anywhere.</p>
            <p>Whether you are looking for an office space, a warehouse, an event centre, an apartment etc</p>
            <p>We also help properties owners get their properties available to costumers  </p>
        </div>
        <div className="about__img">
            <img src={about}/>
        </div>
        <Loading/>
    </div>
)

export default About
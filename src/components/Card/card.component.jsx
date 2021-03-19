import './card.style.scss'
import warehouse from '../../assets/warehouse.jpg'

const Card =()=>(
    <div className="card">
        <div className="image">
            <img src={warehouse}/>
            <p className="type">Warehouse</p>
        </div>
        <div className="info">
            <p className="name">The Usman Dan Store</p>
            <p className="location">Abuja</p>
            <p className="price">$1,000,000</p>
        </div>
    </div>
)
export default Card
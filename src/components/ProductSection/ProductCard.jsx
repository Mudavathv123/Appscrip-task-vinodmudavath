import { CiHeart } from "react-icons/ci";
import './productsection.css'

const ProductCard = props => {

    const {product} = props

    const {image,title } = product

    const updatedTitle = title.length > 22 ? title.slice(0,22) +"..." : title;

    return <li className="product-item-container">
        <img src = {image} alt = "product" className='product-img'/>
        <p className="product-title">{updatedTitle}</p>
        <div className="product-description-container">
            <p className='product-description'><a href="#" className="singn-link">Sign in</a> or Create an account to see pricing</p>
            <CiHeart size= "22"/>
        </div>
    </li>
}

export default ProductCard
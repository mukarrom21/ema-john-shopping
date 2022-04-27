import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css'
// Product card components
const Product = (props) => {
    // destructure object
    const {product, handleAddToCart}=props;
    const {img, name, price, ratings, seller}=product;

    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: {ratings} start</small></p>
            </div>
                <button onClick={()=>handleAddToCart(product)} className='btn-add-to-cart'>
                    <p>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Product;
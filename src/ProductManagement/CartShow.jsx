import { PropTypes } from 'prop-types';
const CartShow = ({ cart }) => {

    const { productName, brandName, price, type, photo } = cart;
    return (
        <div>
            <div className='flex justify-center gap-8 items-center p-12'>
                <img src={photo} alt="" className='h-20 ' />
                <div>
                    <p className="font-bold"><span className='font-rancho text-xl'>Product Name:</span> {productName}</p>
                    <p className="font-bold"><span className='font-rancho text-xl'>Brand:</span> {brandName}</p>
                    <p className="font-bold"><span className='font-rancho text-xl'>Price:</span> ${price}</p>
                    <p className="font-bold"><span className='font-rancho text-xl'>Product Type:</span> {type}</p>
                </div>

            </div>
        </div>
    );
};

CartShow.propTypes = {
    cart: PropTypes.object.isRequired
}
export default CartShow;
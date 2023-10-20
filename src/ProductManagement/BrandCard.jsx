import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {
    const { brandName, brandLogo } = brand;
    return (
        <Link to={`/brands/${brandName}`}>
            <div className='bg-orange-300 p-2 rounded shadow-2xl' >
                <img src={brandLogo} alt="" className='h-[100px] w-[100px]' />
                <h2 className='text-bold font-rancho text-center text-orange-600 font-bold'>{brandName}</h2>
            </div>
        </Link>
    );
};

BrandCard.propTypes = {
    brand: PropTypes.object.isRequired,
};
export default BrandCard;
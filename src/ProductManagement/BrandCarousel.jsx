import {PropTypes} from 'prop-types';

const BrandCarousel = ({images}) => {
    const {img1, img2, img3} = images;
    console.log(img1, img2, img3);
    return (
        <div>
            
        </div>
    );
};

BrandCarousel.propTypes = {
    images: PropTypes.object.isRequired
};
export default BrandCarousel;
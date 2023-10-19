
import Carousel from 'better-react-carousel'
import image1 from '../../assets/images/b-1.avif';
import image2 from '../../assets/images/b-2.avif';
import image3 from '../../assets/images/b-3.avif';
import image4 from '../../assets/images/b-4.avif';
import image5 from '../../assets/images/b-5.avif';

const Banner = () => {

    return (
        <div className='md:container mx-auto'>
            <Carousel cols={1} rows={1} gap={10} loop>
                <Carousel.Item>
                    <img className="md:h-[500px] h-[280px] lg:w-4/5 md:w-full w-7/8  mx-auto" src={image3} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="md:h-[500px] h-[280px] lg:w-4/5 md:w-full w-7/8 mx-auto" src={image2} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="md:h-[500px] h-[280px] lg:w-4/5 md:w-full w-7/8 mx-auto" src={image1} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="md:h-[500px] h-[280px] lg:w-4/5 md:w-full w-7/8 mx-auto" src={image4} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="md:h-[500px] h-[280px] lg:w-4/5 md:w-full w-7/8 mx-auto" src={image5} />
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Banner;

import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import bg from '../../assets/images/bg-3.png';

const Home = () => {
    const bgS = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%'
    }
    return (
        <div style={bgS}>
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Home;
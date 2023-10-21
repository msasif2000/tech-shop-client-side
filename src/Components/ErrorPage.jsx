import { Link } from 'react-router-dom';
import errorImg from '../assets/images/404.gif'

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center p-8'>
            <div className='flex justify-center'>
                <img src={errorImg} alt="" className='h-[600px] w-[700px]' />
            </div>
            <div className='flex justify-center'>
                <Link to='/'><button className='p-2 bg-orange-600 text-white rounded'>Back to home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;
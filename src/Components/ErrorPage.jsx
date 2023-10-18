import errorImg from '../assets/images/404.gif'

const ErrorPage = () => {
    return (
        <div className='flex justify-center p-8'>
            <img src={errorImg} alt="" />
        </div>
    );
};

export default ErrorPage;
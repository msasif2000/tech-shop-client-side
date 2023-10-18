import f_img from '../assets/images/footer-img.avif'
import bg from '../assets/images/bg-5.png'
const Footer = () => {
    const footStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover', // Optional: Set background size as needed
        backgroundRepeat: 'no-repeat', // Optional: Set background repeat as needed
        backgroundPosition: 'center', // Optional: Set background position as needed
        width: '100%',
    }
    return (
        <div style={footStyle}>
            <footer className="footer md:container mx-auto text-white py-4">
                <aside className='pt-4'>
                    <img src={f_img} alt="" className='h-[180px] w-[200px]' />
                    <p className='text-2xl font-rancho '>Tech-PH Electronics Ltd.<br /></p>
                    <p className='font-semibold'>Providing reliable tech since 2005</p>
                </aside>
                <nav className='pt-16'>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className='pt-16'>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className='pt-16'>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
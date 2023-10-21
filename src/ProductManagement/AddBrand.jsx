import { useLocation, useNavigate } from 'react-router-dom';
import bg from '../assets/images/bg-7.jpg'
import Navbar from '../Components/Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBrand = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const bgStyle = {
        background: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    const handleAddBrand = (e) => {
        e.preventDefault();
        const form = e.target;
        const brandName = form.brandName.value;
        const brandLogo = form.brandLogo.value;

        const newBrand = { brandName, brandLogo };
        console.log(newBrand);

        fetch('https://tech-ph-electronics-ow4bfvch6-mostafa-s-asifs-projects.vercel.app/brands', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBrand)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast.success("Brand Added Successfully!", {
                position: toast.POSITION.TOP_CENTER, autoClose: 1500,
            });


            setTimeout(() => {
                navigate(location.state?.from ? location.state.from : '/');
            }, 2000);
        })
    }
    return ( 
        <div>
            <Navbar></Navbar>
            <div style={bgStyle}>
                <div className="md-container lg:mx-24 md:mx-6 mx-2">
                    <div className=" lg:p-12 md:p-6 p-4 space-y-6">
                        <h2 className="font-rancho text-4xl text-center text-[#374151]">Add New Brand</h2>
                        <form onSubmit={handleAddBrand} className='lg:w-1/3 md:w-1/2 mx-auto'>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Brand Name</span>
                                </label>
                                <label className="input-group">
                                    <input required type="text" name="brandName" placeholder="Enter Brand name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Brand Logo</span>
                                </label>
                                <label className="input-group">
                                    <input required type="url" name="brandLogo" placeholder="Enter Brand Logo URL" className="input input-bordered w-full" />
                                </label>
                            </div>

                            <input type="submit" value="Add Brand" className="w-full mt-6 bg-orange-600 text-white border-black border-2 text-center p-2 font-rancho text-2xl" />
                        </form>

                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddBrand;
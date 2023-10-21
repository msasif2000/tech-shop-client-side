import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import CartShow from "./CartShow";
import bg from '../../src/assets/images/bg-7.jpg'

const Cart = () => {
    const carts = useLoaderData();
    console.log(carts);

    const bgStyle = {
        background: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }
    return (
        <div>
            <Navbar></Navbar>

            <div style={bgStyle}>
                <div className="md:container mx-auto ">
                <h2 className="font-rancho text-3xl py-4 text-center">Your Cart: </h2>
                {
                    carts.map(cart => <CartShow key={cart._id} cart={cart}></CartShow>)
                }
                </div>
            </div>
        </div>
    );
};

export default Cart;